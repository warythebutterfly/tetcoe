import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SanityLive } from "@/sanity/live";

export const metadata: Metadata = {
  title: "TETCoE • YabaTech",
  description:
    "TETFund Centre of Excellence in Skills, Entrepreneurship & Sustainable Development at Yaba College of Technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-[#012147]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <SanityLive action="refresh" />
        </Suspense>
      </body>
    </html>
  );
}
