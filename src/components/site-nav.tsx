"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-pure-white/80 backdrop-blur-md border-b z-50 transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-neutral-gray shadow-sm"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            className="vc-headline tracking-headline-sm text-2xl text-pure-black hover:text-copper transition-colors"
            href="/"
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
          <button className="md:hidden w-6 h-6 flex flex-col justify-center items-center">
            <span className="w-full h-0.5 bg-pure-black mt-1"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
