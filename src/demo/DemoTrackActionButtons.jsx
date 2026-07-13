import { useState } from 'react'
import { ListOrdered, ListPlus, FolderPlus, Radio, Heart, Check } from 'lucide-react'
import clsx from 'clsx'
import { useDemoStore } from './store.js'
import { DEMO_PLAYLISTS } from './data.js'

export function DemoTrackActionButtons({ track, className = '', buttonClassName = '', iconSize = 15, showQueue = true, showLike = true, showRadio = true }) {
  const { playNext, addToQueue, toggleLike, liked, toggleRadio, radioMode } = useDemoStore()
  const [playlistOpen, setPlaylistOpen] = useState(false)
  const [addedFeedback, setAddedFeedback] = useState(null)
  const isLiked = track ? Boolean(liked[track.id]) : false

  function handlePlayNext(e) {
    e.stopPropagation()
    playNext(track)
    setAddedFeedback('play-next')
    setTimeout(() => setAddedFeedback(null), 1200)
  }

  function handleAddToQueue(e) {
    e.stopPropagation()
    addToQueue(track)
    setAddedFeedback('add-queue')
    setTimeout(() => setAddedFeedback(null), 1200)
  }

  function handleAddToPlaylist(e) {
    e.stopPropagation()
    setPlaylistOpen((v) => !v)
  }

  function handleRadio(e) {
    e.stopPropagation()
    toggleRadio()
  }

  function handleLike(e) {
    e.stopPropagation()
    toggleLike(track.id)
  }

  return (
    <div className={clsx('flex items-center', className)}>
      {showQueue && (
        <button
          onClick={handlePlayNext}
          className={clsx(buttonClassName || 'btn-ghost p-1.5', 'relative')}
          title="Play next"
        >
          {addedFeedback === 'play-next' ? (
            <Check size={iconSize} className="text-accent" />
          ) : (
            <ListOrdered size={iconSize} />
          )}
        </button>
      )}

      {showQueue && (
        <button
          onClick={handleAddToQueue}
          className={clsx(buttonClassName || 'btn-ghost p-1.5', 'relative')}
          title="Add to queue"
        >
          {addedFeedback === 'add-queue' ? (
            <Check size={iconSize} className="text-accent" />
          ) : (
            <ListPlus size={iconSize} />
          )}
        </button>
      )}

      <div className="relative">
        <button
          onClick={handleAddToPlaylist}
          className={clsx(buttonClassName || 'btn-ghost p-1.5', playlistOpen && 'text-accent')}
          title="Add to playlist"
        >
          <FolderPlus size={iconSize} />
        </button>

        {playlistOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setPlaylistOpen(false)} />
            <div className="absolute bottom-full right-0 z-50 mb-2 min-w-[160px] animate-fade-in rounded-xl border border-white/[0.08] bg-base-900 p-1.5 shadow-xl">
              <p className="px-2.5 py-1.5 text-[11px] font-medium text-muted">Add to playlist</p>
              {DEMO_PLAYLISTS.map((pl) => (
                <button
                  key={pl.id}
                  onClick={() => { setPlaylistOpen(false); setAddedFeedback('playlist'); setTimeout(() => setAddedFeedback(null), 1200) }}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-soft transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  <FolderPlus size={13} />
                  {pl.name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {showRadio && (
        <button
          onClick={handleRadio}
          className={clsx(buttonClassName || 'btn-ghost p-1.5', radioMode && 'text-accent')}
          title={radioMode ? 'Stop radio' : 'Start radio'}
        >
          <Radio size={iconSize} />
        </button>
      )}

      {showLike && track && (
        <button
          onClick={handleLike}
          className={clsx(buttonClassName || 'btn-ghost p-1.5 transition-colors', isLiked ? 'text-red-400 hover:text-red-300' : 'text-muted hover:text-white')}
          title={isLiked ? 'Remove from Liked Songs' : 'Add to Liked Songs'}
        >
          <Heart size={iconSize} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      )}
    </div>
  )
}
