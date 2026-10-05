import Logo from './Logo.jsx'
import { useRelease } from '../hooks/useRelease.js'

export default function Footer() {
  const { version, releaseUrl } = useRelease()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-20 bg-black border-t border-white/[0.07] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Editorial Typographic Statement */}
        <div className="max-w-3xl">
          <p className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.15]">
            One less tab between you and the music.
          </p>
        </div>

        {/* 2-Group Editorial Layout (Replacing 4-column AI template) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4 border-t border-white/[0.07]">
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5 text-white" aria-label="Back to top">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <Logo className="w-5 h-5" markOnly />
              </div>
              <span className="font-display text-lg tracking-tight font-medium">noctune</span>
            </a>
            <p className="text-sm text-white/60 max-w-sm font-sans leading-relaxed">
              A native desktop player pairing Spotify metadata with clean YouTube audio streaming. Zero telemetry, local SQLite storage, and an open-source codebase.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/90 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Version {version} · MIT Open Source</span>
            </div>
          </div>

          {/* Direct Navigation & External Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-6 text-sm font-sans">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">Sections</p>
              <ul className="space-y-2 text-white/60">
                <li><a href="#demo" className="hover:text-white transition-colors">Player Sandbox</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Resolution Engine</a></li>
                <li><a href="#details" className="hover:text-white transition-colors">Interface Tour</a></li>
                <li><a href="#shortcuts" className="hover:text-white transition-colors">Keyboard Hotkeys</a></li>
                <li><a href="#download" className="hover:text-amber-300 transition-colors">Download Binaries</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">Open Source</p>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a href="https://github.com/caya8205-2/noctune" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>GitHub Repo</span>
                    <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a href={releaseUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>Releases</span>
                    <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/caya8205-2/noctune/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>Changelog</span>
                    <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/caya8205-2/noctune/blob/main/LICENSE" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <span>MIT License</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/40">
          <p>
            © {new Date().getFullYear()} Noctune by Caya8205. Built with Tauri and Rust.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-mono text-[11px]">Free and Open Source</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1.5 py-1"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
