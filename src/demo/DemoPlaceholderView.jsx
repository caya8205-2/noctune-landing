import { useDemoStore } from './store.js'

const LABELS = {
  home: 'Home',
  search: 'Search',
  history: 'History',
  queue: 'Queue',
  settings: 'Settings',
  playlist: 'Playlist',
  stats: 'Stats',
  'local-files': 'Local Library',
}

export function DemoPlaceholderView() {
  const { activeView, setView } = useDemoStore()

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">
      <p className="section-label mb-3 text-accent">{LABELS[activeView] ?? activeView}</p>
      <h2 className="max-w-sm text-xl font-semibold leading-snug text-white">
        This view isn&rsquo;t wired up in the demo.
      </h2>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        It&rsquo;s here so the layout feels real. The full version lives in the actual app.
      </p>
      <button onClick={() => setView('player')} className="btn-ghost mt-5 border border-base-600/50 px-4 py-2 text-xs">
        Back to Now Playing
      </button>
    </div>
  )
}
