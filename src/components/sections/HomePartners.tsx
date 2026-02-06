import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/lib/content";

export default function HomePartners() {
  return (
    <section className="py-10 sm:py-12 border-t border-neutral-200 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Partnerships"
          title="Trusted by industry and institutions"
          desc="We collaborate with organisations that strengthen skills development, innovation, and real-world impact."
        />

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-4
             transition-all duration-300
             hover:-translate-y-1 hover:border-green hover:shadow-md"
            >
              <Image
                src={partner.photo}
                alt={partner.name}
                width={160}
                height={80}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
