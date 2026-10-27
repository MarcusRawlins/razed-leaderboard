"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Scroll-driven motion for the whole site. Content is fully visible without JS or with
// reduced motion; this only layers movement on top.
//   section              fades up as it enters the viewport (skip with data-no-reveal)
//   [data-stagger]       its children rise one after another
//   [data-parallax="n"]  drifts vertically at n × scroll speed
//   [data-scroll-x="n"]  slides sideways at n × scroll speed (kinetic type)
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const bar = document.getElementById("scroll-progress");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    root.classList.add("reveal-on");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section:not([data-no-reveal])")).slice(1);
    sections.forEach((el) => {
      el.setAttribute("data-reveal", "");
      io.observe(el);
    });
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty("--stagger", `${i * 110}ms`);
      });
      io.observe(group);
    });

    const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const sliders = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-x]"));
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      for (const el of parallax) {
        const r = el.parentElement?.getBoundingClientRect();
        if (!r || r.bottom < 0 || r.top > vh) continue;
        el.style.transform = `translate3d(0, ${(r.top + r.height / 2 - vh / 2) * -Number(el.dataset.parallax)}px, 0)`;
      }
      for (const el of sliders) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        el.style.transform = `translate3d(${(r.top - vh) * Number(el.dataset.scrollX)}px, 0, 0)`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return <div id="scroll-progress" aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left scale-x-0 bg-brass" />;
}
