import { useState } from 'react'

const VIEWS = [
  {
    key: 'full player',
    label: 'Full player',
    src: '/screenshot-full.png',
    alt: 'Noctune full player view showing a track playing with album art, lyrics, and a list of upcoming tracks',
  },
  {
    key: 'stats',
    label: 'Stats',
    src: '/screenshot-stats.png',
    alt: 'Noctune wrapped-style stats view showing total plays, hours listened, unique artists and tracks, and a daily activity chart',
  },
  {
    key: 'cache',
    label: 'Cache controls',
    src: '/screenshot-cache.png',
    alt: 'Noctune settings view showing cache management for tracks, lyrics and audio, with export, import and clear options',
  },
  {
    key: 'debug',
    label: 'Match debugger',
    src: '/screenshot-debug.png',
    alt: 'Noctune debug dashboard showing the Spotify-to-YouTube match cache with confidence scores per track',
  },
]

export default function Screenshot() {
  const [active, setActive] = useState('stats')
  const current = VIEWS.find((v) => v.key === active)

  return (
    <section id="look-inside" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[30px] font-light text-ink">Look inside.</h2>

          <div className="flex flex-wrap gap-1 rounded-full border border-line p-1">
            {VIEWS.map((v) => (
              <button
                key={v.key}
                onClick={() => setActive(v.key)}
                className={`rounded-full px-4 py-1.5 text-[13px] transition ${
                  active === v.key ? 'bg-amber text-base-950' : 'text-muted hover:text-ink'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-8">
          <div
            className="pointer-events-none absolute inset-x-12 -bottom-4 h-16 rounded-full opacity-30 blur-2xl"
            style={{ background: '#e3a548' }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black">
            <img src={current.src} alt={current.alt} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
