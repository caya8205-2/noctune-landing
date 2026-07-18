import { ArrowDown, Download, Github } from 'lucide-react'
import { DemoApp } from '../demo/DemoApp.jsx'

const ticks = Array.from({ length: 72 }, (_, index) => {
  const wave = Math.sin(index * 0.42) * 0.34 + Math.sin(index * 0.13) * 0.22
  return Math.round(28 + Math.abs(wave) * 60)
})

function SignalApparatus() {
  return (
    <figure className="signal-apparatus" aria-label="an audio signal instrument representing noctune’s matching and playback pipeline">
      <div className="signal-apparatus__dial" aria-hidden="true">
        <div className="signal-apparatus__ticks" />
        <div className="signal-apparatus__needle" />
        <div className="signal-apparatus__hub" />
        <span className="signal-apparatus__readout">PLAY</span>
      </div>
      <div className="apparatus-callout apparatus-callout--one"><span>SPOTIFY METADATA</span></div>
      <div className="apparatus-callout apparatus-callout--two"><span>YOUTUBE AUDIO</span></div>
      <div className="apparatus-callout apparatus-callout--three"><span>LOCAL SQLITE</span></div>
    </figure>
  )
}

export default function Hero() {
  return (
    <>
      <section id="top" className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="machine-label">DESKTOP PLAYER · WINDOWS</p>
            <h1>press <em>play</em>.<br />keep the night.</h1>
            <p className="hero__lede">
              noctune turns youtube audio into a focused desktop music library—with spotify metadata,
              synced lyrics, local history, and no browser tab left humming in the background.
            </p>
            <div className="hero__actions">
              <a className="button" href="https://github.com/caya8205-2/noctune/releases/latest">
                <Download aria-hidden="true" size={16} />
                download for windows
              </a>
              <a className="text-link" href="https://github.com/caya8205-2/noctune">
                <Github aria-hidden="true" size={16} />
                read the source
              </a>
            </div>
            <p className="hero__note">free · mit licensed · no installer telemetry</p>
          </div>
          <SignalApparatus />
        </div>
        <a className="hero__scroll" href="#player">
          <ArrowDown aria-hidden="true" size={16} />
          try the real interface
        </a>
      </section>

      <aside className="meter" aria-label="noctune signal path">
        <p className="machine-label">SOURCE · YOUTUBE</p>
        <div className="meter__bars" aria-hidden="true">
          {ticks.map((height, index) => <span key={index} style={{ '--tick-height': `${height}%` }} />)}
        </div>
        <p className="machine-label">OUTPUT · DESKTOP</p>
      </aside>

      <section id="player" className="player-stage">
        <div className="section-intro section-intro--split">
          <div>
            <p className="machine-label">LIVE PRODUCT UI</p>
            <h2>don’t imagine the player.<br />use it.</h2>
          </div>
          <p>
            this is noctune’s interface running in the page with demo tracks. press play, skip,
            open lyrics, or inspect what the matcher resolved.
          </p>
        </div>
        <div className="product-frame">
          <DemoApp />
        </div>
        <p className="product-frame__caption">demo tracks only · controls are interactive · the desktop build keeps your library local</p>
      </section>
    </>
  )
}
