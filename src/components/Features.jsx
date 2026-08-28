import { useState } from 'react'

export default function Features() {
  const [activeLyricLang, setActiveLyricLang] = useState('romaji')

  return (
    <section id="capabilities" className="landing-features-section">
      <div className="landing-shell">
        {/* Section Header */}
        <div className="landing-section-header">
          <div className="landing-kicker">
            <span className="landing-kicker__dot" />
            <span>Core Architecture & Capabilities</span>
          </div>
          <h2 className="landing-section-title">
            Engineered for pure listening, not endless tabs.
          </h2>
          <p className="landing-section-lead">
            Every layer in Noctune solves a specific friction point of modern music listening:
            memory bloat, messy metadata, bad covers, and locked-in data.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="landing-bento-grid">
          {/* Bento Card 1: Smart Match & Disambiguation (Large Spanned) */}
          <div className="landing-bento-card landing-bento-card--match col-span-1 lg:col-span-2">
            <div className="landing-bento-card__body">
              <div className="landing-bento-card__badge">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span>Smart Resolution Engine</span>
              </div>
              <h3 className="landing-bento-card__title">Pre-injected Spotify metadata, clean YouTube audio.</h3>
              <p className="landing-bento-card__text">
                Noctune queries official Spotify track structures out-of-the-box using the bundled developer Web API key.
                It resolves the exact audio recording on YouTube while filtering out unwanted fan covers, 1-hour loops, and nightcore edits.
              </p>

              {/* Visual Mockup of Matching Flow */}
              <div className="landing-match-flow">
                <div className="landing-match-flow__node">
                  <span className="landing-match-flow__tag">Spotify Catalog (Pre-injected)</span>
                  <p className="landing-match-flow__song">SPECIALZ — King Gnu</p>
                  <span className="landing-match-flow__meta">ISRC: JP-S10-23-01783</span>
                </div>

                <div className="landing-match-flow__arrow">
                  <div className="landing-match-flow__arrow-line" />
                  <span className="landing-match-flow__score">99.6% Match</span>
                </div>

                <div className="landing-match-flow__node landing-match-flow__node--target">
                  <span className="landing-match-flow__tag landing-match-flow__tag--gold">Audio Stream</span>
                  <p className="landing-match-flow__song">Clean Opus Audio</p>
                  <span className="landing-match-flow__meta text-emerald-400">✓ Official Recording Verified</span>
                </div>
              </div>

              {/* Filters applied pills */}
              <div className="landing-bento-pills">
                <span className="landing-pill">Anti-Nightcore Filter</span>
                <span className="landing-pill">Karaoke Rejection</span>
                <span className="landing-pill">Live Cut Discard</span>
                <span className="landing-pill">Zero Setup Required</span>
              </div>

              <p className="text-xs text-white/50 mt-4">
                <strong className="text-amber-300/90">Note:</strong> Creating custom Spotify Web API credentials requires an active Spotify Premium account. Noctune works immediately for everyone with the bundled pre-injected key.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Synced Romaji Lyrics */}
          <div className="landing-bento-card landing-bento-card--lyrics col-span-1">
            <div className="landing-bento-card__body">
              <div className="landing-bento-card__header-row">
                <div className="landing-bento-card__badge">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Synced Lyrics</span>
                </div>
                {/* Language Toggle */}
                <div className="landing-lyric-toggle">
                  <button
                    type="button"
                    className={`landing-lyric-toggle__btn ${activeLyricLang === 'romaji' ? 'active' : ''}`}
                    onClick={() => setActiveLyricLang('romaji')}
                  >
                    Romaji
                  </button>
                  <button
                    type="button"
                    className={`landing-lyric-toggle__btn ${activeLyricLang === 'kanji' ? 'active' : ''}`}
                    onClick={() => setActiveLyricLang('kanji')}
                  >
                    Kana
                  </button>
                </div>
              </div>

              <h3 className="landing-bento-card__title">Sing along in any language.</h3>
              <p className="landing-bento-card__text">
                Real-time timestamped lyrics with instant Romaji transliteration for Japanese, Korean, and international tracks.
              </p>

              {/* Simulated synced lyrics box */}
              <div className="landing-lyric-box">
                <p className="landing-lyric-box__line landing-lyric-box__line--past">
                  {activeLyricLang === 'romaji' ? 'You are my special' : 'You are my special'}
                </p>
                <p className="landing-lyric-box__line landing-lyric-box__line--active">
                  <span className="landing-lyric-box__pulse" />
                  {activeLyricLang === 'romaji' ? 'Konran souzou kurui saite' : '今際死線 狂い咲いて'}
                </p>
                <p className="landing-lyric-box__line landing-lyric-box__line--next">
                  {activeLyricLang === 'romaji' ? 'Utage no toki ga kita' : '宴の時が来た'}
                </p>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Lightweight Rust + Tauri (Memory Benchmark) */}
          <div className="landing-bento-card landing-bento-card--perf col-span-1">
            <div className="landing-bento-card__body">
              <div className="landing-bento-card__badge">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
                <span>Resource Efficiency</span>
              </div>
              <h3 className="landing-bento-card__title">~45 MB RAM. No Chromium monster.</h3>
              <p className="landing-bento-card__text">
                Packaged with Tauri & Rust instead of Electron. Free your CPU and RAM for gaming, compiling, or rendering.
              </p>

              {/* Visual Benchmark Comparison */}
              <div className="landing-benchmark">
                <div className="landing-benchmark__row">
                  <div className="landing-benchmark__meta">
                    <span>Browser Tab (YT Music)</span>
                    <span className="text-red-400 font-mono text-xs">~1,150 MB</span>
                  </div>
                  <div className="landing-benchmark__bar-bg">
                    <div className="landing-benchmark__bar-fill landing-benchmark__bar-fill--heavy" style={{ width: '95%' }} />
                  </div>
                </div>

                <div className="landing-benchmark__row">
                  <div className="landing-benchmark__meta">
                    <span>Standard Electron App</span>
                    <span className="text-amber-400 font-mono text-xs">~480 MB</span>
                  </div>
                  <div className="landing-benchmark__bar-bg">
                    <div className="landing-benchmark__bar-fill landing-benchmark__bar-fill--med" style={{ width: '45%' }} />
                  </div>
                </div>

                <div className="landing-benchmark__row landing-benchmark__row--highlight">
                  <div className="landing-benchmark__meta">
                    <span className="font-semibold text-noctune-gold">Noctune (Tauri + Rust)</span>
                    <span className="text-noctune-gold font-mono text-xs font-bold">~45 MB</span>
                  </div>
                  <div className="landing-benchmark__bar-bg">
                    <div className="landing-benchmark__bar-fill landing-benchmark__bar-fill--noctune" style={{ width: '8%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Local SQLite & Zero Telemetry */}
          <div className="landing-bento-card landing-bento-card--privacy col-span-1">
            <div className="landing-bento-card__body">
              <div className="landing-bento-card__badge">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Local Sovereignty</span>
              </div>
              <h3 className="landing-bento-card__title">Your listening history stays on your drive.</h3>
              <p className="landing-bento-card__text">
                Likes, listening stats, custom track overrides, and audio caches are stored in a local SQLite file. No cloud accounts, tracking pixels, or ads.
              </p>

              <div className="landing-code-preview">
                <div className="landing-code-preview__top">
                  <span className="landing-code-preview__dot" />
                  <span className="landing-code-preview__file">~/.noctune/library.db</span>
                </div>
                <pre>
                  <code>{`SELECT title, artist, play_count 
FROM listen_history 
ORDER BY played_at DESC 
LIMIT 5;`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Bento Card 5: Discord Rich Presence (Exact Realistic Replica) */}
          <div className="landing-bento-card landing-bento-card--discord col-span-1">
            <div className="landing-bento-card__body">
              <div className="landing-bento-card__badge">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span>Discord Rich Presence</span>
              </div>
              <h3 className="landing-bento-card__title">Show your status automatically.</h3>
              <p className="landing-bento-card__text">
                Broadcasts exact artist names, official album art, Noctune small-badge, and live playback progress to your Discord profile.
              </p>

              {/* Exact Discord RPC Card UI (matching user screenshot) */}
              <div className="discord-rpc-card">
                <div className="discord-rpc-header">
                  <span className="discord-rpc-activity">Listening to King Gnu</span>
                  <div className="discord-rpc-dots" aria-hidden="true">
                    <span>•</span><span>•</span><span>•</span>
                  </div>
                </div>

                <div className="discord-rpc-content">
                  {/* Large Album Art with Noctune Small Badge */}
                  <div className="discord-rpc-art-wrapper">
                    <div className="discord-rpc-art">
                      {/* Specialz King Gnu cover representation */}
                      <div className="discord-rpc-art-inner">
                        <span className="discord-rpc-art-specialz">SPECIALZ</span>
                        <span className="discord-rpc-art-kinggnu">King Gnu</span>
                      </div>
                    </div>
                    {/* Noctune Small Image Logo Badge */}
                    <div className="discord-rpc-small-badge" title="Noctune Player">
                      <img src="/logo.png" alt="Noctune" className="w-3.5 h-3.5 object-contain" />
                    </div>
                  </div>

                  {/* Right Track Details & Progress Bar */}
                  <div className="discord-rpc-details">
                    <p className="discord-rpc-track-name" title="SPECIALZ">
                      SPECIALZ
                    </p>
                    <p className="discord-rpc-artist-name">
                      King Gnu
                    </p>
                    <div className="discord-rpc-playback">
                      <span className="discord-rpc-time">00:05</span>
                      <div className="discord-rpc-bar">
                        <div className="discord-rpc-bar-fill" style={{ width: '2.5%' }} />
                      </div>
                      <span className="discord-rpc-time">04:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note in place of awkward badge */}
              <p className="text-xs text-white/50 mt-4">
                <strong className="text-emerald-400">Note:</strong> Discord Rich Presence is fully optional and can be toggled on or off anytime in Settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
