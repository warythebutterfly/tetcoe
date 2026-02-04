import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export default function ProgrammesPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Programmes"
          title="Skills training, research capacity & entrepreneurship"
          desc="Our programmes are designed to be flexible, industry-aligned, and outcome-driven."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="font-semibold text-neutral-900">Short Courses</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>• Grant proposal & scientific writing</li>
              <li>• Information technology, robotics & drone technology</li>
              <li>• Building services & fabrication</li>
              <li>• Environmental sustainability & waste management</li>
              <li>• HSSE (Health, Safety, Security & Environment)</li>
            </ul>

            {/* TODO: Add downloadable PDF brochures */}
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-neutral-900">
              National Skills Development
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Programmes aligned with labour market demand, delivered through
              workplace learning and open, distance & eLearning approaches
              following NBTE / NABTEB standards.
            </p>

            {/* TODO: Add eligibility & application details */}
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-neutral-900">
              Entrepreneurship & Incubation
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              All skills programmes integrate entrepreneurship modules,
              mentoring, incubation support, and pathways for spin-off
              companies.
            </p>

            {/* TODO: Add success stories & startup logos */}
          </Card>
        </div>
      </Container>
    </section>
  );
}
