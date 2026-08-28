import Logo from './Logo.jsx'
import { useRelease } from '../hooks/useRelease.js'

export default function Footer() {
  const { version, releaseUrl } = useRelease()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="landing-footer">
      <div className="landing-shell">
        {/* Big Typographic Statement */}
        <div className="landing-footer__statement-box">
          <p className="landing-footer__statement">
            One less tab between you and the music.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="landing-footer__nav-grid">
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#top" className="landing-brand inline-flex" aria-label="Back to top">
              <Logo className="landing-brand__mark rounded-full" markOnly />
              <span className="landing-brand__name">noctune</span>
            </a>
            <p className="text-xs text-white/50 max-w-xs leading-relaxed">
              A lightweight native desktop music player built for focused listening, clean metadata, and offline sqlite storage.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400/90 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{version} Released & Stable</span>
            </div>
          </div>

          {/* Links Col 1: Product */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Product</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#demo" className="hover:text-noctune-gold transition-colors">Interactive Sandbox</a></li>
              <li><a href="#capabilities" className="hover:text-noctune-gold transition-colors">Smart Matching Engine</a></li>
              <li><a href="#details" className="hover:text-noctune-gold transition-colors">Listening Analytics</a></li>
              <li><a href="#shortcuts" className="hover:text-noctune-gold transition-colors">Keyboard Hotkeys</a></li>
              <li><a href="#download" className="hover:text-noctune-gold transition-colors">Download Windows & Linux</a></li>
            </ul>
          </div>

          {/* Links Col 2: Open Source */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Open Source</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://github.com/caya8205-2/noctune" target="_blank" rel="noreferrer" className="hover:text-noctune-gold transition-colors inline-flex items-center gap-1">
                  GitHub Repository ↗
                </a>
              </li>
              <li>
                <a href={releaseUrl} target="_blank" rel="noreferrer" className="hover:text-noctune-gold transition-colors inline-flex items-center gap-1">
                  Releases ({version}) ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/caya8205-2/noctune/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer" className="hover:text-noctune-gold transition-colors inline-flex items-center gap-1">
                  Changelog ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/caya8205-2/noctune/issues" target="_blank" rel="noreferrer" className="hover:text-noctune-gold transition-colors inline-flex items-center gap-1">
                  Report Bug or Feature ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Legal & Security */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Security & Tech</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://github.com/caya8205-2/noctune/blob/main/LICENSE" target="_blank" rel="noreferrer" className="hover:text-noctune-gold transition-colors">
                  MIT Open Source License
                </a>
              </li>
              <li><span className="text-white/40">Tauri 2.0 + Rust Backend</span></li>
              <li><span className="text-white/40">No Telemetry • Zero Bundled Ads</span></li>
              <li><span className="text-emerald-400/80 font-mono text-xs">SHA256 verified binaries</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="landing-footer__bottom">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Noctune by <span className="text-white/70">Caya8205</span>. Open source under the MIT License.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 hidden md:inline">100% VirusTotal Clean</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="landing-footer__back-top"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
