import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { activities } from "@/lib/content";

export default function ActivitiesPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Activities"
          title="The journey so far"
          desc="Highlights of key trainings, collaborations, and initiatives delivered by the Centre."
        />

        <div className="mt-10 grid gap-6">
          {activities.map((activity) => (
            <Card key={activity.title} className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {activity.title}
                </h3>
                <span className="text-xs font-semibold text-neutral-500">
                  {activity.year}
                </span>
              </div>

              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {activity.desc}
              </p>

              <div className="mt-4 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-500">
                {/* TODO: Insert image gallery or YouTube video embed */}
                Media content placeholder (photos / videos)
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
