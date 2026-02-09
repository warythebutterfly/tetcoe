import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { news } from "@/lib/content";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = news.find((n) => n.slug === slug);

  if (!article) return notFound();

  console.log("article", slug, article);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        {/* Cover */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          {article.date}
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-[#012147] max-w-3xl">
          {article.title}
        </h1>

        <div className="mt-6 max-w-3xl text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>

        {/* Gallery */}
        {article.gallery && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {article.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200"
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* YouTube */}
        {article.youtube && (
          <div className="mt-12 aspect-video">
            <iframe
              src={article.youtube}
              className="h-full w-full rounded-xl"
              allowFullScreen
            />
          </div>
        )}
      </Container>
    </section>
  );
}
