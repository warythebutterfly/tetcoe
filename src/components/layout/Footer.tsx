import Container from "./Container";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="py-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-neutral-900">{site.fullName}</p>
            <p className="text-sm text-neutral-600">{site.host}</p>
          </div>

          <div className="text-sm text-neutral-500">
            {/* TODO: Add official email/phone once confirmed */}
            <p>© {new Date().getFullYear()} TETCoE • All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
