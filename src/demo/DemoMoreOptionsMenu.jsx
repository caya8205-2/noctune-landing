import { useEffect, useRef, useState } from 'react'
import { Timer, SlidersHorizontal } from 'lucide-react'
import clsx from 'clsx'
import { useDemoStore } from './store.js'

export function DemoMoreOptionsMenu() {
  const {
    playbackRate, sleepTimerEnd, crossfadeDuration,
    showMoreMenu, toggleMoreMenu, closeMoreMenu,
    setPlaybackRate, setSleepTimer, setCrossfadeDuration,
  } = useDemoStore()
  const [eqPanelOpen, setEqPanelOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMoreMenu()
        setEqPanelOpen(false)
      }
    }
    if (showMoreMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMoreMenu, closeMoreMenu])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMoreMenu}
        className={clsx('btn-ghost', showMoreMenu && 'text-accent')}
        title="More playback options"
      >
        <span className="text-xs font-bold leading-none tracking-wider">···</span>
      </button>

      {showMoreMenu && (
        <div className="absolute bottom-full right-0 z-50 mb-2 flex min-w-[200px] flex-col gap-0.5 rounded-xl border border-white/[0.08] bg-base-900 p-2 shadow-xl animate-fade-in">
          {/* Sleep Timer */}
          <div className="flex items-center justify-between rounded-lg px-2.5 py-2 hover:bg-white/[0.04]">
            <span className="text-xs text-soft">Sleep timer</span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted">
                {sleepTimerEnd ? `${Math.max(1, Math.round((sleepTimerEnd - Date.now()) / 60000))}m` : 'Off'}
              </span>
              <button
                onClick={() => { setSleepTimer(sleepTimerEnd ? null : 30) }}
                className="btn-ghost p-1"
                title={sleepTimerEnd ? 'Cancel' : 'Set 30m'}
              >
                <Timer size={12} />
              </button>
            </div>
          </div>

          {/* Playback Speed */}
          <div className="rounded-lg px-2.5 py-2 hover:bg-white/[0.04]">
            <div className="mb-1.5 text-xs text-soft">Speed</div>
            <div className="flex gap-1">
              {[0.75, 1, 1.25, 1.5, 2].map(r => (
                <button
                  key={r}
                  onClick={() => setPlaybackRate(r)}
                  className={clsx(
                    'rounded px-2 py-1 text-[11px] font-mono transition-colors',
                    playbackRate === r ? 'bg-accent/20 text-accent' : 'text-muted hover:text-white hover:bg-white/[0.04]'
                  )}
                >
                  {r}x
                </button>
              ))}
            </div>
          </div>

          {/* Crossfade */}
          <div className="rounded-lg px-2.5 py-2 hover:bg-white/[0.04]">
            <div className="mb-1.5 text-xs text-soft">Crossfade</div>
            <div className="flex gap-1">
              {[0, 2, 5, 8, 12].map(s => (
                <button
                  key={s}
                  onClick={() => setCrossfadeDuration(s)}
                  className={clsx(
                    'rounded px-2 py-1 text-[11px] font-mono transition-colors',
                    crossfadeDuration === s ? 'bg-accent/20 text-accent' : 'text-muted hover:text-white hover:bg-white/[0.04]'
                  )}
                >
                  {s === 0 ? 'Off' : `${s}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Equalizer */}
          <div
            className={clsx(
              'flex items-center justify-between rounded-lg px-2.5 py-2 cursor-pointer hover:bg-white/[0.04]',
              eqPanelOpen && 'bg-white/[0.04]'
            )}
            onClick={() => setEqPanelOpen(!eqPanelOpen)}
          >
            <span className="text-xs text-soft">Equalizer</span>
            <SlidersHorizontal size={14} className="text-muted" />
          </div>
          {eqPanelOpen && (
            <div className="px-1 pb-1">
              <DemoEqualizerPanel onClose={() => setEqPanelOpen(false)} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function DemoEqualizerPanel({ onClose }) {
  const [bands, setBands] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const labels = ['32', '64', '125', '250', '500', '1k', '2k', '4k', '8k', '16k']

  function handleBand(index, value) {
    const next = [...bands]
    next[index] = Math.min(6, Math.max(-6, Number(value)))
    setBands(next)
  }

  function reset() {
    setBands([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }

  const isFlat = bands.every(b => b === 0)

  return (
    <div className="rounded-lg border border-white/[0.06] bg-base-950/60 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted">10-band EQ</span>
        {!isFlat && (
          <button onClick={reset} className="text-[10px] text-accent hover:underline">Reset</button>
        )}
      </div>
      <div className="flex h-24 items-end gap-1">
        {bands.map((val, i) => {
          const height = ((val + 6) / 12) * 100
          return (
            <div key={i} className="relative flex flex-1 flex-col items-center">
              <input
                type="range"
                min="-6"
                max="6"
                step="0.5"
                value={val}
                onChange={(e) => handleBand(i, e.target.value)}
                className="eq-slider absolute bottom-0 left-0 right-0 z-10 h-full w-full cursor-pointer opacity-0"
              />
              <div
                className="w-full rounded-t-sm transition-all duration-100"
                style={{
                  height: `${height}%`,
                  background: val === 0 ? '#3A4151' : val > 0 ? '#EAB14C' : '#7FA8FF',
                }}
              />
            </div>
          )
        })}
      </div>
      <div className="mt-1 flex justify-between">
        {labels.map((l) => (
          <span key={l} className="text-[8px] text-muted">{l}</span>
        ))}
      </div>
    </div>
  )
}
