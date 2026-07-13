const STACK = ['React', 'Vite', 'Tailwind', 'Fastify', 'Tauri', 'Rust', 'SQLite', 'youtubei.js']

export default function Download() {
  return (
    <section id="download" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-line bg-surface p-8 sm:p-12">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="max-w-md">
              <h2 className="font-display text-[28px] font-light text-ink">Noctune v1.10.0</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                Windows build packaged with Tauri, available now.
                macOS and Linux are on the roadmap. No installer telemetry, no bundled ads.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/caya8205-2/noctune/releases/latest"
                  className="rounded-full bg-amber px-6 py-3 text-[14px] font-medium text-base-950 transition hover:bg-amber-soft"
                >
                  Download for Windows
                </a>
                <a
                  href="https://github.com/caya8205-2/noctune/blob/main/CHANGELOG.md"
                  className="rounded-full border border-line px-6 py-3 text-[14px] text-ink transition hover:border-amber-dim"
                >
                  Changelog
                </a>
              </div>

              <p className="mt-5 text-[12px] text-muted">
                Spotify metadata needs a free API key from your own{' '}
                <a
                  href="https://developer.spotify.com/dashboard"
                  className="text-ink underline decoration-line underline-offset-2 hover:decoration-amber"
                >
                  developer.spotify.com/dashboard
                </a>
                , added in Settings. The player itself works without one.
              </p>
            </div>

            <div className="min-w-[220px]">
              <p className="mb-3 text-[12px] text-muted">Built with</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-[12px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
