import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { news } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="News & Updates"
          title="Latest announcements from the Centre"
          desc="Updates on programmes, partnerships, trainings, and institutional milestones."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {news.map((item) => (
            <Card key={item.slug} className="p-6 flex flex-col">
              {/* TODO: Replace with cover image */}
              <div className="mb-4 relative aspect-[16/9] overflow-hidden rounded-xl">

              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              </div>

              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                {item.date}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#012147]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {item.summary}
              </p>

              <div className="mt-4">
                {/* TODO: Enable dynamic routing for full article */}
                <Link
                  href={`/news/${item.slug}`}
                  className="text-sm font-semibold text-[#012147] hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
