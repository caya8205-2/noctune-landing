import { useState } from 'react'

const VIEWS = [
  {
    key: 'full player',
    label: 'player',
    src: '/screenshot-full.png',
    title: 'the whole listening surface.',
    body: 'album art, queue, lyrics, and playback stay in one desktop window.',
    alt: 'noctune full player view showing a track playing with album art, lyrics, and upcoming tracks',
  },
  {
    key: 'stats',
    label: 'history',
    src: '/screenshot-stats.png',
    title: 'listening history without a year-end wait.',
    body: 'see plays, time listened, artists, tracks, and daily activity from local history.',
    alt: 'noctune stats view showing plays, hours listened, artists, tracks, and daily activity',
  },
  {
    key: 'cache',
    label: 'cache',
    src: '/screenshot-cache.png',
    title: 'storage you can inspect and clear.',
    body: 'manage tracks, lyrics, and audio cache directly—then export or import when you need to.',
    alt: 'noctune settings showing cache management with export, import, and clear controls',
  },
  {
    key: 'debug',
    label: 'matcher',
    src: '/screenshot-debug.png',
    title: 'see why a version was chosen.',
    body: 'the match debugger exposes resolved candidates and confidence scores per track.',
    alt: 'noctune debug dashboard showing spotify-to-youtube matches and confidence scores',
  },
]

export default function Screenshot() {
  const [active, setActive] = useState('stats')
  const current = VIEWS.find((view) => view.key === active)

  return (
    <section id="look-inside" className="workbench">
      <div className="section-intro section-intro--split">
        <div>
          <p className="machine-label">REAL PRODUCT CAPTURES</p>
          <h2>look past the play button.</h2>
        </div>
        <p>the parts that usually disappear behind a streaming service stay legible and under your control.</p>
      </div>

      <div className="workbench__tabs" role="tablist" aria-label="noctune product views">
        {VIEWS.map((view) => (
          <button
            key={view.key}
            type="button"
            role="tab"
            aria-selected={active === view.key}
            onClick={() => setActive(view.key)}
          >
            {view.label}
          </button>
        ))}
      </div>

      <figure className="workbench__figure">
        <img src={current.src} alt={current.alt} />
        <figcaption>
          <span className="machine-label">{current.label}</span>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
        </figcaption>
      </figure>
    </section>
  )
}
