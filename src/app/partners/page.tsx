import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { partners } from "@/lib/content";

export default function PartnersPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Partners"
          title="Institutional and industry collaborations"
          desc="Our partnerships strengthen training quality, research relevance, and industry exposure."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <Card key={partner.name} className="p-6">
              <h3 className="font-semibold text-neutral-900">
                {partner.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {partner.note}
              </p>

              {/* TODO: Insert partner logo */}
              <div className="mt-4 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-500">
                Partner logo placeholder
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
