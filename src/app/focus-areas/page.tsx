import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { focusAreas } from "@/lib/content";

export default function FocusAreasPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Focus Areas"
          title="Addressing national and industrial development challenges"
          desc="TETCoE focuses on applied skills, research, and entrepreneurship that directly respond to labour market and community needs."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {focusAreas.map((area) => (
            <Card key={area.title} className="p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {area.desc}
              </p>

              {/* TODO: Add supporting images or infographics for this focus area */}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
