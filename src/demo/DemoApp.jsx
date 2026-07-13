import { useEffect } from 'react'
import { useDemoStore } from './store.js'
import { DemoTitleBar } from './DemoTitleBar.jsx'
import { DemoSidebar } from './DemoSidebar.jsx'
import { DemoPlayerBar } from './DemoPlayerBar.jsx'
import { DemoPlayerView } from './DemoPlayerView.jsx'
import { DemoTrackDetailsSidebar } from './DemoTrackDetailsSidebar.jsx'
import { DemoPlaceholderView } from './DemoPlaceholderView.jsx'

export function DemoApp() {
  const { activeView, showTrackDetails, tick } = useDemoStore()

  useEffect(() => {
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [tick])

  return (
    <div className="relative flex h-[648px] flex-col overflow-hidden rounded-2xl border border-base-700/70 bg-base-950 text-white shadow-2xl shadow-black">
      <div className="pointer-events-none absolute inset-0 bg-ambient" aria-hidden="true" />

      <div className="relative z-10 flex-shrink-0">
        <DemoTitleBar />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 overflow-hidden">
        <div className="hidden w-60 flex-shrink-0 border-r border-white/[0.06] md:block">
          <DemoSidebar />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
          <main className="min-h-0 min-w-0 flex-1 overflow-hidden">
            {activeView === 'player' ? <DemoPlayerView /> : <DemoPlaceholderView />}
          </main>
          {showTrackDetails && activeView === 'player' && <DemoTrackDetailsSidebar />}
        </div>
      </div>

      <div className="relative z-10 h-20 flex-shrink-0 border-t border-white/[0.06] bg-base-950/60 backdrop-blur-xl">
        <DemoPlayerBar />
      </div>
    </div>
  )
}
