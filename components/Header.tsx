"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/brand";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-midnight/10 bg-ivory/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium hover:text-brass-deep ${pathname.startsWith(item.href) ? "text-brass-deep" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/snapshot" className="btn-primary !py-2.5">
            Find your frequency
          </Link>
        </div>
        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-midnight/10 bg-ivory lg:hidden">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-3 text-lg font-medium">
                {item.label}
              </Link>
            ))}
            <Link href="/snapshot" className="btn-primary mt-4">
              Find your frequency
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
