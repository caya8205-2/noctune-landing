import { useRef } from 'react'
import { Heart, Info, Pause, Play, Repeat, Repeat1, Shuffle, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'
import clsx from 'clsx'
import { useDemoStore } from './store.js'
import { TrackArt } from './TrackArt.jsx'
import { DemoTrackActionButtons } from './DemoTrackActionButtons.jsx'
import { DemoMoreOptionsMenu } from './DemoMoreOptionsMenu.jsx'

function formatDuration(seconds) {
  if (!seconds || isNaN(seconds)) return '--:--'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max)
}

export function DemoPlayerBar() {
  const seekDragging = useRef(false)
  const volDragging = useRef(false)
  const {
    currentTrack,
    isPlaying,
    volume,
    progress,
    duration,
    shuffle,
    repeat,
    liked,
    togglePlay,
    setVolume,
    setProgress,
    next,
    prev,
    toggleMute,
    toggleShuffle,
    cycleRepeat,
    toggleLike,
    showTrackDetails,
    toggleTrackDetails,
  } = useDemoStore()

  const seekDuration = duration > 0 ? duration : currentTrack?.duration ?? 0
  const progressPct = seekDuration > 0 ? (progress / seekDuration) * 100 : 0
  const isLiked = currentTrack ? Boolean(liked[currentTrack.id]) : false

  const progressFillStyle = { width: `${progressPct}%` }
  const progressThumbStyle = { left: `${progressPct}%`, transform: 'translate(-50%, -50%)' }
  const volFillStyle = { width: `${volume * 100}%` }
  const volThumbStyle = { left: `${volume * 100}%`, transform: 'translate(-50%, -50%)' }

  function handleSeekDown(e) {
    e.preventDefault()
    const bar = e.currentTarget
    const rect = bar.getBoundingClientRect()
    const pct = clamp((e.clientX - rect.left) / rect.width, 0, 1)
    setProgress(pct * seekDuration)
    seekDragging.current = true

    function onMove(ev) {
      const r = bar.getBoundingClientRect()
      const v = clamp((ev.clientX - r.left) / r.width, 0, 1)
      setProgress(v * seekDuration)
    }
    function onUp(ev) {
      const r = bar.getBoundingClientRect()
      const v = clamp((ev.clientX - r.left) / r.width, 0, 1)
      setProgress(v * seekDuration)
      seekDragging.current = false
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  function handleVolDown(e) {
    e.preventDefault()
    const bar = e.currentTarget
    const rect = bar.getBoundingClientRect()
    const pct = clamp((e.clientX - rect.left) / rect.width, 0, 1)
    setVolume(pct)
    volDragging.current = true

    function onMove(ev) {
      const r = bar.getBoundingClientRect()
      const v = clamp((ev.clientX - r.left) / r.width, 0, 1)
      setVolume(v)
    }
    function onUp(ev) {
      const r = bar.getBoundingClientRect()
      const v = clamp((ev.clientX - r.left) / r.width, 0, 1)
      setVolume(v)
      volDragging.current = false
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="group/progress relative -mb-2 h-3 w-full cursor-pointer" onMouseDown={handleSeekDown}>
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-white/10 transition-all duration-150 group-hover/progress:h-1.5" />
        <div
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent-dim to-accent transition-[height] duration-150 group-hover/progress:h-1.5"
          style={progressFillStyle}
        />
        <div
          className="absolute top-1/2 h-3.5 w-3.5 rounded-full bg-accent opacity-0 shadow-glow transition-opacity duration-150 group-hover/progress:opacity-100"
          style={progressThumbStyle}
        />
      </div>

      <div className="flex flex-1 items-center gap-2 px-3 sm:gap-4 sm:px-6">
        <div className="-ml-1 flex min-w-0 flex-1 items-center gap-3 rounded-xl px-1 py-1.5 sm:-ml-2 sm:w-72 sm:flex-none sm:px-2">
          {currentTrack ? (
            <>
              <TrackArt track={currentTrack} className="h-10 w-10 flex-shrink-0 rounded-lg border border-white/[0.08] sm:h-11 sm:w-11" />
              <div className="flex min-w-0 flex-1 flex-col items-start">
                <span className="inline-block max-w-full truncate text-left text-sm font-semibold leading-tight text-white">
                  {currentTrack.title}
                </span>
                <span className="mt-0.5 inline-block max-w-full truncate text-left text-xs text-muted">
                  {currentTrack.artist}
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-lg border border-white/[0.08] bg-base-800" />
              <span className="text-sm text-muted">Nothing playing</span>
            </div>
          )}
        </div>

        <div className="hidden flex-1 items-center justify-center gap-2 sm:flex">
          <button onClick={toggleShuffle} className={clsx('btn-ghost', shuffle && 'text-accent')} title="Shuffle">
            <Shuffle size={16} />
          </button>
          <button onClick={prev} className="btn-ghost" title="Previous track">
            <SkipBack size={18} />
          </button>
          <button
            onClick={togglePlay}
            disabled={!currentTrack}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F4C76A] via-accent to-[#D69A36] text-base-950 shadow-glow transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
          </button>
          <button onClick={next} className="btn-ghost" title="Next track">
            <SkipForward size={18} />
          </button>
          <button
            onClick={cycleRepeat}
            className={clsx('btn-ghost', repeat !== 'off' && 'text-accent')}
            title={repeat === 'one' ? 'Repeat one' : repeat === 'all' ? 'Repeat all' : 'Repeat off'}
          >
            {repeat === 'one' ? <Repeat1 size={16} /> : <Repeat size={16} />}
          </button>
        </div>

        <div className="flex items-center justify-end gap-1 sm:hidden">
          <button onClick={prev} className="btn-ghost p-2">
            <SkipBack size={20} />
          </button>
          <button
            onClick={togglePlay}
            disabled={!currentTrack}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F4C76A] via-accent to-[#D69A36] text-base-950 shadow-glow transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
          </button>
          <button onClick={next} className="btn-ghost p-2">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="hidden w-80 items-center justify-end gap-2 sm:flex">
          <span className="w-28 whitespace-nowrap text-right font-mono text-xs tabular-nums text-muted">
            {formatDuration(progress)} / {formatDuration(seekDuration)}
          </span>

          <button onClick={toggleMute} className="btn-ghost">
            {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {currentTrack && (
            <button
              onClick={() => toggleLike(currentTrack.id)}
              className={clsx('btn-ghost p-1.5 transition-colors', isLiked ? 'text-red-400 hover:text-red-300' : 'text-muted hover:text-white')}
              title={isLiked ? 'Remove from Liked Songs' : 'Add to Liked Songs'}
            >
              <Heart size={15} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
          )}

          {currentTrack && (
            <DemoTrackActionButtons
              track={currentTrack}
              className="contents"
              buttonClassName="btn-ghost p-1.5"
              iconSize={15}
              showQueue={false}
              showLike={false}
              showRadio={true}
            />
          )}

          {currentTrack && <DemoMoreOptionsMenu />}

          <button
            onClick={toggleTrackDetails}
            className={clsx('btn-ghost', showTrackDetails && 'text-accent')}
            title={showTrackDetails ? 'Hide track details' : 'Show track details'}
          >
            <Info size={16} />
          </button>

          <div className="group/vol relative flex h-4 w-20 flex-shrink-0 cursor-pointer items-center" onMouseDown={handleVolDown}>
            <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/10" />
            <div className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-soft transition-colors group-hover/vol:bg-accent" style={volFillStyle} />
            <div className="absolute top-1/2 h-3 w-3 rounded-full bg-soft shadow-md shadow-black/30 transition-colors group-hover/vol:bg-accent" style={volThumbStyle} />
          </div>
        </div>
      </div>
    </div>
  )
}
