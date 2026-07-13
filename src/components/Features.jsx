const FEATURES = [
  {
    title: 'Spotify metadata',
    body: 'Clean titles, artists, artwork and albums, resolved to playable audio behind the scenes.',
  },
  {
    title: 'Nightly Mixes',
    body: 'Generated from your own listening history, blended with Last.fm similar-track signals.',
  },
  {
    title: 'Smart matching',
    body: 'Scores every candidate and skips reactions, live cuts, covers, karaoke and nightcore edits.',
  },
  {
    title: 'Synced lyrics',
    body: 'Loaded from LRCLIB the moment a track starts, with a Romaji mode for Japanese lyrics.',
  },
  {
    title: 'Adaptive visualizer',
    body: 'A ring around the album art, colored from the artwork that\u2019s currently playing.',
  },
  {
    title: 'Local playlists',
    body: 'Liked songs, drag to reorder, cover uploads, and imports from Spotify or YouTube links.',
  },
  {
    title: 'Discord presence',
    body: 'Shows what you\u2019re playing without keeping a browser tab open to do it.',
  },
  {
    title: 'Runs on your machine',
    body: 'SQLite, local cache, local history. Nothing leaves your desktop unless you ask it to.',
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-md">
          <h2 className="font-display text-[30px] font-light text-ink">
            Everything a music app should already do.
          </h2>
          <p className="mt-3 text-[14px] text-muted">
            Built because the alternatives kept getting heavier.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-[14px] font-medium text-ink">{f.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
