import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { activities } from "@/lib/content";
import Link from "next/link";
import ActivityCarousel from "../ui/Carousel";

export default function HomeActivities() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-neutral-200">
      <Container>
        <SectionHeading
          eyebrow="Journey so far"
          title="Selected activities and milestones"
          desc="A snapshot of collaborations, trainings, and initiatives delivered by the Centre."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {activities.slice(0, 4).map((a) => (
            <Card key={a.title} className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-semibold text-neutral-900">
                  {a.title}
                </p>
                <span className="text-xs font-semibold text-neutral-500 shrink-0">
                  {a.year}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-prose">
                {a.desc}
              </p>

              {/* Carousel */}
              {a.images && a.images.length > 0 && (
                <div className="mt-4">
                  <ActivityCarousel
                    images={a.images}
                    title={a.title}
                  />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/activities"
            className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:underline"
          >
            View all activities →
          </Link>
        </div>
      </Container>
    </section>
  );
}
