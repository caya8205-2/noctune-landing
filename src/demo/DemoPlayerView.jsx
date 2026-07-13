import { useMemo } from 'react'
import { Activity, Database, Gauge, Heart, Loader2, Mic2, Pause, Play, Radio, Repeat, Repeat1, Shuffle, SkipBack, SkipForward, Zap } from 'lucide-react'
import clsx from 'clsx'
import { useDemoStore } from './store.js'
import { TrackArt } from './TrackArt.jsx'
import { DemoVisualizer } from './DemoVisualizer.jsx'

function formatDuration(seconds) {
  if (!seconds || isNaN(seconds)) return '--:--'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

const sourceMeta = {
  prefetch: { label: 'Prefetch', Icon: Zap, className: 'bg-accent/15 text-accent border-accent/20' },
  cache: { label: 'Cache', Icon: Database, className: 'bg-base-700 text-soft border-base-600/40' },
  cache_refreshed: { label: 'Refreshed', Icon: Activity, className: 'bg-base-700 text-soft border-base-600/40' },
  resolved: { label: 'Resolved', Icon: Radio, className: 'bg-base-700 text-muted border-base-600/40' },
}

function LyricsPanel({ track, progress }) {
  const activeIndex = useMemo(() => {
    let active = -1
    for (let i = 0; i < track.lyrics.length; i++) {
      if (track.lyrics[i].time > progress + 0.3) break
      active = i
    }
    return active
  }, [track, progress])

  return (
    <div className="h-[220px] rounded-xl border border-base-600/70 bg-base-800/70 overflow-hidden">
      <div className="h-full overflow-y-auto px-6 py-5">
        <div className="flex min-h-full flex-col justify-center gap-3">
          {track.lyrics.map((line, index) => {
            const isActive = index === activeIndex
            const isPassed = activeIndex > index
            return (
              <p
                key={index}
                className={clsx(
                  'text-lg leading-relaxed transition-all duration-200',
                  isActive ? 'scale-[1.02] font-semibold text-white' : isPassed ? 'text-muted/60' : 'text-soft'
                )}
              >
                {line.text || '\u00A0'}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function DemoPlayerView() {
  const { currentTrack, isPlaying, isLoading, progress, shuffle, repeat, liked, togglePlay, prev, next, toggleShuffle, cycleRepeat, toggleLike } =
    useDemoStore()

  const SourceIcon = currentTrack?.source ? sourceMeta[currentTrack.source]?.Icon : null
  const isLiked = currentTrack ? Boolean(liked[currentTrack.id]) : false

  return (
    <div className="h-full overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 lg:px-9 lg:py-8">
      <section className="flex min-h-full flex-col items-center">
        <div className="relative mt-2 flex h-56 w-56 flex-shrink-0 items-center justify-center sm:mt-4 sm:h-64 sm:w-64">
          <div
            className="absolute inset-0 flex items-center justify-center animate-spin-slow"
            style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
          >
            <TrackArt
              track={currentTrack}
              className="h-44 w-44 rounded-full border border-base-600/60 object-cover shadow-2xl shadow-black/40 sm:h-48 sm:w-48"
            />
            <DemoVisualizer isPlaying={isPlaying} palette={currentTrack.accent} />
          </div>
          <div className="pointer-events-none absolute inset-4 rounded-full ring-1 ring-white/10" />
          <div className="absolute inset-[42%] z-20 rounded-full border border-base-600/70 bg-base-950 shadow-inner" />
          {isPlaying && (
            <div className="pointer-events-none absolute inset-7 rounded-full border border-accent/30 animate-pulse-accent" />
          )}
        </div>

        <div className="mt-6 w-full max-w-3xl text-center sm:mt-8">
          <p className="section-label mb-3 text-accent">Now playing</p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:truncate sm:text-4xl">{currentTrack.title}</h1>
          <p className="mt-2 truncate text-lg text-soft">{currentTrack.artist}</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-base-600/40 bg-base-900/60 px-2.5 py-1 text-xs text-soft">
              <Gauge size={12} />
              {formatDuration(currentTrack.duration)}
            </span>
            {currentTrack.source && SourceIcon && (
              <span className={clsx('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs', sourceMeta[currentTrack.source].className)}>
                <SourceIcon size={12} />
                {sourceMeta[currentTrack.source].label}
              </span>
            )}
            <button
              onClick={() => toggleLike(currentTrack.id)}
              className={clsx(
                'inline-flex h-[30px] min-w-[42px] items-center justify-center gap-1.5 rounded-full border border-base-600/40 bg-base-900/60 px-2.5 transition-colors',
                isLiked ? 'text-red-400' : 'text-muted hover:text-white'
              )}
              title={isLiked ? 'Remove from Liked Songs' : 'Add to Liked Songs'}
            >
              <Heart size={15} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
            <button onClick={toggleShuffle} className={clsx('btn-ghost p-3', shuffle && 'text-accent')} title="Shuffle">
              <Shuffle size={18} />
            </button>
            <button onClick={prev} className="btn-ghost p-3" title="Previous track">
              <SkipBack size={22} />
            </button>
            <button
              onClick={togglePlay}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-base-950 shadow-lg shadow-accent/10 transition-colors hover:bg-accent-dim"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : isPlaying ? (
                <Pause size={18} fill="currentColor" />
              ) : (
                <Play size={18} fill="currentColor" className="ml-0.5" />
              )}
            </button>
            <button onClick={next} className="btn-ghost p-3" title="Next track">
              <SkipForward size={22} />
            </button>
            <button
              onClick={cycleRepeat}
              className={clsx('btn-ghost p-3', repeat !== 'off' && 'text-accent')}
              title={repeat === 'one' ? 'Repeat one' : repeat === 'all' ? 'Repeat all' : 'Repeat off'}
            >
              {repeat === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
            </button>
          </div>
        </div>

        <section className="mt-8 w-full max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <Mic2 size={15} className="text-accent" />
            <h2 className="section-label">Lyrics</h2>
          </div>
          <LyricsPanel track={currentTrack} progress={progress} />
        </section>
      </section>
    </div>
  )
}
