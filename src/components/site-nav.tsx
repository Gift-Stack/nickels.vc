"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen]);

  // Close automatically if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => setMenuOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 bg-pure-white/80 backdrop-blur-md border-b z-50 transition-[border-color,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? "border-neutral-gray shadow-sm"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            className="vc-headline tracking-headline-sm text-2xl text-pure-black hover:text-copper transition-colors"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            nickels.vc
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              className="vc-body text-pure-black/70 hover:text-pure-black transition-colors"
              href="/learn-more"
            >
              Learn More
            </Link>
            <a
              href="https://forms.gle/SN8JYBCkSbBNh3qJA"
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-pure-black hover:bg-copper text-white px-6 py-2 rounded-none"
            >
              Apply for Funding
            </a>
          </div>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="press md:hidden relative w-9 h-9 -mr-1.5 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span
              aria-hidden="true"
              className={`absolute w-6 h-0.5 bg-pure-black transition-transform duration-300 [transition-timing-function:var(--ease-apple)] ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute w-6 h-0.5 bg-pure-black transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute w-6 h-0.5 bg-pure-black transition-transform duration-300 [transition-timing-function:var(--ease-apple)] ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-apple)] ${
            menuOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col items-start gap-1 pt-2 pb-4 border-t border-neutral-gray">
              <Link
                className="vc-body text-pure-black/80 hover:text-pure-black transition-colors py-3 w-full"
                href="/learn-more"
                onClick={() => setMenuOpen(false)}
              >
                Learn More
              </Link>
              <a
                href="https://forms.gle/SN8JYBCkSbBNh3qJA"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="press inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-10 bg-pure-black hover:bg-copper text-white px-6 py-2 rounded-none mt-2 w-full"
              >
                Apply for Funding
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
