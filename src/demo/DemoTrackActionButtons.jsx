import { useEffect, useRef, useState } from 'react'
import { Check, FolderPlus, Heart, Plus, Radio } from 'lucide-react'
import clsx from 'clsx'
import { useDemoStore } from './store.js'
import { DEMO_PLAYLISTS } from './data.js'

export function DemoTrackActionButtons({ track, className = '', buttonClassName = '', iconSize = 15, showLike = true, showRadio = true }) {
  const { toggleLike, liked, toggleRadio, radioMode } = useDemoStore()
  const isLiked = track ? Boolean(liked[track.id]) : false

  function handleLike(e) {
    e.stopPropagation()
    toggleLike(track.id)
  }

  function handleRadio(e) {
    e.stopPropagation()
    toggleRadio()
  }

  return (
    <div className={clsx('flex items-center', className)}>
      {showLike && track && (
        <button
          onClick={handleLike}
          className={clsx(buttonClassName || 'btn-ghost p-1.5 transition-colors', isLiked ? 'text-red-400 hover:text-red-300' : 'text-muted hover:text-white')}
          title={isLiked ? 'Remove from Liked Songs' : 'Add to Liked Songs'}
        >
          <Heart size={iconSize} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      )}

      <AddToPlaylistAction track={track} className={buttonClassName} iconSize={iconSize} />

      {showRadio && (
        <button
          onClick={handleRadio}
          className={clsx(buttonClassName || 'btn-ghost p-1.5', radioMode && 'text-accent')}
          title={radioMode ? 'Stop radio' : 'Start radio'}
        >
          <Radio size={iconSize} />
        </button>
      )}
    </div>
  )
}

function AddToPlaylistAction({ track, className, iconSize = 14 }) {
  const [open, setOpen] = useState(false)
  const [addedTo, setAddedTo] = useState(null)
  const [creating, setCreating] = useState(false)
  const [newName, setNewName] = useState('')
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  useEffect(() => {
    if (!open) {
      setCreating(false)
      setNewName('')
    }
  }, [open])

  useEffect(() => {
    if (creating && inputRef.current) {
      inputRef.current.focus()
    }
  }, [creating])

  function handleAdd(playlistId) {
    setAddedTo(playlistId)
    setTimeout(() => setOpen(false), 400)
  }

  function handleCreate(e) {
    e.preventDefault()
    if (!newName.trim()) return
    handleAdd('new-' + Date.now())
  }

  function handleDropdownWheel(e) {
    e.stopPropagation()
  }

  return (
    <div ref={containerRef} className={clsx('relative', open && 'z-50')}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className={clsx(className || 'btn-ghost p-1.5', open && 'text-accent')}
        title="Add to playlist"
      >
        <FolderPlus size={iconSize} />
      </button>

      {open && (
        <div
          className="absolute bottom-full right-0 z-50 mb-2 flex w-56 flex-col overflow-hidden rounded-xl border border-base-600 bg-base-900 shadow-2xl shadow-black/50 animate-fade-in"
          style={{ animationDuration: '120ms' }}
          onClick={(e) => e.stopPropagation()}
          onWheel={handleDropdownWheel}
        >
          <div className="flex items-center justify-between border-b border-base-600/60 px-3 py-2.5">
            <span className="text-xs font-semibold text-white">Add to playlist</span>
          </div>

          <div className="flex-1 overflow-y-auto py-1 overscroll-contain">
            {DEMO_PLAYLISTS.filter((pl) => pl.id !== 'demo-liked').length === 0 && !creating && (
              <p className="px-3 py-2 text-xs text-muted">No playlists yet.</p>
            )}
            {DEMO_PLAYLISTS.filter((pl) => pl.id !== 'demo-liked').map((playlist) => {
              const isAdded = addedTo === playlist.id
              return (
                <button
                  key={playlist.id}
                  onClick={() => handleAdd(playlist.id)}
                  className={clsx(
                    'flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors',
                    isAdded ? 'bg-accent/10 text-accent' : 'text-soft hover:bg-base-800 hover:text-white'
                  )}
                >
                  {isAdded ? (
                    <Check size={13} className="flex-shrink-0" />
                  ) : (
                    <FolderPlus size={13} className="flex-shrink-0 text-muted" />
                  )}
                  <span className="truncate">{playlist.name}</span>
                  <span className="ml-auto flex-shrink-0 text-[10px] text-muted">{playlist.trackIds?.length ?? 0}</span>
                </button>
              )
            })}
          </div>

          <div className="border-t border-base-600/60">
            {creating ? (
              <form onSubmit={handleCreate} className="flex items-center gap-1.5 px-2.5 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Playlist name"
                  maxLength={100}
                  className="min-w-0 flex-1 rounded-md border border-base-600 bg-base-950 px-2 py-1.5 text-xs text-white placeholder:text-muted focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!newName.trim()}
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent px-2 py-1.5 text-xs font-semibold text-base-950 transition-all duration-200 disabled:opacity-40"
                >
                  <Plus size={12} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setCreating(true)}
                className="flex w-full items-center gap-2 px-3 py-2.5 text-xs text-muted transition-colors hover:bg-base-800 hover:text-white"
              >
                <Plus size={13} />
                New playlist
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
