import { brand } from "@/lib/brand";

export function Mark({ className = "h-8 w-8", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" fill="none" stroke={light ? "#F7F2EA" : "#16153F"} strokeWidth="2.5" />
      <path
        d="M4 24 C9 13 14 13 19 24 S29 35 34 24 S39 13 44 24"
        fill="none"
        stroke="#B3863A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark light={light} />
      <span className={`font-display text-2xl font-medium lowercase tracking-tight ${light ? "text-ivory" : "text-midnight"}`}>
        {brand.name}
      </span>
    </span>
  );
}
