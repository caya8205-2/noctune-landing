const FEATURES = [
  {
    signal: 'MATCH',
    title: 'clean metadata, playable audio.',
    body: 'noctune resolves spotify titles, artists, albums, and artwork to youtube audio behind the scenes.',
  },
  {
    signal: 'FILTER',
    title: 'the right version, not the loudest result.',
    body: 'candidate scoring skips reactions, live cuts, covers, karaoke, and nightcore edits before they reach the queue.',
  },
  {
    signal: 'LYRICS',
    title: 'words arrive with the track.',
    body: 'synced lyrics load from lrclib as playback starts, with romaji available for japanese lyrics.',
  },
  {
    signal: 'LOCAL',
    title: 'your listening stays on your machine.',
    body: 'history, cache, liked songs, playlists, and playback data live in local sqlite storage.',
  },
]

export default function Features() {
  return (
    <section id="signal" className="signal-section">
      <div className="section-intro">
        <p className="machine-label">THE SIGNAL PATH</p>
        <h2>less noise between search and sound.</h2>
        <p>each step is visible, local where it should be, and built around the track you meant to play.</p>
      </div>

      <div className="signal-list">
        {FEATURES.map((feature, index) => (
          <article className="signal-row" key={feature.title}>
            <div className="signal-row__index">{String(index + 1).padStart(2, '0')}</div>
            <div className="signal-row__copy">
              <p className="machine-label">{feature.signal}</p>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
            <div className="signal-row__trace" aria-hidden="true"><span /></div>
          </article>
        ))}
      </div>
    </section>
  )
}
