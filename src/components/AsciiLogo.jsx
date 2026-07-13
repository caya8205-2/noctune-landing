import { useEffect, useState } from 'react'

const ASCII_LINES = [
  '  _   _  ___   ____ _____ _   _ _   _ _____ ',
  ' | \\ | |/ _ \\ / ___|_   _| | | | \\ | | ____|',
  ' |  \\| | | | | |     | | | | | |  \\| |  _|  ',
  ' | |\\  | |_| | |___  | | | |_| | |\\  | |___ ',
  ' |_| \\_|\\___/ \\____| |_|  \\___/|_| \\_|_____|',
]

const CHAR_DELAY = 7
const START_DELAY = 300

export default function AsciiLogo({ className = '' }) {
  const [lines, setLines] = useState(Array(ASCII_LINES.length).fill(''))
  const [cursorLine, setCursorLine] = useState(0)
  const [doneTyping, setDoneTyping] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function run() {
      await new Promise((r) => setTimeout(r, START_DELAY))
      for (let li = 0; li < ASCII_LINES.length; li++) {
        if (cancelled) return
        setCursorLine(li)
        const full = ASCII_LINES[li]
        for (let ci = 0; ci <= full.length; ci++) {
          if (cancelled) return
          setLines((prev) => {
            const next = [...prev]
            next[li] = full.slice(0, ci)
            return next
          })
          await new Promise((r) => setTimeout(r, CHAR_DELAY))
        }
      }
      if (!cancelled) setDoneTyping(true)
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <pre
      role="img"
      aria-label="noctune"
      className={`select-none whitespace-pre font-mono text-[10px] leading-[1.2] text-amber-dim sm:text-[12px] ${className}`}
    >
      {lines.map((l, i) => (
        <div key={i}>
          {l}
          {!doneTyping && i === cursorLine && <span className="text-amber animate-pulse">▌</span>}
        </div>
      ))}
    </pre>
  )
}
