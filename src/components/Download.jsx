import { useState } from 'react'
import { useRelease } from '../hooks/useRelease.js'
import LinuxLogo from './LinuxLogo.jsx'

export default function Download() {
  const [showSpotifyHelp, setShowSpotifyHelp] = useState(false)
  const { version, releaseUrl, windowsExeUrl, linuxDebUrl, linuxAppImageUrl } = useRelease()

  return (
    <section id="download" className="py-24 sm:py-32 bg-black border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
              Distribution
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.12]">
              Keep the player. Lose the tab.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70 font-sans leading-relaxed">
              Download the standalone desktop client ({version}). Packaged with Tauri 2.0 and Rust with zero telemetry and pre-injected Spotify Web API access.
            </p>
          </div>

          {/* Platform Cards: Windows & Linux */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Windows Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    Windows 10 / 11
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white font-normal tracking-tight">Windows Client</h3>
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  Native 64-bit installer with background audio stream proxy and direct media keys support.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={windowsExeUrl}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold bg-[#fcfdff] text-[#0a0a0c] hover:bg-white hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <svg className="w-4 h-4 text-[#0a0a0c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download .exe Installer</span>
                </a>
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 px-1">
                  <span>Release: {version}</span>
                  <a href={releaseUrl} target="_blank" rel="noreferrer" className="hover:text-white underline">
                    SHA256 Checksums
                  </a>
                </div>
              </div>
            </div>

            {/* Linux Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <LinuxLogo className="w-5 h-5 opacity-90" />
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/70 border border-white/10">
                    .deb & AppImage
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white font-normal tracking-tight">Linux Client</h3>
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  Compatible with Ubuntu, Debian, Arch, Fedora, and Wayland desktop environments.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={linuxDebUrl}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>.deb Package</span>
                  </a>

                  <a
                    href={linuxAppImageUrl}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>.AppImage</span>
                  </a>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 px-1">
                  <span>Universal Linux x86_64</span>
                  <a href={releaseUrl} target="_blank" rel="noreferrer" className="hover:text-white underline">
                    All Releases
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Spotify Web API Collapsible Notice */}
          <div className="rounded-xl border border-white/[0.07] bg-[#0a0a0c] p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.215.352-.676.463-1.028.248-2.812-1.718-6.353-2.106-10.523-1.154-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.571-1.045 8.487-.597 11.635 1.334.352.215.463.676.248 1.03zm1.467-3.26c-.27.441-.849.58-1.29.31-3.219-1.979-8.125-2.551-11.933-1.394-.499.152-1.028-.135-1.18-.635-.152-.499.135-1.028.635-1.18 4.352-1.321 9.771-.682 13.458 1.583.441.27.58.849.31 1.29zm.126-3.41c-3.858-2.291-10.228-2.502-13.918-1.382-.591.18-1.218-.155-1.398-.746-.18-.591.155-1.218.746-1.398 4.242-1.288 11.278-1.043 15.717 1.591.531.315.706 1.002.391 1.533-.315.531-1.002.706-1.538.402z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-white text-sm">Spotify Web API Pre-injected</h4>
                  <p className="text-xs text-white/60 font-sans">
                    Noctune comes pre-configured with a bundled Spotify Web API key, ready for immediate playback.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSpotifyHelp(!showSpotifyHelp)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-white px-3 py-1.5 rounded bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all self-start sm:self-auto"
              >
                <span>{showSpotifyHelp ? 'Hide Details' : 'Manual API Setup'}</span>
                <span>{showSpotifyHelp ? '▲' : '▼'}</span>
              </button>
            </div>

            {showSpotifyHelp && (
              <div className="mt-4 pt-4 border-t border-white/[0.07] text-xs text-white/70 space-y-2.5 font-sans leading-relaxed">
                <p>
                  <strong>Why is there a manual API key option in Settings?</strong>
                </p>
                <p>
                  The Spotify Web API is used to query official album covers, track listings, and artist metadata. If the bundled key ever reaches rate limits, you can enter your personal <strong>Client ID</strong> and <strong>Client Secret</strong> in <strong>Settings → Spotify Integration</strong> for continuous access.
                </p>
                <p className="text-white/50 text-[11px]">
                  Note: Registering a custom Spotify Developer app on developer.spotify.com requires an active Spotify Premium account. The bundled pre-injected key works for everyone out of the box.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
