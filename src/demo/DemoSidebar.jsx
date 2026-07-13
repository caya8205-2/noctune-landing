import { useEffect, useRef, useState } from 'react'
import {
  BarChart3,
  Clock3,
  Download,
  FolderOpen,
  Heart,
  Home,
  ListMusic,
  ListOrdered,
  Plus,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'
import clsx from 'clsx'
import { useDemoStore } from './store.js'
import { DEMO_PLAYLISTS } from './data.js'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 4 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  return 'Good evening'
}

const navItems = [
  { icon: Home, label: 'Home', view: 'home' },
  { icon: Search, label: 'Search', view: 'search' },
  { icon: BarChart3, label: 'Stats', view: 'stats' },
  { icon: FolderOpen, label: 'Local Library', view: 'local-files' },
  { icon: Clock3, label: 'History', view: 'history' },
  { icon: ListOrdered, label: 'Queue', view: 'queue' },
  { icon: Settings, label: 'Settings', view: 'settings' },
]

const smartPlaylists = [
  { id: 'smart:most-played', label: 'Most Played', icon: TrendingUp },
  { id: 'smart:recently-added', label: 'Recently Played', icon: Clock3 },
  { id: 'smart:short-tracks', label: 'Short Tracks', icon: Zap },
  { id: 'smart:discover-weekly', label: 'Discover Weekly', icon: Sparkles },
]

export function DemoSidebar() {
  const { activeView, activePlaylistId, setView } = useDemoStore()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [importUrl, setImportUrl] = useState('')
  const [importing, setImporting] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(new Date()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    function handleClick(event) {
      if (!menuRef.current?.contains(event.target)) {
        setPlaylistMenuOpen(false)
      }
    }
    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [])

  const likedPlaylist = DEMO_PLAYLISTS.find((pl) => pl.id === 'demo-liked')
  const userPlaylists = DEMO_PLAYLISTS.filter((pl) => pl.id !== 'demo-liked')

  return (
    <div className="flex h-full flex-col bg-transparent px-3 py-5">
      <div className="mb-3 flex-shrink-0 px-2">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-accent" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </span>
        </div>
        <p className="mb-1.5 font-mono text-[11px] font-medium tabular-nums text-soft">
          {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </p>
        <h2 className="font-display text-[22px] leading-tight text-white">{getGreeting()}</h2>
      </div>

      <nav className="mb-2 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
        {navItems.map(({ icon: Icon, label, view }) => {
          const active = activeView === view
          return (
            <button
              key={view}
              onClick={() => setView(view)}
              className={clsx(
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                active ? 'bg-white/[0.05] text-white' : 'text-muted hover:bg-white/[0.03] hover:text-white'
              )}
            >
              <span
                className={clsx(
                  'absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-accent transition-all duration-200',
                  active ? 'opacity-100 shadow-glow' : 'opacity-0'
                )}
              />
              <Icon size={18} className={clsx('transition-colors', active && 'text-accent')} />
              {label}
            </button>
          )
        })}
      </nav>

      <div className="flex flex-shrink-0 flex-col" style={{ height: '38%' }}>
        <div className="relative mb-2 flex flex-shrink-0 items-center justify-between px-3" ref={menuRef}>
          <span className="section-label">Playlists</span>
          <button
            onClick={() => setPlaylistMenuOpen((v) => !v)}
            className="btn-ghost p-1"
            title="New playlist"
          >
            <Plus size={14} />
          </button>

          {playlistMenuOpen && (
            <div className="surface-panel absolute right-0 top-full z-50 mt-2 w-64 animate-slide-up p-1.5 md:left-[calc(100%+0.75rem)] md:right-auto md:top-0 md:mt-0">
              <button
                onClick={() => { setPlaylistMenuOpen(false) }}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-soft transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                <Plus size={13} />
                Local playlist
              </button>
              <form
                onSubmit={(e) => { e.preventDefault(); if (!importUrl.trim()) return; setImporting(true); setTimeout(() => { setImporting(false); setImportUrl(''); setPlaylistMenuOpen(false) }, 800) }}
                className="mt-1 border-t border-white/[0.06] pt-2"
              >
                <label className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-soft">
                  <Download size={13} />
                  Import from URL
                </label>
                <input
                  value={importUrl}
                  onChange={(e) => setImportUrl(e.target.value)}
                  disabled={importing}
                  placeholder="Spotify or YouTube URL"
                  className="input-base mt-1 py-2 text-xs"
                />
                <button
                  type="submit"
                  disabled={importing || !importUrl.trim()}
                  className="btn-accent mt-2 w-full py-1.5 text-xs disabled:opacity-50"
                >
                  {importing ? 'Importing playlist' : 'Import'}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {likedPlaylist && (
            <button
              onClick={() => setView('playlist', likedPlaylist.id)}
              className={clsx(
                'group relative flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-150',
                activeView === 'playlist' && activePlaylistId === likedPlaylist.id
                  ? 'bg-white/[0.05] text-white'
                  : 'text-muted hover:bg-white/[0.03] hover:text-white'
              )}
            >
              <Heart
                size={14}
                fill="currentColor"
                className={clsx(
                  'flex-shrink-0',
                  activeView === 'playlist' && activePlaylistId === likedPlaylist.id && 'text-accent'
                )}
              />
              <span className="flex-1 truncate text-left">{likedPlaylist.name}</span>
            </button>
          )}

          <div className="flex flex-shrink-0 flex-col">
            {smartPlaylists.map(({ id, label, icon: Icon }) => {
              const active = activePlaylistId === id && activeView === 'playlist'
              return (
                <button
                  key={id}
                  onClick={() => setView('playlist', id)}
                  className={clsx(
                    'group relative flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-150',
                    active ? 'bg-white/[0.05] text-white' : 'text-muted hover:bg-white/[0.03] hover:text-white'
                  )}
                >
                  <Icon size={14} className={clsx('flex-shrink-0', active && 'text-accent')} />
                  <span className="flex-1 truncate text-left">{label}</span>
                </button>
              )
            })}
          </div>

          <div className="flex flex-col gap-0.5">
            {userPlaylists.map((pl) => {
              const active = activeView === 'playlist' && activePlaylistId === pl.id
              return (
                <div
                  key={pl.id}
                  className={clsx(
                    'group flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-150',
                    active ? 'bg-white/[0.05] text-white' : 'text-muted hover:bg-white/[0.03] hover:text-white'
                  )}
                  onClick={() => setView('playlist', pl.id)}
                >
                  <ListMusic size={14} className={clsx('flex-shrink-0', active && 'text-accent')} />
                  <span className="flex-1 truncate">{pl.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
