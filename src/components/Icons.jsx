export const Play = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M7 4.5v15l13-7.5-13-7.5z" />
  </svg>
)

export const Pause = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <rect x="6" y="4.5" width="4" height="15" rx="1" />
    <rect x="14" y="4.5" width="4" height="15" rx="1" />
  </svg>
)

export const SkipBack = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M6 5v14h2V5H6zm3.5 7L20 5v14L9.5 12z" />
  </svg>
)

export const SkipForward = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18 5v14h-2V5h2zM14.5 12L4 5v14l10.5-7z" />
  </svg>
)

export const Shuffle = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 6h3.5c1.5 0 2.4.6 3.2 1.8l5.6 8.4c.8 1.2 1.7 1.8 3.2 1.8H21" />
    <path d="M17 4l4 3.5-4 3.5M3 18h3.5c1.5 0 2.4-.6 3.2-1.8l.7-1" />
    <path d="M17 20l4-3.5-4-3.5" />
  </svg>
)

export const Repeat = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M17 2l4 4-4 4" />
    <path d="M3 11V9a4 4 0 014-4h14" />
    <path d="M7 22l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 01-4 4H3" />
  </svg>
)

export const Volume = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4z" />
    <path d="M17 8.5a5 5 0 010 7" />
  </svg>
)

export const Heart = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 20s-7-4.5-9.5-9C.8 7.5 2.5 4 6 4c2 0 3.5 1.2 4.5 2.7C11.5 5.2 13 4 15 4c3.5 0 5.2 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
  </svg>
)