// Decorative concentric rings crossed by a sine wave, drawn in code until real photography exists.
export function WaveArt({ className = "", light = false }: { className?: string; light?: boolean }) {
  const ring = light ? "rgba(247,242,234,0.18)" : "rgba(22,21,63,0.12)";
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      {[60, 95, 130, 165, 195].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke={ring} strokeWidth="1.5" />
      ))}
      <path
        d="M0 200 C40 110 80 110 120 200 S200 290 240 200 S320 110 360 200 S400 260 400 230"
        fill="none"
        stroke="#B3863A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M0 200 C40 150 80 150 120 200 S200 250 240 200 S320 150 360 200 S400 230 400 215"
        fill="none"
        stroke="#B3863A"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="200" cy="200" r="6" fill="#B3863A" />
    </svg>
  );
}

export function WaveRule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 ${className}`} aria-hidden="true">
      <path d="M0 6 C10 0 20 0 30 6 S50 12 60 6 S80 0 90 6 S110 12 120 6" fill="none" stroke="#B3863A" strokeWidth="1.5" />
    </svg>
  );
}
