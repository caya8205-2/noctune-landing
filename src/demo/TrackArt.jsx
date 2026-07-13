export function TrackArt({ track, className = '' }) {
  const [from, to] = track.accent
  return (
    <div
      className={className}
      style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
    />
  )
}
