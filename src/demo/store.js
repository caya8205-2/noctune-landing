import { create } from 'zustand'
import { DEMO_TRACKS } from './data.js'

export const useDemoStore = create((set, get) => ({
  // ── Playback ──────────────────────────────────────────────
  currentTrack: DEMO_TRACKS[0],
  trackIndex: 0,
  isPlaying: true,
  isLoading: false,
  volume: 0.7,
  progress: 34,
  duration: DEMO_TRACKS[0].duration,
  shuffle: false,
  repeat: 'off',
  liked: {},

  // ── UI ────────────────────────────────────────────────────
  activeView: 'player',
  activePlaylistId: null,
  showTrackDetails: true,

  // ── Actions ───────────────────────────────────────────────
  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),
  setIsPlaying: (v) => set({ isPlaying: v }),
  setProgress: (p) => set({ progress: p }),

  setVolume: (v) => set({ volume: Math.min(1, Math.max(0, v)) }),
  toggleMute: () =>
    set((s) => ({ volume: s.volume === 0 ? s._lastVolume ?? 0.7 : (s._lastVolume = s.volume, 0) })),

  next: () =>
    set((s) => {
      const i = s.shuffle
        ? Math.floor(Math.random() * DEMO_TRACKS.length)
        : (s.trackIndex + 1) % DEMO_TRACKS.length
      const track = DEMO_TRACKS[i]
      return { trackIndex: i, currentTrack: track, duration: track.duration, progress: 0 }
    }),

  prev: () =>
    set((s) => {
      if (s.progress > 4) return { progress: 0 }
      const i = (s.trackIndex - 1 + DEMO_TRACKS.length) % DEMO_TRACKS.length
      const track = DEMO_TRACKS[i]
      return { trackIndex: i, currentTrack: track, duration: track.duration, progress: 0 }
    }),

  playTrackAt: (i) =>
    set(() => {
      const track = DEMO_TRACKS[i]
      return { trackIndex: i, currentTrack: track, duration: track.duration, progress: 0, isPlaying: true }
    }),

  toggleShuffle: () => set((s) => ({ shuffle: !s.shuffle })),
  cycleRepeat: () =>
    set((s) => ({ repeat: s.repeat === 'off' ? 'all' : s.repeat === 'all' ? 'one' : 'off' })),

  toggleLike: (id) =>
    set((s) => ({ liked: { ...s.liked, [id]: !s.liked[id] } })),

  toggleTrackDetails: () => set((s) => ({ showTrackDetails: !s.showTrackDetails })),

  setView: (view, id) => set({ activeView: view, activePlaylistId: id ?? get().activePlaylistId }),

  // Internal tick, called by a single interval owned by DemoApp.
  tick: () =>
    set((s) => {
      if (!s.isPlaying) return {}
      if (s.progress >= s.duration) {
        if (s.repeat === 'one') return { progress: 0 }
        const i = s.shuffle
          ? Math.floor(Math.random() * DEMO_TRACKS.length)
          : (s.trackIndex + 1) % DEMO_TRACKS.length
        if (i === 0 && !s.shuffle && s.repeat === 'off' && s.trackIndex === DEMO_TRACKS.length - 1) {
          return { isPlaying: false, progress: s.duration }
        }
        const track = DEMO_TRACKS[i]
        return { trackIndex: i, currentTrack: track, duration: track.duration, progress: 0 }
      }
      return { progress: s.progress + 1 }
    }),
}))
