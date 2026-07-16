import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Donate } from "@/components/site/Donate";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
});

function DonatePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <Donate />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
