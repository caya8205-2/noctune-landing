import { useEffect, useState } from 'react'
import AsciiLogo from './AsciiLogo.jsx'
import { DemoApp } from '../demo/DemoApp.jsx'

function getGreeting(hour) {
  if (hour < 5) return 'Good night'
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function Hero() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])

  const dateLabel = now
    .toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
    .toUpperCase()
  const timeLabel = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  const greeting = getGreeting(now.getHours())

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, #e3a548, transparent)' }}
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="max-w-xl">
          <AsciiLogo className="mb-6 hidden sm:block" />

          <p className="flex items-center gap-2 text-[12px] tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {dateLabel} · {timeLabel}
          </p>

          <h1 className="mt-4 font-display text-[44px] font-light leading-[1.08] text-ink sm:text-[58px]">
            {greeting}.<br />
            <span className="text-muted">Press play on something.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            Noctune is a desktop music player for YouTube background noise,
            without the memory-eating browser tab, and without Spotify's ads.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/caya8205-2/noctune/releases/latest"
              className="rounded-full bg-amber px-6 py-3 text-[14px] font-medium text-base-950 transition hover:bg-amber-soft"
            >
              Download for free
            </a>
            <a
              href="https://github.com/caya8205-2/noctune"
              className="rounded-full border border-line px-6 py-3 text-[14px] text-ink transition hover:border-amber-dim"
            >
              View on GitHub
            </a>
          </div>

          <p className="mt-4 text-[12px] text-muted">
            Windows today, macOS and Linux planned · MIT licensed
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute inset-x-8 -bottom-6 h-20 rounded-full opacity-40 blur-2xl"
            style={{ background: '#EAB14C' }}
          />
          <DemoApp />
          <p className="mt-3 text-center text-[11px] text-muted">
            This is the real UI, running right here. Dummy tracks — try the controls.
          </p>
        </div>
      </div>
    </section>
  )
}
