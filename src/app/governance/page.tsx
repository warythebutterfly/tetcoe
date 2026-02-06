import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BoardMemberCard, { Card } from "@/components/ui/Card";
import { governance } from "@/lib/governance";

export default function GovernancePage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Governance"
          title="Leadership, accountability & oversight"
          desc="The Centre operates under a structured governance framework to ensure transparency, performance monitoring, and sustainable impact."
        />

        {/* Leadership overview */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* <Card className="p-6">
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
          </Card> */}

          <Card className="p-6">
            <h3 className="font-semibold text-neutral-900">Centre Director</h3>

            <div className="mt-4">
              <BoardMemberCard member={governance.director} variant="lead" />
            </div>
          </Card>
        </div>

        {/* Management & Admin */}
        <div className="mt-16 border-t border-neutral-200 pt-10">

          <h3 className="text-lg font-semibold text-neutral-900">
            Centre Management & Administration
          </h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">
                Centre Managers
              </h4>

              <div className="space-y-5">
                {governance.managers.map((m) => (
                  <BoardMemberCard key={m.name} member={m} variant="compact" />
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">
                Administrative Officers
              </h4>

              <div className="space-y-4">
                {governance.adminOfficers.map((m) => (
                  <BoardMemberCard key={m.name} member={m} />
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* TAC Members */}
        <div className="mt-16 border-t border-neutral-200 pt-10">

          <h3 className="text-lg font-semibold text-neutral-900">
            Technical Advisory Committee (TAC)
          </h3>

          <p className="mt-2 text-sm text-neutral-600 max-w-2xl">
            The Technical Advisory Committee provides expert guidance on the
            Centre’s technical, academic, and operational activities.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {governance.tacMembers.map((m) => (
              <Card key={m.name} className="p-5">
                <BoardMemberCard member={m}  />
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
