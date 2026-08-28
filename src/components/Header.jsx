import { useState } from 'react'
import Logo from './Logo.jsx'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="landing-nav-wrap">
      <nav className="landing-nav" aria-label="Main Navigation">
        {/* Brand (Logo Only with black background) */}
        <div className="landing-nav__brand-col">
          <a href="#top" className="landing-brand" aria-label="Noctune Home">
            <Logo className="landing-brand__mark rounded-full" markOnly />
          </a>
        </div>

        {/* Desktop Links (Centered Perfectly) */}
        <div className="landing-nav__links">
          <a href="#demo">Live Demo</a>
          <a href="#capabilities">Features</a>
          <a href="#details">Deep Dive</a>
          <a href="#shortcuts">Shortcuts</a>
          <a href="#download">Download</a>
        </div>

        {/* Right CTA / GitHub */}
        <div className="landing-nav__actions">
          <a
            href="https://github.com/caya8205-2/noctune"
            target="_blank"
            rel="noreferrer"
            className="landing-nav__github"
            aria-label="GitHub Repository"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>Star on GitHub</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="landing-nav__toggle md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="landing-nav__mobile-menu md:hidden" role="dialog" aria-label="Mobile Navigation">
          <div className="landing-nav__mobile-links">
            <a href="#demo" onClick={() => setMobileMenuOpen(false)}>Live Demo</a>
            <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#details" onClick={() => setMobileMenuOpen(false)}>Deep Dive</a>
            <a href="#shortcuts" onClick={() => setMobileMenuOpen(false)}>Shortcuts</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)}>Download</a>
            <a
              href="https://github.com/caya8205-2/noctune"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub Source ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
