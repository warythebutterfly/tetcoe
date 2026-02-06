import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/lib/content";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Partners"
          title="Institutional and industry collaborations"
          desc="Our partnerships strengthen training quality, research relevance, and industry exposure."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div className="rounded-xl border border-neutral-200 p-4">
            <p className="font-semibold text-[#012147]">Industry Partners</p>
            <p className="mt-1 text-neutral-600">
              Skills delivery, workplace exposure, and technical training
              support.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-4">
            <p className="font-semibold text-[#012147]">
              Development Organisations
            </p>
            <p className="mt-1 text-neutral-600">
              Capacity building, grants, and entrepreneurship support.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-4">
            <p className="font-semibold text-[#012147]">
              Academic & Research Partners
            </p>
            <p className="mt-1 text-neutral-600">
              Research collaboration and knowledge exchange.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-4">
            <p className="font-semibold text-[#012147]">Technology Partners</p>
            <p className="mt-1 text-neutral-600">
              Tools, platforms, and applied technical solutions.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h3 className="text-lg font-semibold text-[#012147]">
            How partnerships support the Centre
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-neutral-600 list-disc pl-5">
            <li>
              Co-design and delivery of industry-relevant skills training
              programmes
            </li>
            <li>
              Access to technical expertise, tools, and real-world learning
              environments
            </li>
            <li>
              Support for entrepreneurship, innovation, and start-up development
            </li>
            <li>
              Research collaboration and knowledge exchange aligned with
              national priorities
            </li>
          </ul>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center"
            >
              {/* Logo container */}
              <div
                className="flex h-24 w-full items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 transition-all duration-300
             hover:-translate-y-1 hover:border-green-400/80 hover:shadow-md"
              >
                <div
                  key={partner.name}
                  className="group flex items-center justify-center rounded-xl bg-white px-6 py-4"
                >
                  <Image
                    src={partner.photo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <h3 className="mt-4 text-sm font-semibold text-[#012147]">
                {partner.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed max-w-xs">
                {partner.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 items-center">
  {/* Text */}
  <div className="border-l-4 border-[#012147] pl-6">
    <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
      Partnership Highlight
    </p>

    <h3 className="mt-2 font-semibold text-[#012147]">
      BLUETTI Campus Initiative
    </h3>

    <p className="mt-3 text-sm text-neutral-600 leading-relaxed max-w-xl">
      In collaboration with BLUETTI, the Centre delivered hands-on
      training in solar energy technology, exposing students to
      installation, repair, and sustainable energy solutions while
      supporting product deployment and skills transfer.
    </p>
  </div>

  {/* Image */}
  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
    <Image
      src="/img/activities/bluetti-7.png"
      alt="BLUETTI Campus Initiative training session"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 40vw"
    />
  </div>
</div>



        <div className="mt-20 border-t border-neutral-200 pt-10 ">
          <h3 className="text-lg font-semibold text-[#012147]">
            Partner with the Centre
          </h3>

          <p className="mt-2 text-sm text-neutral-600">
            TETCoE welcomes collaboration with industry, development
            organisations, and academic institutions aligned with skills
            development, innovation, and sustainable development objectives.
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex text-sm font-semibold text-[#012147] hover:underline"
          >
            Contact the Centre →
          </a>
        </div>
      </Container>
    </section>
  );
}
