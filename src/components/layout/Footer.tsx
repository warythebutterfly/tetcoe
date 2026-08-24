import Container from "./Container";
import { site } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/nav";
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 lg:grid-cols-3 lg:items-start">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          >
            <Image
              src={logo}
              alt={`${site.fullName} logo`}
              className="h-16 w-auto sm:h-12 lg:h-14"
              priority
            />
            <div>
              <p className="text-sm font-semibold text-[#012147]">
                {site.fullName}
              </p>
              <p className="text-sm text-neutral-600">{site.host}</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 transition hover:text-[#012147] hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Legal */}
          <div className="text-sm text-neutral-500 lg:text-right">
            <p>
              © {new Date().getFullYear()} {site.fullName}
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
