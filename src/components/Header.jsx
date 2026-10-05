import { useState, useEffect } from 'react'
import Logo from './Logo.jsx'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-black/85 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 rounded-md p-1 -m-1"
            aria-label="Noctune Home"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden bg-black flex items-center justify-center border border-white/10">
              <Logo className="w-5 h-5" markOnly />
            </div>
            <span className="font-display text-lg tracking-tight text-white font-medium">noctune</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-sans font-medium text-white/60 tracking-normal" aria-label="Main Navigation">
          <a href="#demo" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 rounded px-1.5 py-1">
            Player Demo
          </a>
          <a href="#capabilities" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 rounded px-1.5 py-1">
            Resolution
          </a>
          <a href="#details" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 rounded px-1.5 py-1">
            Deep Dive
          </a>
          <a href="#shortcuts" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 rounded px-1.5 py-1">
            Shortcuts
          </a>
          <a href="#download" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 rounded px-1.5 py-1">
            Download
          </a>
        </nav>

        {/* Right CTA / GitHub Repository */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/caya8205-2/noctune"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium text-white/80 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
            aria-label="Noctune on GitHub"
          >
            <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-md text-white/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-14 bg-black/95 backdrop-blur-xl border-b border-white/[0.08] px-5 py-6 shadow-2xl transition-all"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col space-y-1">
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              Player Demo
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              Resolution Engine
            </a>
            <a
              href="#details"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              Deep Dive
            </a>
            <a
              href="#shortcuts"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              Keyboard Shortcuts
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-sm font-medium text-amber-300 hover:text-amber-200 hover:bg-white/[0.04] transition-colors"
            >
              Download Client
            </a>
            <div className="pt-3 mt-2 border-t border-white/[0.08]">
              <a
                href="https://github.com/caya8205-2/noctune"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-md text-xs font-mono text-white/50 hover:text-white"
              >
                <span>GitHub Source</span>
                <span>↗</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
