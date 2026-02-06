import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { courses } from "@/lib/content";

export default function ProgrammesPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        {/* Page heading */}
        <SectionHeading
          eyebrow="Programmes"
          title="Skills training, research capacity & entrepreneurship"
          desc="Our programmes are designed to be flexible, industry-aligned, and outcome-driven."
        />

        {/* Programme pillars */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="font-semibold text-[#012147]">
              Short Courses & Capacity Building
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>• Grant proposal & scientific writing</li>
              <li>• Information technology, robotics & drone technology</li>
              <li>• Building services & fabrication</li>
              <li>• Environmental sustainability & waste management</li>
              <li>• HSSE (Health, Safety, Security & Environment)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-[#012147]">
              National Skills Development
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Programmes aligned with labour market demand, delivered through
              workplace learning and open, distance & eLearning approaches
              following NBTE / NABTEB standards.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-[#012147]">
              Entrepreneurship & Incubation
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              All skills programmes integrate entrepreneurship modules,
              mentoring, incubation support, and pathways for spin-off
              companies.
            </p>
          </Card>
        </div>

        {/* Courses section */}
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <SectionHeading
            eyebrow="Courses"
            title="Specialised skills training offerings"
            desc="The Centre delivers hands-on, industry-relevant courses designed to equip participants with practical and employable skills."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.title} className="p-6">
                <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                  {course.category}
                </p>

                <h4 className="mt-2 font-semibold text-[#012147]">
                  {course.title}
                </h4>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {course.summary}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
