"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navLinks } from "@/lib/nav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            {/* TODO: Replace with official logo image (next/image) when received */}
            <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white grid place-items-center text-sm font-semibold">
              T
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-neutral-900">TETCoE</p>
              <p className="text-xs text-neutral-500">YabaTech • Lagos</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "transition-colors",
                    active ? "text-neutral-900 font-semibold" : "text-neutral-600 hover:text-neutral-900",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition"
          >
            Enquiries
          </Link>
        </nav>
      </Container>
    </header>
  );
}
