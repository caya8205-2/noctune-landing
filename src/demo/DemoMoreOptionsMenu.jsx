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

      {/* More Menu */}
      {showMoreMenu && (
        <div className={clsx('absolute bottom-full right-0 z-50 mb-2 flex flex-col gap-0.5 rounded-xl border border-white/[0.08] bg-base-900 p-2 shadow-xl animate-fade-in', eqPanelOpen ? 'w-[380px]' : 'w-[220px]')}>
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

const EQ_FREQS = [32, 64, 125, 250, 500, 1000, 2000, 4000, 8000, 16000]

const PRESETS = {
  flat: 'Flat',
  pop: 'Pop',
  rock: 'Rock',
  jazz: 'Jazz',
  classical: 'Classical',
  'hip-hop': 'Hip-Hop',
  'bass-boost': 'Bass Boost',
  'vocal-boost': 'Vocal Boost',
  electronic: 'Electronic',
}

const DEFAULT_PRESETS = {
  flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  pop: [2, 1.5, 0, -1, -0.5, 0, 1, 1.5, 2, 2],
  rock: [2.5, 2, 1, 0, -1, -0.5, 1, 2, 2.5, 2],
  jazz: [2, 1.5, 1, 0.5, 0, 0.5, 1, 1.5, 2, 2],
  classical: [2.5, 2, 1.5, 1, 0.5, 0, 0.5, 1, 1.5, 2],
  'hip-hop': [3, 2.5, 1.5, 0, -1, -0.5, 0.5, 1, 2, 3],
  'bass-boost': [4, 3.5, 2.5, 1, 0, 0, 0, 0.5, 1, 1.5],
  'vocal-boost': [-0.5, 0, 0.5, 1, 2, 2.5, 2, 1.5, 1, 0.5],
  electronic: [3, 2, 1, 0, -0.5, -1, 0, 1, 2.5, 3],
}

function DemoEqualizerPanel({ onClose }) {
  const [bands, setBands] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [eqEnabled, setEqEnabled] = useState(true)
  const [activePreset, setActivePreset] = useState('flat')

  function handleBand(index, value) {
    const next = [...bands]
    next[index] = Math.min(6, Math.max(-6, Number(value)))
    setBands(next)
    setActivePreset('custom')
  }

  function applyPreset(key) {
    setBands(DEFAULT_PRESETS[key])
    setActivePreset(key)
    if (!eqEnabled) setEqEnabled(true)
  }

  function reset() {
    setBands([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    setActivePreset('flat')
  }

  const isFlat = bands.every(b => b === 0)

  return (
    <div className="w-full rounded-xl border border-base-600/70 bg-base-900/95 p-3 shadow-2xl backdrop-blur-sm">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-accent" />
          <h3 className="text-xs font-semibold text-white">Equalizer</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEqEnabled(!eqEnabled)}
            className={clsx(
              'flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-medium transition-colors',
              eqEnabled ? 'bg-accent/15 text-accent hover:bg-accent/25' : 'bg-base-800 text-muted hover:bg-base-700 hover:text-soft'
            )}
          >
            {eqEnabled ? 'On' : 'Off'}
          </button>
          {onClose && (
            <button onClick={onClose} className="rounded-lg p-1 text-muted hover:bg-base-800 hover:text-white">
              <span className="text-xs">&times;</span>
            </button>
          )}
        </div>
      </div>

      {/* Frequency sliders */}
      <div className="mb-3 flex items-end gap-0.5 sm:gap-1">
        {EQ_FREQS.map((freq, index) => {
          const db = bands[index] ?? 0
          const pct = ((db + 6) / 12) * 100
          const isAboveZero = db > 0
          const isBelowZero = db < 0
          return (
            <div key={freq} className="flex flex-1 flex-col items-center gap-0.5">
              <span className={clsx('text-[8px] font-mono tabular-nums leading-none', db === 0 ? 'text-muted' : isAboveZero ? 'text-accent' : 'text-blue-400')}>
                {db > 0 ? `+${db}` : db}
              </span>
              <div className="relative flex flex-col items-center">
                <div className="relative h-20 w-5 sm:h-24 sm:w-6">
                  <div className="absolute inset-x-[38%] top-0 bottom-0 rounded-full bg-base-700" />
                  <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-base-500/50" />
                  <div className="absolute inset-x-[30%] bottom-1/2 rounded-t-full bg-accent/40 transition-all" style={{ height: isAboveZero ? `${(db / 6) * 50}%` : '0%' }} />
                  <div className="absolute inset-x-[30%] top-1/2 rounded-b-full bg-blue-500/40 transition-all" style={{ height: isBelowZero ? `${(-db / 6) * 50}%` : '0%' }} />
                  <input
                    type="range"
                    min={-6}
                    max={6}
                    step={1}
                    value={db}
                    onChange={(e) => handleBand(index, Number(e.target.value))}
                    className="eq-slider absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                    disabled={!eqEnabled}
                  />
                  <div
                    className={clsx(
                      'pointer-events-none absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all',
                      eqEnabled
                        ? db > 0 ? 'border-accent bg-accent/20' : db < 0 ? 'border-blue-400 bg-blue-400/20' : 'border-muted bg-base-800'
                        : 'border-base-600 bg-base-800'
                    )}
                    style={{ top: `${100 - pct}%` }}
                  />
                </div>
              </div>
              <span className="text-[7px] font-medium text-muted">{freq >= 1000 ? `${freq / 1000}k` : freq}</span>
            </div>
          )
        })}
      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-1">
        {Object.entries(PRESETS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => applyPreset(key)}
            className={clsx(
              'rounded-lg px-2 py-1 text-[9px] font-medium transition-all',
              activePreset === key ? 'bg-accent text-base-950' : 'bg-base-800 text-muted hover:bg-base-700 hover:text-white'
            )}
          >
            {label}
          </button>
        ))}
        {activePreset !== 'flat' && (
          <button onClick={reset} className="rounded-lg px-2 py-1 text-[9px] font-medium text-muted transition-colors hover:bg-base-800 hover:text-red-400">
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
