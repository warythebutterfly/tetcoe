"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      setFeedback("Your message has been sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

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
              <li>📧 Email: contact.tetcoe@gmail.com</li>
              <li>📞 Phone: +234 818 396 4263</li>
              <li>📍 Location: Yaba College of Technology, Lagos State</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-[#012147]">
              Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[#012147]">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm"
                placeholder="Email Address"
                required
              />
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm"
                rows={4}
                placeholder="Your message"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-xl bg-[#012147] px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {feedback ? (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
