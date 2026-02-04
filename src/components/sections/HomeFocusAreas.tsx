import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { focusAreas } from "@/lib/content";

export default function HomeFocusAreas() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Focus"
          title="Delivering impact through skills, research, and innovation"
          desc="Our programmes and partnerships are designed to address priority development challenges and strengthen industry-ready capacity."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {focusAreas.map((f) => (
            <Card key={f.title} className="p-6">
              <p className="text-base font-semibold text-neutral-900">{f.title}</p>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
