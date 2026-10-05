export default function Shortcuts() {
  const SHORTCUTS = [
    { key: 'Space', desc: 'Play / Pause audio playback' },
    { key: 'Ctrl + K', desc: 'Instant search and quick switcher' },
    { key: 'Ctrl + L', desc: 'Toggle synchronized lyrics sidebar' },
    { key: 'Ctrl + → / ←', desc: 'Skip to next / previous track' },
    { key: 'M', desc: 'Mute or restore audio level' },
    { key: 'Ctrl + D', desc: 'Open Spotify and YouTube match debugger' },
    { key: 'Ctrl + S', desc: 'View local listening statistics' },
    { key: 'Esc', desc: 'Close modals, drawers, and overlay popups' },
  ]

  const TECH_STACK = [
    { name: 'Tauri 2.0', role: 'Native OS Window and IPC Bridge' },
    { name: 'Rust', role: 'Zero-overhead Audio Streamer and Proxy' },
    { name: 'SQLite', role: 'Local Library and Cache Database' },
    { name: 'Fastify', role: 'High-throughput Audio Buffer Bridge' },
    { name: 'React 18', role: 'Declarative Reactive Interface' },
    { name: 'Tailwind CSS', role: 'Adaptive Night Design Tokens' },
  ]

  return (
    <section id="shortcuts" className="py-24 sm:py-32 bg-black border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Keyboard Command Deck */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-10 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
                Keyboard Workflow
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-normal tracking-tight">
                Control everything from the keyboard.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                No need to hunt for tiny playback buttons across crowded browser tabs. Control your playback, search catalog, and toggle lyrics with instant global hotkeys.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SHORTCUTS.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors"
                >
                  <span className="text-xs text-white/70 font-sans">{item.desc}</span>
                  <kbd className="px-2 py-1 rounded bg-black border border-white/10 font-mono text-[11px] text-amber-300/90 shadow-sm ml-2 flex-shrink-0">
                    {item.key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engine & Architecture Specs */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-10 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                Technical Stack
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-normal tracking-tight">
                Open standards. Zero telemetry.
              </h3>
              <p className="mt-2 text-sm text-white/70 font-sans leading-relaxed">
                No closed proprietary backdoors. Noctune is completely open-source under the MIT license with verified reproducible builds.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <span className="font-mono text-xs font-medium text-white">{tech.name}</span>
                  <span className="text-xs text-white/50 font-sans">{tech.role}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-white/60 font-sans">
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>100% Free and Open Source on GitHub under the MIT License.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
