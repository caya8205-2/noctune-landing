import { useEffect, useRef } from 'react'

// Same radial-bar rendering approach as the real Visualizer.tsx (128 bars,
// path-based, gradient stroke), but there's no real audio in this demo, so
// the "energy" driving it is a synthetic wave instead of AudioMotionAnalyzer.
export function DemoVisualizer({ isPlaying, palette }) {
  const barsRef = useRef(null)
  const rafRef = useRef(0)
  const tRef = useRef(0)
  const valuesRef = useRef(Array.from({ length: 128 }, () => 0))

  useEffect(() => {
    const path = barsRef.current
    if (!path) return
    const count = 128
    const cx = 50
    const cy = 50
    const innerRadius = 40.5
    const maxLength = 7.6

    function draw() {
      if (isPlaying) tRef.current += 0.045
      const t = tRef.current
      const segments = []
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2
        const synthetic = isPlaying
          ? 0.35 +
            0.3 * Math.sin(t * 2.1 + i * 0.35) +
            0.25 * Math.sin(t * 4.7 + i * 0.12) +
            0.15 * Math.sin(i * 1.7 - t * 1.3)
          : 0.05
        const target = Math.max(0, Math.min(0.84, synthetic))
        const current = valuesRef.current[i]
        valuesRef.current[i] = current + (target - current) * 0.18

        const length = 0.55 + valuesRef.current[i] * maxLength
        const outerRadius = Math.min(48.2, innerRadius + length)
        const x1 = cx + Math.cos(angle) * innerRadius
        const y1 = cy + Math.sin(angle) * innerRadius
        const x2 = cx + Math.cos(angle) * outerRadius
        const y2 = cy + Math.sin(angle) * outerRadius
        segments.push(`M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}`)
      }
      path.setAttribute('d', segments.join(' '))
      rafRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPlaying])

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full pointer-events-none z-10"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="demoVisualizerGradient" x1="12" y1="12" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="52%" stopColor={palette[1] ?? palette[0]} />
          <stop offset="100%" stopColor={palette[0]} />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="39.4"
        fill="none"
        stroke={palette[0]}
        strokeWidth="0.65"
        strokeDasharray="0.8 1.6"
        opacity="0.8"
      />
      <path
        ref={barsRef}
        d=""
        fill="none"
        stroke="url(#demoVisualizerGradient)"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  )
}
