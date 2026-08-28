export default function Shortcuts() {
  const SHORTCUTS = [
    { key: 'Space', desc: 'Play / Pause audio playback' },
    { key: 'Ctrl + K', desc: 'Instant search & quick switcher' },
    { key: 'Ctrl + L', desc: 'Toggle synchronized lyrics sidebar' },
    { key: 'Ctrl + → / ←', desc: 'Skip to next / previous track' },
    { key: 'M', desc: 'Mute or restore audio level' },
    { key: 'Ctrl + D', desc: 'Open Spotify-YouTube match debugger' },
    { key: 'Ctrl + S', desc: 'View local listening statistics' },
    { key: 'Esc', desc: 'Close modals, drawers, and overlay popups' },
  ]

  const TECH_STACK = [
    { name: 'Tauri 2.0', role: 'Native OS Window & IPC Bridge', color: 'border-amber-500/30 text-amber-300' },
    { name: 'Rust', role: 'Zero-overhead Audio Streamer', color: 'border-orange-500/30 text-orange-300' },
    { name: 'SQLite', role: 'Local Library & Cache Engine', color: 'border-sky-500/30 text-sky-300' },
    { name: 'Fastify', role: 'Ultra-fast Audio Buffer Bridge', color: 'border-emerald-500/30 text-emerald-300' },
    { name: 'React 18', role: 'Declarative Reactive Frontend', color: 'border-cyan-500/30 text-cyan-300' },
    { name: 'Tailwind CSS', role: 'Adaptive Night Design Tokens', color: 'border-teal-500/30 text-teal-300' },
  ]

  return (
    <section id="shortcuts" className="landing-shortcuts-section">
      <div className="landing-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Keyboard Command Deck */}
          <div className="lg:col-span-7 landing-deck-card">
            <div className="landing-kicker">
              <span className="landing-kicker__dot" />
              <span>Native Workflow</span>
            </div>
            <h3 className="landing-deck-title">Control everything from the keyboard.</h3>
            <p className="landing-deck-desc">
              Built for speed. No need to hunt for tiny playback buttons across crowded browser tabs — control your entire music flow with instant global hotkeys.
            </p>

            <div className="landing-shortcuts-grid">
              {SHORTCUTS.map((item) => (
                <div key={item.key} className="landing-shortcut-item">
                  <kbd className="landing-kbd">{item.key}</kbd>
                  <span className="landing-shortcut-desc">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engine & Architecture Specs */}
          <div className="lg:col-span-5 landing-deck-card landing-deck-card--tech">
            <div className="landing-kicker">
              <span className="landing-kicker__dot" />
              <span>Technology Stack</span>
            </div>
            <h3 className="landing-deck-title">Built with modern, open standards.</h3>
            <p className="landing-deck-desc">
              No closed proprietary black-boxes. Noctune is completely open-source under the MIT license.
            </p>

            <div className="landing-stack-list">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="landing-stack-item">
                  <div className="flex items-center justify-between">
                    <span className="landing-stack-item__name font-mono">{tech.name}</span>
                    <span className="landing-stack-item__role">{tech.role}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="landing-stack-footnote">
              <svg className="w-4 h-4 text-noctune-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>100% Free & Open Source on GitHub. Community pull requests and feature contributions welcome.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
