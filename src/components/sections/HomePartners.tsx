import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { partners } from "@/lib/content";

export default function HomePartners() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Partnerships"
          title="Collaboration with industry and institutions"
          desc="We work with organisations that strengthen training outcomes, technology transfer, and real-world relevance."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {partners.map((p) => (
            <Card key={p.name} className="p-6">
              <p className="font-semibold text-neutral-900">{p.name}</p>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.note}</p>

              {/* TODO: Insert partner logos here */}
              <div className="mt-4 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-500">
                Add partner logo when received.
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
