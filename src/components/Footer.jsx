import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__statement">music software should sound loud and live quietly.</p>
      <div className="site-footer__meta">
        <a className="brand" href="#top" aria-label="back to noctune home">
          <Logo className="brand__mark" />
          <span>noctune</span>
        </a>
        <div>
          <a href="https://github.com/caya8205-2/noctune">github</a>
          <a href="https://github.com/caya8205-2/noctune/blob/main/LICENSE">mit license</a>
          <span>2026</span>
        </div>
      </div>
    </footer>
  )
}
