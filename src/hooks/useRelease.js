import { useState, useEffect } from 'react'

const FALLBACK_VERSION = 'v4.0.0'
const REPO_URL = 'https://github.com/caya8205-2/noctune'
const API_URL = 'https://api.github.com/repos/caya8205-2/noctune/releases/latest'

export function useRelease() {
  const [release, setRelease] = useState({
    version: FALLBACK_VERSION,
    tag: FALLBACK_VERSION,
    releaseUrl: `${REPO_URL}/releases/latest`,
    windowsExeUrl: `${REPO_URL}/releases/latest`,
    linuxDebUrl: `${REPO_URL}/releases/latest`,
    linuxAppImageUrl: `${REPO_URL}/releases/latest`,
    publishedAt: null,
    isLoading: true,
  })

  useEffect(() => {
    let isMounted = true

    async function fetchLatestRelease() {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) {
          throw new Error(`GitHub API returned status ${res.status}`)
        }
        const data = await res.json()

        if (!isMounted) return

        const tag = data.tag_name || FALLBACK_VERSION
        const version = tag.startsWith('v') ? tag : `v${tag}`

        // Find binary assets if present
        const assets = data.assets || []
        const winExe = assets.find((a) => a.name.endsWith('.exe') || a.name.endsWith('.msi'))
        const linDeb = assets.find((a) => a.name.endsWith('.deb'))
        const linAppImage = assets.find((a) => a.name.endsWith('.AppImage') || a.name.endsWith('.appimage'))

        setRelease({
          version,
          tag,
          releaseUrl: data.html_url || `${REPO_URL}/releases/tag/${tag}`,
          windowsExeUrl: winExe ? winExe.browser_download_url : `${REPO_URL}/releases/latest`,
          linuxDebUrl: linDeb ? linDeb.browser_download_url : `${REPO_URL}/releases/latest`,
          linuxAppImageUrl: linAppImage ? linAppImage.browser_download_url : `${REPO_URL}/releases/latest`,
          publishedAt: data.published_at,
          isLoading: false,
        })
      } catch (err) {
        // Graceful fallback to default version
        if (isMounted) {
          setRelease((prev) => ({
            ...prev,
            version: FALLBACK_VERSION,
            tag: FALLBACK_VERSION,
            isLoading: false,
          }))
        }
      }
    }

    fetchLatestRelease()

    return () => {
      isMounted = false
    }
  }, [])

  return release
}
