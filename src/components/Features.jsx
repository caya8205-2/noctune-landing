import { useState } from 'react'

export default function Features() {
  const [activeLyricLang, setActiveLyricLang] = useState('romaji')

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-black border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
            Core Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.12]">
            Engineered for focused listening, not memory bloat.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Every layer in Noctune solves an actual friction point of modern music listening: browser tab hoarding, inaccurate search results, missing lyrics, and locked-in platform telemetry.
          </p>
        </div>

        {/* Narrative Flow: 3 Asymmetric Chapters */}
        <div className="space-y-16 sm:space-y-24">
          {/* Chapter 1: Smart Resolution Engine (Asymmetric 12-col) */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 inline-block">
                  Resolution Pipeline
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Official Spotify catalog data, clean YouTube audio streams.
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                  Noctune queries official Spotify track structures out-of-the-box using the bundled developer Web API credentials. It resolves the exact studio recording on YouTube while filtering out amateur covers, one-hour loops, and nightcore edits.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] text-white/70 border border-white/10">Anti-Nightcore Filter</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] text-white/70 border border-white/10">Karaoke Rejection</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] text-white/70 border border-white/10">Live Noise Discard</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">Zero Setup Required</span>
                </div>
                <p className="text-xs text-white/40 pt-2 font-sans">
                  Creating personal Spotify Developer keys requires Spotify Premium. Noctune works immediately for everyone with the bundled pre-injected key.
                </p>
              </div>

              {/* Resolution Flow Visualizer */}
              <div className="lg:col-span-6 rounded-xl border border-white/[0.07] bg-black/60 p-5 sm:p-6 space-y-4">
                <div className="space-y-1.5 p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-white/40 uppercase">Spotify Catalog (Pre-injected)</span>
                  <div className="text-sm font-medium text-white">SPECIALZ: King Gnu</div>
                  <div className="text-xs font-mono text-white/50">ISRC: JP-S10-23-01783</div>
                </div>

                <div className="flex items-center gap-3 px-2">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-mono text-amber-300/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    99.6% Audio Match
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="space-y-1.5 p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-400 uppercase">YouTube Audio Stream</span>
                    <span className="text-xs font-mono text-emerald-400">Verified Official Recording</span>
                  </div>
                  <div className="text-sm font-medium text-white">Clean Opus Audio (48kHz)</div>
                  <div className="text-xs font-mono text-white/50">Filtered duration parity: 03:58 / 03:58</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 2: Dual-Script Synced Lyrics */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Lyrics Interactive Box */}
              <div className="lg:col-span-6 order-2 lg:order-1 rounded-xl border border-white/[0.07] bg-black/60 p-5 sm:p-6">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.07]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-white/50">Synchronized Lyrics</span>
                  </div>
                  <div className="inline-flex rounded-lg border border-white/10 bg-white/[0.02] p-0.5">
                    <button
                      type="button"
                      onClick={() => setActiveLyricLang('romaji')}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                        activeLyricLang === 'romaji'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Romaji
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLyricLang('kanji')}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                        activeLyricLang === 'kanji'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Kana
                    </button>
                  </div>
                </div>

                <div className="space-y-3 py-3 font-sans">
                  <p className="text-sm text-white/30 transition-colors">
                    {activeLyricLang === 'romaji' ? 'You are my special' : 'You are my special'}
                  </p>
                  <div className="p-3 rounded-lg bg-amber-400/[0.06] border border-amber-400/20">
                    <p className="text-base sm:text-lg font-medium text-amber-300">
                      {activeLyricLang === 'romaji' ? 'Konran souzou kurui saite' : '今際死線 狂い咲いて'}
                    </p>
                    <span className="text-[11px] font-mono text-amber-400/60 mt-1 block">00:32.400 · Active Line</span>
                  </div>
                  <p className="text-sm text-white/50 transition-colors">
                    {activeLyricLang === 'romaji' ? 'Utage no toki ga kita' : '宴の時が来た'}
                  </p>
                  <p className="text-sm text-white/30 transition-colors">
                    {activeLyricLang === 'romaji' ? 'Tokyo zensen kyouka senjou' : '東京前線 狂歌戦場'}
                  </p>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <span className="text-xs font-mono text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 inline-block">
                  Acoustic Karaoke
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Sing along in Romaji, Kana, or international scripts.
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                  Real-time timestamped lyrics scroll with instant Romaji transliteration for Japanese, Korean, and non-Latin tracks. Never struggle with complex Kanji while listening to your favorite songs.
                </p>
                <div className="space-y-2 text-xs text-white/60 font-sans pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>LRC synchronized millisecond timestamps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Automatic Kana to Romaji converter without internet dependencies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3: Resource Efficiency & Local Sovereignty */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Efficiency Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 inline-block mb-3">
                  Resource Benchmark
                </span>
                <h3 className="font-display text-2xl text-white font-normal tracking-tight">
                  ~45 MB RAM footprint. Zero Chromium bloat.
                </h3>
                <p className="mt-2 text-sm text-white/70 font-sans leading-relaxed">
                  Packaged with Tauri 2.0 and Rust instead of Electron. Keep your system resources available for IDEs, compilers, games, or video rendering.
                </p>
              </div>

              {/* Benchmarks */}
              <div className="space-y-3.5 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white/60">Browser Tab (YouTube Music)</span>
                    <span className="text-red-400">~1,150 MB</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-red-400/80 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white/60">Standard Electron Desktop App</span>
                    <span className="text-amber-400/90">~480 MB</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-amber-400/70 rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-amber-400/20">
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-amber-300 font-semibold">Noctune (Tauri 2.0 + Rust)</span>
                    <span className="text-amber-300 font-bold">~45 MB</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '8%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Local Sovereignty Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400/90 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20 inline-block mb-3">
                  Local Sovereignty
                </span>
                <h3 className="font-display text-2xl text-white font-normal tracking-tight">
                  Your listening history stays on your machine.
                </h3>
                <p className="mt-2 text-sm text-white/70 font-sans leading-relaxed">
                  Liked tracks, playback analytics, custom stream overrides, and audio caches persist in a local SQLite file. No corporate cloud lock-in, tracking pixels, or data collection.
                </p>
              </div>

              {/* Code Preview */}
              <div className="rounded-xl border border-white/[0.07] bg-black/70 p-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06] text-white/40">
                  <span>~/.noctune/library.db</span>
                  <span className="text-[11px] text-emerald-400">SQLite 3</span>
                </div>
                <pre className="text-white/80 overflow-x-auto">
                  <code>{`SELECT title, artist, play_count 
FROM listen_history 
ORDER BY played_at DESC 
LIMIT 5;`}</code>
                </pre>
              </div>

              <div className="text-xs text-white/50 space-y-1">
                <p>Optional Discord Rich Presence: displays track status on your profile, fully toggleable in settings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
