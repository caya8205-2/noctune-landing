import { useEffect, useRef, useState } from 'react'
import { Download, Github, Search, X } from 'lucide-react'
import Logo from './Logo.jsx'

const destinations = [
  { label: 'play the demo', href: '#player', detail: 'try the working player' },
  { label: 'inspect the signal', href: '#signal', detail: 'see what noctune resolves' },
  { label: 'look inside', href: '#look-inside', detail: 'browse real product screens' },
  { label: 'download', href: '#download', detail: 'get the windows build' },
]

export default function Header() {
  const dialogRef = useRef(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        dialogRef.current?.showModal()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const results = destinations.filter((item) =>
    `${item.label} ${item.detail}`.includes(query.toLowerCase()),
  )

  const closeAndNavigate = () => dialogRef.current?.close()

  return (
    <>
      <header className="site-nav">
        <div className="site-nav__inner">
          <a className="brand" href="#top" aria-label="noctune home">
            <Logo className="brand__mark" />
            <span>noctune</span>
          </a>

          <button className="search-pill" type="button" onClick={() => dialogRef.current?.showModal()}>
            <Search aria-hidden="true" size={15} />
            <span className="search-pill__text">find your way</span>
            <kbd>⌘ k</kbd>
          </button>

          <div className="site-nav__actions">
            <a className="nav-icon-link" href="https://github.com/caya8205-2/noctune" aria-label="view noctune on github">
              <Github aria-hidden="true" size={18} />
            </a>
            <a className="button button--compact" href="https://github.com/caya8205-2/noctune/releases/latest">
              <Download aria-hidden="true" size={15} />
              <span>download</span>
            </a>
          </div>
        </div>
      </header>

      <dialog ref={dialogRef} className="command-dialog" onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close()
      }}>
        <div className="command-dialog__bar">
          <Search aria-hidden="true" size={18} />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="search noctune…"
            aria-label="search noctune sections"
          />
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="close search">
            <X aria-hidden="true" size={18} />
          </button>
        </div>
        <div className="command-dialog__results">
          <p className="machine-label">NAVIGATION</p>
          {results.length ? results.map((item) => (
            <a key={item.href} href={item.href} onClick={closeAndNavigate}>
              <span>{item.label}</span>
              <small>{item.detail}</small>
            </a>
          )) : <p className="command-dialog__empty">no matching section.</p>}
        </div>
        <p className="command-dialog__hint"><kbd>esc</kbd> close · <kbd>enter</kbd> open</p>
      </dialog>
    </>
  )
}
