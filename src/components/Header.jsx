import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-base-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Noctune home">
          <Logo />
        </a>

        <nav className="flex items-center gap-6 text-[14px] text-muted">
          <a href="#features" className="hidden transition hover:text-ink sm:inline">
            Features
          </a>
          <a href="#look-inside" className="hidden transition hover:text-ink sm:inline">
            Look inside
          </a>
          <a
            href="https://github.com/caya8205-2/noctune"
            className="hidden transition hover:text-ink sm:inline"
          >
            GitHub
          </a>
          <a
            href="https://github.com/caya8205-2/noctune/releases/latest"
            className="rounded-full bg-amber px-4 py-2 text-[13px] font-medium text-base-950 transition hover:bg-amber-soft"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  )
}
