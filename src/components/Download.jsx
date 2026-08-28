import { useState } from 'react'
import { useRelease } from '../hooks/useRelease.js'
import LinuxLogo from './LinuxLogo.jsx'

export default function Download() {
  const [showSpotifyHelp, setShowSpotifyHelp] = useState(false)
  const { version, releaseUrl, windowsExeUrl, linuxDebUrl, linuxAppImageUrl } = useRelease()

  return (
    <section id="download" className="landing-download-section">
      <div className="landing-shell">
        <div className="landing-download-box">
          {/* Top Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="landing-kicker justify-center mb-3">
              <span className="landing-kicker__dot" />
              <span>Available for Windows & Linux</span>
            </div>
            <h2 className="landing-download-title">
              Keep the player. Lose the tab.
            </h2>
            <p className="landing-download-subtitle">
              Download the standalone desktop client ({version}). Packaged with Tauri & Rust.
              No installer telemetry, no background ads, and pre-injected with Spotify Web API access.
            </p>
          </div>

          {/* Platform Cards Grid: Windows and Linux */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Windows (Active) */}
            <div className="landing-platform-card landing-platform-card--active">
              <div className="landing-platform-card__header">
                <div className="landing-platform-card__icon text-noctune-gold">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
                  </svg>
                </div>
                <span className="landing-badge-gold">Windows 10 / 11</span>
              </div>
              <h3 className="landing-platform-card__name">Windows Client</h3>
              <p className="landing-platform-card__desc">Native 64-bit installer with instant background updates</p>

              <div className="mt-6">
                <a
                  href={windowsExeUrl}
                  className="landing-btn-primary w-full justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download .exe Installer</span>
                </a>
              </div>

              <div className="landing-platform-card__meta">
                <span>Release: {version}</span>
                <span>•</span>
                <span>Tauri Standalone</span>
              </div>
            </div>

            {/* Linux (Active: .deb & .AppImage) */}
            <div className="landing-platform-card landing-platform-card--active">
              <div className="landing-platform-card__header">
                <div className="landing-platform-card__icon">
                  <LinuxLogo className="w-8 h-8 drop-shadow" />
                </div>
                <span className="landing-badge-gold">Linux (.deb & AppImage)</span>
              </div>
              <h3 className="landing-platform-card__name">Linux Client</h3>
              <p className="landing-platform-card__desc">Compatible with Ubuntu, Debian, Arch, Fedora & Wayland</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={linuxDebUrl}
                  className="landing-btn-secondary flex-1 justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download .deb</span>
                </a>

                <a
                  href={linuxAppImageUrl}
                  className="landing-btn-secondary flex-1 justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download .AppImage</span>
                </a>
              </div>

              <div className="landing-platform-card__meta">
                <span>Universal Linux Binaries</span>
                <span>•</span>
                <span>Release: {version}</span>
              </div>
            </div>
          </div>

          {/* Spotify Pre-injected & Custom API Card */}
          <div className="landing-spotify-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.215.352-.676.463-1.028.248-2.812-1.718-6.353-2.106-10.523-1.154-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.571-1.045 8.487-.597 11.635 1.334.352.215.463.676.248 1.03zm1.467-3.26c-.27.441-.849.58-1.29.31-3.219-1.979-8.125-2.551-11.933-1.394-.499.152-1.028-.135-1.18-.635-.152-.499.135-1.028.635-1.18 4.352-1.321 9.771-.682 13.458 1.583.441.27.58.849.31 1.29zm.126-3.41c-3.858-2.291-10.228-2.502-13.918-1.382-.591.18-1.218-.155-1.398-.746-.18-.591.155-1.218.746-1.398 4.242-1.288 11.278-1.043 15.717 1.591.531.315.706 1.002.391 1.533-.315.531-1.002.706-1.538.402z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Spotify Web API Pre-injected (Ready to Use)</h4>
                  <p className="text-xs text-white/60">
                    Noctune comes pre-configured with a bundled Spotify Web API key, so you can start listening instantly with zero developer setup.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSpotifyHelp(!showSpotifyHelp)}
                className="landing-btn-secondary text-xs px-3 py-1.5 h-auto whitespace-nowrap"
              >
                {showSpotifyHelp ? 'Hide Explanation ▲' : 'When is manual input needed? ▼'}
              </button>
            </div>

            {showSpotifyHelp && (
              <div className="mt-4 pt-4 border-t border-white/[0.08] text-xs text-white/70 space-y-2">
                <p>
                  <strong>Why is there a manual API key option in Settings?</strong>
                </p>
                <p>
                  The Spotify Web API requires an active Spotify account on the developer side. If the bundled developer key ever expires or runs into limits, you can enter your own <strong>Client ID</strong> and <strong>Client Secret</strong> in <strong>Settings → Spotify Integration</strong> to keep Spotify features running independently without interruption.
                </p>
                <p className="text-white/60">
                  <strong className="text-amber-300/90">Note:</strong> Creating your own Spotify Web API app on the <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noreferrer" className="text-noctune-gold underline">Spotify Developer Dashboard</a> requires an active <strong>Spotify Premium</strong> account. The bundled pre-injected key works for everyone out of the box with zero requirements.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
