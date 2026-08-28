import { useState } from 'react'

const SCREENSHOT_VIEWS = [
  {
    key: 'full',
    label: 'Full Player & Lyrics',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    src: '/screenshot-full.png',
    alt: 'Noctune full player view showing album art, live synced lyrics, audio visualizer, and upcoming queue',
    title: 'Immersion & Precision Player',
    description:
      'A multi-column workspace tailored for desktop monitors. Live synchronized lyrics flow on the left, waveform visualizer matches the album color tones, and your upcoming queue stays within arm’s reach.',
    tags: ['Synced Lyrics', 'Audio Waveform', 'Queue Management', 'Adaptive Palette'],
  },
  {
    key: 'stats',
    label: 'Listening Analytics',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    src: '/screenshot-stats.png',
    alt: 'Noctune listening stats dashboard showing total hours listened, top tracks, unique artists, and weekly listening activity graph',
    title: 'Year-Round Wrapped on Your Terms',
    description:
      'Track your real listening habits without waiting for annual corporate reports. See exact hourly breakdowns, top artists, repeat ratios, and day-by-day playback distributions.',
    tags: ['Daily Heatmaps', 'Top Artists & Tracks', 'Repeat Frequency', 'Offline Export'],
  },
  {
    key: 'cache',
    label: 'Cache Management',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    src: '/screenshot-cache.png',
    alt: 'Noctune cache settings view showing storage gauges for lyrics, metadata, audio chunks, and import/export tools',
    title: 'Zero Hidden Junk, Full Control',
    description:
      'Manage how much audio, lyrics, and metadata are preserved locally. Instant one-click cache clearing, custom directory routing, and lossless database backups.',
    tags: ['Storage Quotas', 'Audio Pre-caching', 'Database Backup', 'Zero Residual Files'],
  },
  {
    key: 'debug',
    label: 'Match Debugger',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m8 2 1.88 1.88" />
        <path d="M14.12 3.88 16 2" />
        <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
        <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
        <path d="M12 20v-9" />
        <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
        <path d="M6 13H2" />
        <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
        <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
        <path d="M22 13h-4" />
        <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
      </svg>
    ),
    src: '/screenshot-debug.png',
    alt: 'Noctune match debugger dashboard displaying Spotify to YouTube candidate scores and manual link override inputs',
    title: 'Transparent Audio Resolution',
    description:
      'Inspect how the algorithm matched your Spotify song to YouTube. View candidate confidence scores, video IDs, duration parity, and manually paste alternative video links whenever needed.',
    tags: ['Confidence Ratings', 'Duration Parity', 'Manual Re-linking', 'Match History'],
  },
  {
    key: 'focus',
    label: 'Focus & Ambient Mode',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a7 7 0 1 0 10 10" />
      </svg>
    ),
    src: '/screenshot-focus.png',
    alt: 'Noctune minimal focus view with distraction-free typography and ambient album art glow',
    title: 'Distraction-Free Desktop Companion',
    description:
      'Switch to a minimal floating player that sits unobtrusively in the corner of your screen while coding, writing, or studying.',
    tags: ['Compact Window', 'Mini Player', 'Always-on-Top', 'Ambient Glow'],
  },
]

export default function Screenshot() {
  const [activeKey, setActiveKey] = useState('full')
  const currentView = SCREENSHOT_VIEWS.find((v) => v.key === activeKey) || SCREENSHOT_VIEWS[0]

  return (
    <section id="details" className="landing-details-section">
      <div className="landing-shell">
        {/* Section Header */}
        <div className="landing-section-header">
          <div className="landing-kicker">
            <span className="landing-kicker__dot" />
            <span>Under The Hood</span>
          </div>
          <h2 className="landing-section-title">
            Deep dive into the native desktop experience.
          </h2>
          <p className="landing-section-lead">
            Every pixel of Noctune was designed for speed, clarity, and total user sovereignty.
            Explore the screens captured directly from the Windows client.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="landing-screenshot-tabs" role="tablist" aria-label="Noctune Views">
          {SCREENSHOT_VIEWS.map((view) => {
            const isSelected = activeKey === view.key
            return (
              <button
                key={view.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveKey(view.key)}
                className={`landing-screenshot-tab ${isSelected ? 'active' : ''}`}
              >
                <span className="landing-screenshot-tab__icon">{view.icon}</span>
                <span className="landing-screenshot-tab__label">{view.label}</span>
              </button>
            )
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="landing-inspector-card" role="tabpanel">
          {/* Top Info Header */}
          <div className="landing-inspector-card__header">
            <div className="landing-inspector-card__info">
              <h3 className="landing-inspector-card__title">{currentView.title}</h3>
              <p className="landing-inspector-card__desc">{currentView.description}</p>
            </div>

            <div className="landing-inspector-card__tags">
              {currentView.tags.map((tag) => (
                <span key={tag} className="landing-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot Display Frame */}
          <figure className="landing-inspector-frame">
            <div className="landing-inspector-frame__topbar">
              <div className="landing-inspector-frame__dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <div className="landing-inspector-frame__address">
                <span>noctune://app/{currentView.key}</span>
              </div>
              <div className="landing-inspector-frame__meta">
                <span>1920 × 1080 Native UI</span>
              </div>
            </div>

            <div className="landing-inspector-frame__viewport">
              <img
                key={currentView.src}
                src={currentView.src}
                alt={currentView.alt}
                className="landing-inspector-img"
                loading="lazy"
              />
            </div>

            <figcaption className="landing-inspector-caption">
              <span className="text-noctune-gold font-mono">{currentView.label}</span>
              <span className="landing-hero__badge-divider">•</span>
              <span>Captured directly from Noctune 2.1.0 build running locally on Windows 11</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
