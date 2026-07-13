export default function Logo({ className = 'h-8 w-8', markOnly = false }) {
  const mark = (
    <img src="/logo.png" alt="" aria-hidden="true" className={`${className} object-contain`} />
  )

  if (markOnly) return mark

  return (
    <span className="inline-flex items-center gap-2.5">
      {mark}
    </span>
  )
}
