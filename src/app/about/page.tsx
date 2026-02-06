import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/content";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Overview of the Centre"
          desc="TETCoE supports skills development, entrepreneurship, and applied research aligned to national priorities and industry needs."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Main content */}
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm text-neutral-600 leading-relaxed px-2">
              <span className="font-semibold text-[#012147]">
                {site.fullName}
              </span>{" "}
              was established in {site.established} at {site.host}. The Centre
              strengthens institutional capacity for quality training and
              demand-driven research, and supports programmes that address
              priority development challenges.
            </p>

            {/* Director's Message */}
            <div className="mt-8 border-t border-neutral-200 pt-6 px-4">
              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                Message from the Centre Director
              </p>

              <div className="mt-4 grid gap-5 sm:grid-cols-[auto_1fr]">
                {/* Portrait */}
                <Image
                  src="/img/members/director.jpg"
                  alt="Centre Director"
                  width={96}
                  height={96}
                  className="rounded-xl object-cover"
                />

                {/* Message */}
                <div>
                  {site.directorMessage.split("/n").map((paragraph) => (
                    <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-4">
                      {paragraph}
                    </p>
                  ))}

                  <p className="mt-4 text-sm font-semibold text-[#012147]">
                    {site.directorName}
                  </p>
                  {/* <p className="text-sm text-neutral-600">
                    {site.directorTitle}
                  </p> */}
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
              {site.vision}
            </p>

            <hr className="my-5 border-neutral-200" />

            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Mission
            </p>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
              {site.mission}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
