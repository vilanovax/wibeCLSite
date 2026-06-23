"use client";

import { useEffect, useState, type ReactNode } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import { APP_URL } from "@/data/landing";

const NAV = [
  { label: "لیست‌ها", href: "#featured" },
  { label: "اکسپلور", href: "#mood" },
  { label: "کیوریتورها", href: "#curators" },
  { label: "اپلیکیشن", href: "#app" },
];

// لوگو به‌صورت prop از سرور پاس داده می‌شود (چون Logo یک سرور-کامپوننت است).
export default function Header({ logo }: { logo: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-navy-100 bg-cream/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-wibe flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="وایب" className="shrink-0">
          {logo}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="ناوبری اصلی">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="btn-ghost">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={APP_URL}
            className="btn-primary hidden sm:inline-flex"
            data-analytics="hero_start_discovery_click"
          >
            ورود به وایب
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-navy-100 bg-white text-navy-800 md:hidden"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {open && (
        <div className="border-t border-navy-100 bg-cream/95 backdrop-blur md:hidden">
          <nav className="container-wibe flex flex-col gap-1 py-3" aria-label="ناوبری موبایل">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-bold text-navy-700 hover:bg-navy-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={APP_URL}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
              data-analytics="hero_start_discovery_click"
            >
              ورود به وایب
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
