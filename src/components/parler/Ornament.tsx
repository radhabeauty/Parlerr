export function Ornament({ light = false }: { light?: boolean }) {
  const c = light ? "#e8c48a" : "#3a0a18";
  return (
    <div className="mx-auto flex w-full max-w-md items-center gap-3 px-6 py-10">
      <span
        className="h-px flex-1"
        style={{ background: `linear-gradient(to right, transparent, ${c}66, transparent)` }}
      />
      <svg width="44" height="20" viewBox="0 0 44 20" fill="none" aria-hidden>
        <path
          d="M22 2 L26 10 L22 18 L18 10 Z"
          stroke={c}
          strokeWidth="1"
          fill="none"
        />
        <circle cx="22" cy="10" r="2" fill={c} />
        <circle cx="6" cy="10" r="1.4" fill={c} opacity="0.6" />
        <circle cx="38" cy="10" r="1.4" fill={c} opacity="0.6" />
        <path d="M9 10 H17" stroke={c} strokeWidth="0.8" />
        <path d="M27 10 H35" stroke={c} strokeWidth="0.8" />
      </svg>
      <span
        className="h-px flex-1"
        style={{ background: `linear-gradient(to left, transparent, ${c}66, transparent)` }}
      />
    </div>
  );
}
