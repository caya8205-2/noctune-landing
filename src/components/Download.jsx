import { ArrowUpRight, Download as DownloadIcon } from 'lucide-react'

const STACK = ['react', 'vite', 'tailwind', 'fastify', 'tauri', 'rust', 'sqlite', 'youtubei.js']

export default function Download() {
  return (
    <section id="download" className="download-section">
      <div className="download-section__copy">
        <p className="machine-label">NOCTUNE V2.0.0 · WINDOWS</p>
        <h2>leave the tab.<br /><em>keep</em> the music.</h2>
        <p>
          the windows build is available now. macos and linux are planned. spotify metadata uses your own free developer api key; playback works without one.
        </p>
        <div className="download-section__actions">
          <a className="button" href="https://github.com/caya8205-2/noctune/releases/latest">
            <DownloadIcon aria-hidden="true" size={16} />
            download noctune
          </a>
          <a className="text-link" href="https://github.com/caya8205-2/noctune/blob/main/CHANGELOG.md">
            read the changelog
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>

      <aside className="build-sheet">
        <p className="machine-label">BUILD SHEET</p>
        <dl>
          <div><dt>license</dt><dd>mit</dd></div>
          <div><dt>telemetry</dt><dd>none</dd></div>
          <div><dt>library</dt><dd>local sqlite</dd></div>
          <div><dt>package</dt><dd>tauri desktop</dd></div>
        </dl>
        <div className="build-sheet__stack">
          {STACK.map((item) => <span key={item}>{item}</span>)}
        </div>
      </aside>
    </section>
  )
}
