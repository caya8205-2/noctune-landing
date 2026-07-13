export function DemoTitleBar() {
  return (
    <div className="relative z-10 flex h-10 flex-shrink-0 select-none items-center gap-3 border-b border-white/[0.06] bg-base-950/40 px-4 backdrop-blur-xl">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
      </div>
      <span className="font-display text-[13px] font-medium tracking-tight text-white/90">Noctune</span>
    </div>
  )
}
