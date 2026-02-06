import Container from "@/components/layout/Container";
import { site } from "@/lib/content";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-400/80 to-yellow-200" />
      <Container>
        <div className="relative py-14 sm:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase">
              TETFund Centre of Excellence • YabaTech
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#012147]">
              {site.fullName}
            </h1>
            <p className="mt-5 text-neutral-600 leading-relaxed max-w-xl">
              Empowering skills, entrepreneurship, and sustainable development through
              world-class training and applied research.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/programmes"
                className="inline-flex items-center rounded-xl bg-[#012147] px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
              >
                Explore Programmes
              </a>
              <a
                href="/about"
                className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-[#012147] hover:bg-neutral-50 transition"
              >
                About the Centre
              </a>
            </div>

            {/* <div className="mt-8 text-sm text-neutral-600">
              <p>
                <span className="font-semibold text-[#012147]">Established:</span>{" "}
                {site.established} •{" "}
                <span className="font-semibold text-[#012147]">Allocation:</span>{" "}
                {site.allocation}
              </p>
            </div> */}
          </div>

          {/* <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm p-6 sm:p-8"> */}
            {/* TODO: Replace with official hero image/gallery when received */}
            {/* <div className="aspect-[16/10] w-full rounded-2xl bg-neutral-100 grid place-items-center text-neutral-500 text-sm">
              Add hero photos (training, facilities, events)
            </div> */}

            {/* TODO: Optional YouTube embed showcase */}
            {/* <div className="mt-5 text-sm text-neutral-600">
              <p className="font-semibold text-[#012147]">Media Spotlight</p>
              <p className="mt-1">
                Add a featured YouTube video or short documentary once available.
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </Container>
    </section>
  );
}
