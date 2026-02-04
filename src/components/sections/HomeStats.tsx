import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { site } from "@/lib/content";

export default function HomeStats() {
  const stats = [
    { label: "Established", value: site.established },
    { label: "TETFund Allocation", value: site.allocation },
    { label: "Host Institution", value: "YabaTech" },
    { label: "Focus", value: "Skills • Research • Entrepreneurship" },
  ];

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5">
              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                {s.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-neutral-900">
                {s.value}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
