import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Contact } from "@/components/site/Contact";
import { Donate } from "@/components/site/Donate";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <Contact />
        <Donate />
      </div>
      <Footer />
    </main>
  );
}
