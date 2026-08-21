import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { getAbout } from "@/lib/sanity-content";

export default async function AboutPage() {
  const about = await getAbout();

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          desc={about.description}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Main content */}
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm text-neutral-600 leading-relaxed px-2">
              {about.overview}
            </p>

            {/* Director's Message */}
            <div className="mt-8 border-t border-neutral-200 pt-6 px-4">
              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                Message from the Centre Director
              </p>

              <div className="mt-4 grid gap-5 sm:grid-cols-[auto_1fr]">
                {/* Portrait */}
                <Image
                  src={about.directorPhoto}
                  alt="Centre Director"
                  width={96}
                  height={96}
                  className="rounded-xl object-cover"
                />

                {/* Message */}
                <div>
                  {about.directorMessage
                    .split(/\n\s*\n|\/n/)
                    .map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-neutral-700 leading-relaxed text-justify mb-4"
                    >
                      {paragraph}
                    </p>
                    ))}

                  <p className="mt-4 text-sm font-semibold text-[#012147]">
                    {about.directorName}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {about.directorTitle}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Vision / Mission */}
          <Card className="p-6">
            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Vision
            </p>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
              {about.vision}
            </p>

            <hr className="my-5 border-neutral-200" />

            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Mission
            </p>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
              {about.mission}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
