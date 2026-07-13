// Fictional demo data only. Not real tracks, not real lyrics, not real
// Spotify IDs — this exists purely to drive the interactive demo below
// without needing a backend, real audio, or real API keys.

export const DEMO_TRACKS = [
  {
    id: 'demo-1',
    title: 'Paper Moon',
    artist: 'Aurora Drift',
    album: 'Paper Moon — Single',
    duration: 257,
    source: 'resolved',
    playCount: 41,
    accent: ['#EAB14C', '#7A5A2A'],

    meta: {
      popularity: 60,
      trackNumber: 1,
      totalTracks: 1,
      releaseDate: '2024-03-08',
      label: 'Late Signal Records',
      isrc: 'DEMO00000101',
      genres: ['dream-pop', 'synth', 'night'],
      followers: 128000,
    },
    lyrics: [
      { time: 0, text: '' },
      { time: 6, text: 'City lights blur into gold' },
      { time: 13, text: 'Chasing echoes down the hall' },
      { time: 20, text: 'Paper moon above the noise' },
      { time: 27, text: 'Steady hands, we lose it all' },
      { time: 34, text: 'Nothing lasts but this right now' },
      { time: 41, text: 'Hold the static, let it go' },
    ],
  },
  {
    id: 'demo-2',
    title: 'Static Bloom',
    artist: 'Kaya Faye',
    album: 'Static Bloom — Single',
    duration: 222,
    source: 'cache',
    playCount: 27,
    accent: ['#7FA8FF', '#2A3F5A'],
    meta: {
      popularity: 44,
      trackNumber: 1,
      totalTracks: 1,
      releaseDate: '2023-11-02',
      label: 'Late Signal Records',
      isrc: 'DEMO00000102',
      genres: ['shoegaze', 'lo-fi', 'indie'],
      followers: 52000,
    },
    lyrics: [
      { time: 0, text: '' },
      { time: 5, text: 'Fold the silence into sound' },
      { time: 12, text: 'Colors bleeding through the wall' },
      { time: 19, text: 'Static bloom before the dawn' },
      { time: 26, text: 'Nothing here to catch our fall' },
    ],
  },
  {
    id: 'demo-3',
    title: 'Glass Orbit',
    artist: 'Noctune Youth',
    album: 'Glass Orbit — Single',
    duration: 301,
    source: 'prefetch',
    playCount: 63,
    accent: ['#C79AE8', '#3A2A4E'],
    meta: {
      popularity: 52,
      trackNumber: 1,
      totalTracks: 1,
      releaseDate: '2024-06-21',
      label: 'Late Signal Records',
      isrc: 'DEMO00000103',
      genres: ['electronic', 'ambient', 'downtempo'],
      followers: 91000,
    },
    lyrics: [
      { time: 0, text: '' },
      { time: 7, text: 'Slow orbit, glass and light' },
      { time: 15, text: 'Drifting past the afterglow' },
      { time: 23, text: 'Nothing weighs the same tonight' },
      { time: 31, text: 'Let the quiet carry low' },
    ],
  },
]

export const DEMO_PLAYLISTS = [
  { id: 'demo-liked', name: 'Liked Songs' },
  { id: 'demo-playlist-1', name: 'Late Night Drives' },
]
