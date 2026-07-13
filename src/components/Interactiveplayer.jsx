import { useEffect, useRef, useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume, Heart } from './Icons.jsx'

// Fictional demo data only — not real tracks, not real lyrics.
const TRACKS = [
  {
    title: 'Paper Moon',
    artist: 'Aurora Drift',
    album: 'Paper Moon — Single',
    year: 2024,
    duration: 257,
    popularity: 60,
    tags: ['dream-pop', 'synth', 'night'],
    accent: '#EAB14C',
    lyrics: [
      'City lights blur into gold',
      'Chasing echoes down the hall',
      'Paper moon above the noise',
      'Steady hands, we lose it all',
      'Nothing lasts but this right now',
      'Hold the static, let it go',
    ],
  },
  {
    title: 'Static Bloom',
    artist: 'Kaya Faye',
    album: 'Static Bloom — Single',
    year: 2023,
    duration: 222,
    popularity: 44,
    tags: ['shoegaze', 'lo-fi', 'indie'],
    accent: '#7FA8FF',
    lyrics: [
      'Fold the silence into sound',
      'Colors bleeding through the wall',
      'Static bloom before the dawn',
      'Nothing here to catch our fall',
    ],
  },
  {
    title: 'Glass Orbit',
    artist: 'Nocturne Youth',
    album: 'Glass Orbit — Single',
    year: 2024,
    duration: 301,
    popularity: 52,
    tags: ['electronic', 'ambient', 'downtempo'],
    accent: '#C79AE8',
    lyrics: [
      'Slow orbit, glass and light',
      'Drifting past the afterglow',
      'Nothing weighs the same tonight',
      'Let the quiet carry low',
    ],
  },
]

const NAV = ['Search', 'Stats', 'Local Library', 'History', 'Queue', 'Settings']
const PLAYLISTS = ['Liked Songs', 'Most Played', 'Recently Played', 'Short Tracks', 'Discover Weekly']

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function InteractivePlayer() {
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [time, setTime] = useState(38)
  const [volume, setVolume] = useState(70)
  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [liked, setLiked] = useState(false)
  const [panel, setPanel] = useState('details') // 'details' | 'lyrics'
  const barRef = useRef(null)

  const track = TRACKS[trackIndex]

  useEffect(() => {
    if (!isPlaying) return
    const id = setInterval(() => {
      setTime((t) => {
        if (t >= track.duration) {
          goNext()
          return 0
        }
        return t + 1
      })
    }, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, trackIndex])

  function goNext() {
    setTrackIndex((i) => {
      if (shuffle) {
        let next = i
        while (next === i && TRACKS.length > 1) next = Math.floor(Math.random() * TRACKS.length)
        return next
      }
      return (i + 1) % TRACKS.length
    })
    setTime(0)
  }

  function goPrev() {
    if (time > 4) {
      setTime(0)
      return
    }
    setTrackIndex((i) => (i - 1 + TRACKS.length) % TRACKS.length)
    setTime(0)
  }

  function seek(e) {
    const rect = barRef.current.getBoundingClientRect()
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    setTime(Math.round(pct * track.duration))
  }

  const progressPct = (time / track.duration) * 100
  const activeLyric = Math.min(
    track.lyrics.length - 1,
    Math.floor((time / track.duration) * track.lyrics.length),
  )

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black"
      style={{ '--track-accent': track.accent }}
    >
      {/* title bar */}
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#EC6A5E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF4F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#61C554]" />
        <span className="ml-2 text-[12px] text-muted">Noctune</span>
      </div>

      <div className="grid grid-cols-1 bg-base sm:grid-cols-[190px_1fr]">
        {/* sidebar — decorative, not wired up */}
        <div className="hidden border-r border-line p-4 text-[13px] text-muted sm:block">
          <p className="mb-4 text-[11px] tracking-wide text-muted">GOOD EVENING</p>
          <nav className="space-y-0.5">
            {NAV.map((n) => (
              <p key={n} className="cursor-default rounded-lg px-2 py-1.5 transition hover:bg-raised hover:text-ink">
                {n}
              </p>
            ))}
          </nav>
          <p className="mb-1 mt-5 text-[11px] tracking-wide text-muted">PLAYLISTS</p>
          <nav className="space-y-0.5">
            {PLAYLISTS.map((n) => (
              <p key={n} className="cursor-default truncate rounded-lg px-2 py-1.5 transition hover:bg-raised hover:text-ink">
                {n}
              </p>
            ))}
          </nav>
        </div>

        {/* now playing */}
        <div className="flex flex-col items-center gap-6 px-6 py-10 sm:px-10">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48">
            <svg viewBox="0 0 200 200" className={`h-full w-full ${isPlaying ? 'animate-spin-slow' : ''}`}>
              <circle cx="100" cy="100" r="94" fill="none" stroke="#2A2F3B" strokeWidth="1" />
              <circle
                cx="100"
                cy="100"
                r="94"
                fill="none"
                stroke="var(--track-accent)"
                strokeWidth="1.5"
                strokeDasharray="6 10"
                opacity="0.7"
              />
            </svg>
            <div
              className="absolute inset-[22%] rounded-lg transition-colors duration-500"
              style={{
                background: `linear-gradient(135deg, var(--track-accent), transparent 130%)`,
                boxShadow: '0 20px 50px -20px var(--track-accent)',
              }}
            />
          </div>

          <div className="w-full max-w-xs text-center">
            <p className="truncate text-[15px] text-ink">{track.title}</p>
            <p className="mt-1 truncate text-[12px] text-muted">{track.artist}</p>
          </div>

          <div className="w-full max-w-xs">
            <div
              ref={barRef}
              onClick={seek}
              className="h-1 w-full cursor-pointer bg-line"
            >
              <div
                className="h-1 transition-[width]"
                style={{ width: `${progressPct}%`, background: 'var(--track-accent)' }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-muted">
              <span>{formatTime(time)}</span>
              <span>{formatTime(track.duration)}</span>
            </div>
          </div>

          {/* details / lyrics toggle */}
          <div className="w-full max-w-xs">
            <div className="mb-3 flex gap-1 rounded-full border border-line p-0.5 text-[11px]">
              <button
                onClick={() => setPanel('details')}
                className={`flex-1 rounded-full py-1 transition ${panel === 'details' ? 'bg-raised text-ink' : 'text-muted hover:text-ink'}`}
              >
                Details
              </button>
              <button
                onClick={() => setPanel('lyrics')}
                className={`flex-1 rounded-full py-1 transition ${panel === 'lyrics' ? 'bg-raised text-ink' : 'text-muted hover:text-ink'}`}
              >
                Lyrics
              </button>
            </div>

            {panel === 'details' ? (
              <div className="rounded-xl border border-line bg-surface p-3 text-[11px] text-muted">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-line px-2 py-0.5">Popularity {track.popularity}</span>
                  <span className="rounded-full border border-line px-2 py-0.5">{formatTime(track.duration)}</span>
                  <span className="rounded-full border border-line px-2 py-0.5 text-amber">Resolved</span>
                </div>
                <p className="mb-2 truncate">{track.album} · {track.year}</p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {track.tags.map((t) => (
                    <span key={t} className="rounded-full bg-raised px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => e.preventDefault()}
                  title="Demo track — not a real Spotify link"
                  className="w-full cursor-not-allowed rounded-lg border border-line py-1.5 text-center opacity-60"
                >
                  Open in Spotify
                </button>
              </div>
            ) : (
              <div className="h-[104px] overflow-hidden rounded-xl border border-line bg-surface p-3 text-[12px] leading-6">
                {track.lyrics.map((line, i) => (
                  <p
                    key={i}
                    className="truncate transition-colors"
                    style={{ color: i === activeLyric ? 'var(--track-accent)' : i < activeLyric ? '#3A4151' : '#6A6E78' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* bottom player bar */}
      <div className="flex items-center gap-4 border-t border-line bg-surface px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:flex-initial sm:w-48">
          <div
            className="h-10 w-10 shrink-0 rounded-md"
            style={{ background: `linear-gradient(135deg, ${track.accent}, transparent 130%)` }}
          />
          <div className="min-w-0">
            <p className="truncate text-[13px] text-ink">{track.title}</p>
            <p className="truncate text-[11px] text-muted">{track.artist}</p>
          </div>
          <button onClick={() => setLiked((v) => !v)} className="ml-1 shrink-0 text-muted transition hover:text-ink">
            <Heart className={`h-4 w-4 ${liked ? 'fill-current text-amber' : ''}`} style={liked ? { color: '#EAB14C' } : undefined} />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center gap-4">
          <button
            onClick={() => setShuffle((v) => !v)}
            className={`transition hover:text-ink ${shuffle ? 'text-amber' : 'text-muted'}`}
          >
            <Shuffle className="h-4 w-4" />
          </button>
          <button onClick={goPrev} className="text-ink transition hover:text-amber">
            <SkipBack className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsPlaying((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-base transition hover:bg-amber-soft"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-[1px]" />}
          </button>
          <button onClick={goNext} className="text-ink transition hover:text-amber">
            <SkipForward className="h-4 w-4" />
          </button>
          <button
            onClick={() => setRepeat((v) => !v)}
            className={`transition hover:text-ink ${repeat ? 'text-amber' : 'text-muted'}`}
          >
            <Repeat className="h-4 w-4" />
          </button>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-2 sm:flex">
          <Volume className="h-4 w-4 text-muted" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-line accent-amber"
          />
        </div>
      </div>
    </div>
  )
}