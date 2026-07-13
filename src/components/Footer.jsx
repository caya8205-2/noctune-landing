import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <Logo className="h-6 w-6" />
        <div className="flex gap-6 text-[13px] text-muted">
          <a href="https://github.com/caya8205-2/noctune" className="transition hover:text-ink">
            GitHub
          </a>
          <a
            href="https://github.com/caya8205-2/noctune/blob/main/LICENSE"
            className="transition hover:text-ink"
          >
            MIT license
          </a>
        </div>
      </div>
    </footer>
  )
}
