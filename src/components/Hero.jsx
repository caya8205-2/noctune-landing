import { DemoApp } from '../demo/DemoApp.jsx'
import { useRelease } from '../hooks/useRelease.js'
import LinuxLogo from './LinuxLogo.jsx'

export default function Hero() {
  const { windowsExeUrl } = useRelease()

  return (
    <section id="top" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Copy & Value Proposition */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Display Headline */}
          <h1 className="font-display font-normal text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#fcfdff] leading-[1.08]">
            Your music. Liberated from browser bloat.
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-2xl mx-auto">
            Noctune pairs official Spotify metadata with YouTube audio streaming in a native 45MB desktop player. Get instant playback, synchronized Romaji lyrics, and offline SQLite history.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={windowsExeUrl}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold bg-[#fcfdff] text-[#0a0a0c] hover:bg-white hover:shadow-xl hover:shadow-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <svg className="w-4 h-4 text-[#0a0a0c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download for Windows</span>
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-black/10 text-black/80 font-medium">.exe</span>
            </a>

            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-white/[0.04] text-white/90 hover:text-white hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <LinuxLogo className="w-4 h-4 opacity-80" />
              <span>Linux Packages</span>
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-sm font-medium text-white/60 hover:text-amber-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Live Player Demo</span>
              <span>↓</span>
            </a>
          </div>

          {/* Technical Specifications Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/[0.07] my-12 text-left bg-white/[0.01] rounded-xl px-6">
            <div>
              <div className="text-xl sm:text-2xl font-mono font-medium text-white tracking-tight">~45 MB</div>
              <div className="text-xs text-white/50 font-sans mt-0.5">Memory footprint</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono font-medium text-white tracking-tight">100% Local</div>
              <div className="text-xs text-white/50 font-sans mt-0.5">SQLite database</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono font-medium text-white tracking-tight">Dual-Script</div>
              <div className="text-xs text-white/50 font-sans mt-0.5">Synced Romaji + Kana</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono font-medium text-white tracking-tight">Zero Ads</div>
              <div className="text-xs text-white/50 font-sans mt-0.5">Direct stream playback</div>
            </div>
          </div>
        </div>

        {/* Live Demo Showcase Stage */}
        <div id="demo" className="mt-6 scroll-mt-20">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0c] overflow-hidden shadow-2xl">
            {/* Stage Titlebar Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-2 text-xs font-mono text-white/50">noctune-desktop · interactive sandbox</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-amber-300/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Web Demo Port
                </span>
              </div>
            </div>

            {/* Live Demo App Container */}
            <div className="p-2 sm:p-4 bg-black/60 overflow-x-auto">
              <div className="min-w-[320px] max-w-full">
                <DemoApp />
              </div>
            </div>

            {/* Stage Footnote */}
            <div className="px-5 py-3 border-t border-white/[0.06] bg-white/[0.01] flex items-center justify-between text-xs text-white/40 font-sans">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-amber-400/80 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>Interactive sandbox: click tracks to play, switch views in sidebar, adjust EQ, or toggle lyrics.</span>
              </div>
              <span className="hidden sm:inline font-mono text-[11px] text-white/30">Synthesized audio signals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
