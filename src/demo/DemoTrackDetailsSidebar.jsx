import { Album, Disc3, Music2, Radio, Tag, UserRound } from 'lucide-react'
import { useDemoStore } from './store.js'
import { TrackArt } from './TrackArt.jsx'

function formatDuration(seconds) {
  if (!seconds || isNaN(seconds)) return '--:--'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function compactNumber(value) {
  if (value === undefined) return undefined
  return new Intl.NumberFormat(undefined, { notation: 'compact' }).format(value)
}

function DetailRow({ icon: Icon, label, value }) {
  if (value === undefined || value === null || value === '') return null
  return (
    <div className="flex items-start gap-2 text-xs">
      <Icon size={13} className="mt-0.5 flex-shrink-0 text-muted" />
      <div className="min-w-0">
        <p className="text-muted">{label}</p>
        <p className="mt-0.5 break-words text-soft">{value}</p>
      </div>
    </div>
  )
}

export function DemoTrackDetailsSidebar() {
  const { currentTrack } = useDemoStore()
  const { meta } = currentTrack
  const genres = meta.genres.slice(0, 5)

  return (
    <aside className="hidden w-72 flex-shrink-0 overflow-y-auto border-l border-base-800 bg-base-950/70 lg:block">
      <div className="flex flex-col gap-4 p-4">
        <TrackArt track={currentTrack} className="aspect-square w-full flex-shrink-0 rounded-lg border border-base-600/60" />

        <div>
          <p className="section-label text-accent">Track details</p>
          <h2 className="mt-2 text-lg font-semibold leading-tight text-white">{currentTrack.title}</h2>
          <p className="mt-1 text-sm text-muted">{currentTrack.artist}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-base-600/50 bg-base-950/40 p-3">
            <p className="text-[10px] uppercase tracking-wide text-muted">Popularity</p>
            <p className="mt-1 text-lg font-semibold text-white">{meta.popularity}</p>
          </div>
          <div className="rounded-lg border border-base-600/50 bg-base-950/40 p-3">
            <p className="text-[10px] uppercase tracking-wide text-muted">Duration</p>
            <p className="mt-1 text-lg font-semibold text-white">{formatDuration(currentTrack.duration)}</p>
          </div>
        </div>

        {genres.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {genres.map((genre) => (
              <span key={genre} className="rounded-full border border-base-600/60 px-2 py-1 text-[11px] text-soft">
                {genre}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-3 rounded-lg border border-base-600/60 bg-base-800 p-3">
          <div className="flex items-start gap-2 text-xs">
            <Album size={13} className="mt-0.5 flex-shrink-0 text-muted" />
            <div className="min-w-0">
              <p className="text-muted">Album</p>
              <p className="mt-0.5 break-words text-soft">{currentTrack.album}</p>
            </div>
          </div>
          <DetailRow icon={Disc3} label="Release" value={meta.releaseDate} />
          <DetailRow icon={Tag} label="Label" value={meta.label} />
          <DetailRow icon={Music2} label="Track" value={`${meta.trackNumber} of ${meta.totalTracks}`} />
          <DetailRow icon={UserRound} label="Artist followers" value={compactNumber(meta.followers)} />
          <DetailRow icon={Radio} label="ISRC" value={meta.isrc} />
        </div>

        <p className="text-center text-[11px] leading-relaxed text-muted">
          Demo track: not on Spotify.
        </p>
      </div>
    </aside>
  )
}
