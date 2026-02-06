import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { activities } from "@/lib/content";
import ActivityCarousel from "@/components/ui/Carousel";

export default function ActivitiesPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Activities"
          title="The journey so far"
          desc="A detailed overview of key trainings, collaborations, and initiatives delivered by the Centre."
        />

        <div className="mt-12 space-y-12">
          {activities.map((activity) => (
            <Card key={activity.title} className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-[#012147]">
                  {activity.title}
                </h3>
                <span className="text-xs font-semibold text-neutral-500">
                  {activity.year}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed max-w-3xl">
                {activity.desc}
              </p>

              {/* Highlights */}
              {activity.highlights && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-[#012147]">
                    Highlights
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600 list-disc pl-5">
                    {activity.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Media */}
              {(activity.images?.length || activity.youtube) && (
                <div className="mt-6 space-y-4">
                  {activity.images && activity.images.length > 0 && (
                    <ActivityCarousel
                      images={activity.images}
                      title={activity.title}
                    />
                  )}

                  {activity.youtube && (
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-neutral-200">
                      <iframe
                        src={activity.youtube}
                        title={`${activity.title} video`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
