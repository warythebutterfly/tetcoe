import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export default function GovernancePage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Governance"
          title="Structure, accountability & sustainability"
          desc="Governance mechanisms ensure transparency, performance monitoring, and sustainable impact."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-semibold text-neutral-900">
              Result-Based Financing (RBF)
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Funding disbursement is linked to verified performance outcomes
              measured through Disbursement Linked Indicators (DLIs).
            </p>

            <ul className="mt-3 space-y-1 text-sm text-neutral-600">
              <li>• DLI 1: Basic Readiness</li>
              <li>• DLI 2: Quantity of Students</li>
              <li>• DLI 3: Quality of Students</li>
              <li>• DLI 4: Relevance of Education & Research</li>
              <li>• DLI 5: Financial Management</li>
              <li>• DLI 6: Procurement Management</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-neutral-900">
              Advisory Boards
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              The Centre is guided by both Sectoral Advisory Boards (SAB) and
              International Scientific Advisory Boards (ISAB).
            </p>

            {/* TODO: Insert board member profiles and photos */}
            <div className="mt-4 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-500">
              Board members list placeholder
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
