// Decorative concentric rings crossed by a travelling sine wave, drawn in code until real
// photography exists. Motion is CSS-only (see globals.css) and stops under reduced motion.

// One full sine cycle is 240 units wide; the path runs well past both edges so it can slide
// left by exactly one cycle and loop seamlessly.
function sinePath(amp: number, from = -480, to = 880, mid = 200) {
  const half = 120;
  let d = `M${from} ${mid}`;
  let up = true;
  for (let x = from; x < to; x += half) {
    const y = up ? mid - amp : mid + amp;
    d += ` C${x + half / 3} ${y} ${x + (2 * half) / 3} ${y} ${x + half} ${mid}`;
    up = !up;
  }
  return d;
}

const mainWave = sinePath(115);
const echoWave = sinePath(60);

export function WaveArt({ className = "", light = false }: { className?: string; light?: boolean }) {
  const ring = light ? "rgba(247,242,234,0.22)" : "rgba(22,21,63,0.14)";
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        {/* Fades the wave out toward the outer ring so it never ends on a hard edge. */}
        <radialGradient id="wave-fade">
          <stop offset="55%" stopColor="#fff" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="wave-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
          <circle cx="200" cy="200" r="200" fill="url(#wave-fade)" />
        </mask>
      </defs>
      {[60, 95, 130, 165, 195].map((r, i) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke={ring} strokeWidth="1.5" className="wave-ring" style={{ animationDelay: `${i * 0.6}s` }} />
      ))}
      <g mask="url(#wave-mask)">
        <g className="wave-flow-slow">
          <path d={echoWave} fill="none" stroke="#B3863A" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g className="wave-flow">
          <path d={mainWave} fill="none" stroke="#B3863A" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
      <circle cx="200" cy="200" r="6" fill="#B3863A" className="wave-dot" />
    </svg>
  );
}

export function WaveRule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 overflow-hidden ${className}`} aria-hidden="true">
      <g className="rule-flow">
        <path d="M-60 6 C-50 0 -40 0 -30 6 S-10 12 0 6 S20 0 30 6 S50 12 60 6 S80 0 90 6 S110 12 120 6 S140 0 150 6 S170 12 180 6" fill="none" stroke="#B3863A" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// Little animated equalizer, used as a "now playing" badge.
export function Equalizer({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex h-3.5 items-end gap-[3px] ${className}`} aria-hidden="true">
      {[0, 0.25, 0.5, 0.15].map((d) => (
        <span key={d} className="eq-bar w-[3px] rounded-full bg-current" style={{ animationDelay: `${d}s` }} />
      ))}
    </span>
  );
}
