import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { activities } from "@/lib/content";

export default function HomeActivities() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-neutral-200">
      <Container>
        <SectionHeading
          eyebrow="Journey so far"
          title="Selected activities and milestones"
          desc="A snapshot of collaborations, trainings, and initiatives delivered by the Centre."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {activities.slice(0, 4).map((a) => (
            <Card key={a.title} className="p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-semibold text-neutral-900">{a.title}</p>
                <span className="text-xs font-semibold text-neutral-500">{a.year}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{a.desc}</p>

              {/* TODO: Add images carousel or YouTube embed per activity */}
              <div className="mt-4 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-500">
                Add photos/video for this activity when available.
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/activities"
            className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:underline"
          >
            View all activities →
          </a>
        </div>
      </Container>
    </section>
  );
}
