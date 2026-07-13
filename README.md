# noctune landing

Landing page buat noctune.web.id. React + Vite + Tailwind.

Hero-nya sekarang bukan screenshot, tapi port asli dari `frontend/src`
Noctune (Sidebar, PlayerBar, PlayerView, Visualizer, TrackDetailsSidebar) —
class Tailwind dan CSS vars-nya ditarik langsung dari `frontend/tailwind.config.js`
dan `frontend/src/index.css` repo utama, bukan reka ulang dari screenshot.
Backend/audio/react-query/tauri dicabut, diganti state lokal (zustand) +
3 track dummy fiktif di `src/demo/data.js` (bukan lagu asli, buat hindari
masalah hak cipta).

## Jalanin lokal

```bash
npm i
npm run dev
```

## Build

```bash
npm run build
```

## Struktur

- `src/demo/` — port UI player asli, dijalanin dengan data dummy:
  - `store.js` — zustand store, mirror shape `usePlayerStore` asli
  - `data.js` — 3 track fiktif + 2 playlist dummy
  - `DemoApp.jsx` — pembungkus, layout sama persis App.tsx asli (title bar + sidebar + main + track details + player bar), tinggi dibatasi 560px biar muat di hero
  - `DemoSidebar.jsx`, `DemoPlayerBar.jsx`, `DemoPlayerView.jsx`, `DemoTrackDetailsSidebar.jsx`, `DemoVisualizer.jsx`, `DemoTitleBar.jsx`, `TrackArt.jsx`
  - `DemoPlaceholderView.jsx` — ditampilin kalau nav diklik ke view yang gak di-port (Search/History/Queue/Settings/Playlist/Local Library) — lihat catatan di bawah

## Yang disederhanakan dari aslinya

- **Nav sidebar** (Search, Stats, Local Library, History, Queue, Settings, playlist) klik-able dan beneran ganti `activeView`, tapi kontennya placeholder "This view isn't wired up in the demo" — cuma "Now Playing" yang di-port penuh. Ngeport semua view itu porsi rebuild seluruh app.
- **Visualizer**: struktur SVG (128 radial bar, gradient stroke) sama persis kayak `Visualizer.tsx` asli, tapi sinyalnya sintetis (sine wave), bukan dari `audiomotion-analyzer` beneran karena gak ada audio asli yang diputar.
- **Track details / album art**: metadata dummy statis (bukan fetch ke Spotify), art pakai gradient CSS bukan gambar asli.
- **TrackActionButtons** disederhanain jadi cuma tombol Like — versi asli ada queue/add-to-playlist/radio/clear-cache yang semuanya butuh backend.
- **"···" More menu** (sleep timer, crossfade, EQ) di PlayerBar di-drop seluruhnya.

## File yang perlu diganti kalau ada update

- Link download di `Hero.jsx`/`Download.jsx` udah ngarah ke `releases/latest`, otomatis ikut rilis terbaru.
- Versi ditulis manual di `Download.jsx` (`Noctune v1.10.0`).
- `public/logo.png`, `public/screenshot-{stats,cache,debug}.png` dipakai di Header/Footer/favicon dan gallery "Look inside".
