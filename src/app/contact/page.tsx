import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export default function ContactPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with the Centre"
          desc="For programme enquiries, partnerships, and collaboration opportunities."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-semibold text-[#012147]">
              Contact Information
            </h3>
            <p className="mt-3 text-sm text-neutral-600">
              TETFund Centre of Excellence in Skills, Entrepreneurship &
              Sustainable Development
            </p>

            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              {/* TODO: Confirm official email */}
              <li>📧 Email: contact.tetcoe@gmail.com</li>

              {/* TODO: Confirm official phone number */}
              <li>📞 Phone: +234 XXX XXX XXXX</li>

              <li>📍 Location: Yaba College of Technology, Lagos State</li>
            </ul>

            {/* TODO: Add Google Maps embed */}
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-[#012147]">
              Enquiry Form
            </h3>

            <form className="mt-4 space-y-3">
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm"
                placeholder="Full Name"
              />
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm"
                placeholder="Email Address"
              />
              <textarea
                className="w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm"
                rows={4}
                placeholder="Your message"
              />
              <button
                type="button"
                className="rounded-xl bg-[#012147] px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition"
              >
                Send Message
              </button>

              {/* TODO: Wire form to email or API */}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
