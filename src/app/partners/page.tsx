import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/lib/content";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Partners"
          title="Institutional and industry collaborations"
          desc="Our partnerships strengthen training quality, research relevance, and industry exposure."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center"
            >
              {/* Logo container */}
              <div className="flex h-24 w-full items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6">
                <Image
                  src={partner.photo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-12 w-auto object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                {partner.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed max-w-xs">
                {partner.note}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
