import Container from "@/components/layout/Container";
import { site } from "@/lib/content";

export default function HomeCTA() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="rounded-3xl border border-neutral-200 bg-[#012147] text-white p-8 sm:p-10">
          <h3 className="text-2xl font-semibold tracking-tight">
            Partner with {site.name} or enquire about programmes
          </h3>
          <p className="mt-3 text-white/80 max-w-2xl">
            Contact the Centre for programme information, collaboration opportunities,
            sponsorships, and institutional engagement.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#012147] hover:bg-neutral-100 transition"
            >
              Contact Us
            </a>
            <a
              href="/programmes"
              className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Explore Programmes
            </a>
          </div>

          {/* TODO: Add official social links / YouTube channel link */}
        </div>
      </Container>
    </section>
  );
}
