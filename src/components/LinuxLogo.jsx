export default function LinuxLogo({ className = 'w-8 h-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Linux Logo"
    >
      {/* Feet (Orange/Gold) */}
      <ellipse cx="16" cy="42" rx="7" ry="3.5" fill="#F59E0B" />
      <ellipse cx="32" cy="42" rx="7" ry="3.5" fill="#F59E0B" />

      {/* Main Body & Head (Black/Dark Slate) */}
      <path
        d="M24 4C17.37 4 15 9.8 15 17C15 20.5 12 25 10 30C8 35 9 40 16 41C21 41.7 27 41.7 32 41C39 40 40 35 38 30C36 25 33 20.5 33 17C33 9.8 30.63 4 24 4Z"
        fill="#1E232A"
      />

      {/* Wings / Flippers */}
      <path
        d="M14 22C10 24 8 28 9 34C10 37 13 36 14 33C15 30 15 25 14 22Z"
        fill="#181C22"
      />
      <path
        d="M34 22C38 24 40 28 39 34C38 37 35 36 34 33C33 30 33 25 34 22Z"
        fill="#181C22"
      />

      {/* White Belly */}
      <path
        d="M24 19C18 19 16 25 16 33C16 38.5 19 40 24 40C29 40 32 38.5 32 33C32 25 30 19 24 19Z"
        fill="#F8FAFC"
      />

      {/* Eyes */}
      <ellipse cx="20.5" cy="13" rx="2.5" ry="3.5" fill="#F8FAFC" />
      <ellipse cx="27.5" cy="13" rx="2.5" ry="3.5" fill="#F8FAFC" />
      <circle cx="21.2" cy="13.2" r="1.3" fill="#0F172A" />
      <circle cx="26.8" cy="13.2" r="1.3" fill="#0F172A" />

      {/* Beak / Mouth (Orange) */}
      <path
        d="M24 15.5C21 15.5 19.5 17.5 24 19.5C28.5 17.5 27 15.5 24 15.5Z"
        fill="#F59E0B"
      />
      <path
        d="M22 17.5C23 18.2 25 18.2 26 17.5"
        stroke="#D97706"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
