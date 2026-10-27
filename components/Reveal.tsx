"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades sections up as they scroll into view. Arms itself only when JS runs.
export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("reveal-on");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el, i) => {
      if (i === 0) return; // the hero animates on its own
      el.setAttribute("data-reveal", "");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
