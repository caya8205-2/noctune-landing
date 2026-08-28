import { DemoApp } from '../demo/DemoApp.jsx'
import { useRelease } from '../hooks/useRelease.js'
import LinuxLogo from './LinuxLogo.jsx'

export default function Hero() {
  const { windowsExeUrl } = useRelease()

  return (
    <section id="top" className="landing-hero">
      {/* Background ambient radial glows */}
      <div className="landing-hero__ambient" aria-hidden="true">
        <div className="landing-hero__ambient-gold" />
        <div className="landing-hero__ambient-moon" />
      </div>

      <div className="landing-shell">
        {/* Top Copy & Value Proposition */}
        <div className="landing-hero__header">
          {/* Main Display Headline (Clean & Bold) */}
          <h1 className="landing-hero__headline">
            Your music, liberated from browser bloat.
          </h1>

          {/* Precision Subtext */}
          <p className="landing-hero__subhead">
            Noctune pairs clean Spotify metadata with seamless YouTube stream audio.
            Get instant playback, synced Romaji lyrics, and offline SQLite history — all in a focused ~45MB desktop player.
          </p>

          {/* CTA Button Group */}
          <div className="landing-hero__actions">
            <a
              href={windowsExeUrl}
              className="landing-btn-primary"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download for Windows</span>
              <span className="landing-btn-primary__tag">.exe</span>
            </a>

            <a href="#download" className="landing-btn-secondary">
              <LinuxLogo className="w-4 h-4" />
              <span>Get Linux .deb / AppImage</span>
            </a>

            <a href="#demo" className="landing-btn-secondary">
              <svg className="w-4 h-4 text-noctune-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Live Interactive Demo</span>
            </a>
          </div>

          {/* Key Metric & Feature Badges */}
          <div className="landing-hero__metrics" aria-label="Core Specifications">
            <div className="landing-hero__metric-item">
              <span className="landing-hero__metric-val">~45 MB</span>
              <span className="landing-hero__metric-lbl">Memory footprint</span>
            </div>
            <div className="landing-hero__metric-sep" />
            <div className="landing-hero__metric-item">
              <span className="landing-hero__metric-val">100% Local</span>
              <span className="landing-hero__metric-lbl">SQLite database</span>
            </div>
            <div className="landing-hero__metric-sep" />
            <div className="landing-hero__metric-item">
              <span className="landing-hero__metric-val">Synced</span>
              <span className="landing-hero__metric-lbl">Romaji + Kanji lyrics</span>
            </div>
            <div className="landing-hero__metric-sep" />
            <div className="landing-hero__metric-item">
              <span className="landing-hero__metric-val">Zero Ads</span>
              <span className="landing-hero__metric-lbl">Pre-injected Web API</span>
            </div>
          </div>
        </div>

        {/* Live Demo Showcase Stage */}
        <div id="demo" className="landing-demo-section">
          <div className="landing-demo-stage">
            {/* Ambient Backlight for the player */}
            <div className="landing-demo-stage__glow" aria-hidden="true" />

            {/* Sandbox banner notification */}
            <div className="landing-demo-stage__banner">
              <div className="landing-demo-stage__banner-left">
                <span className="landing-demo-stage__dot" />
                <span className="landing-demo-stage__status">Interactive Sandbox</span>
                <span className="landing-demo-stage__desc">
                  This is the real Noctune interface. Click tracks to play, switch views in sidebar, adjust EQ, or toggle lyrics.
                </span>
              </div>
              <div className="landing-demo-stage__banner-right">
                <span className="landing-badge-mono">Demo Mode</span>
              </div>
            </div>

            {/* Live Demo App Container */}
            <div className="landing-demo-wrapper">
              <DemoApp />
            </div>

            {/* Stage bottom shadow reflection & caption */}
            <div className="landing-demo-stage__footer">
              <div className="landing-demo-stage__hint">
                <svg className="w-3.5 h-3.5 text-noctune-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <span>Tracks and audio signals in this demo are simulated for the web port. Desktop client plays high-bitrate live audio.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
