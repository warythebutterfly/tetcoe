"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navLinks } from "@/lib/nav";
import logo from "../../assets/img/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={logo}
              alt="TETCoE"
              priority
              className="h-16 w-auto sm:h-12 lg:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "transition-colors",
                    active
                      ? "text-[#012147] font-semibold"
                      : "text-neutral-600 hover:text-[#012147]",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center rounded-xl bg-[#012147] px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition"
          >
            Enquiries
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden relative h-10 w-10 rounded-xl border border-neutral-300 bg-white grid place-items-center"
          >
            {/* Hamburger → X animation */}
            <span
              className={`absolute h-0.5 w-5 bg-[#012147] transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-[#012147] transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-[#012147] transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="border-t border-neutral-200 bg-white">
          <Container>
            <div className="flex flex-col gap-4 py-6 text-sm">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "transition-colors",
                      active
                        ? "text-[#012147] font-semibold"
                        : "text-neutral-600 hover:text-[#012147]",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit items-center rounded-xl bg-[#012147] px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition"
              >
                Enquiries
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
