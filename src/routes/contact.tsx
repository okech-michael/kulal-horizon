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
        <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Reach the team behind the restoration work.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            Whether you want to partner, volunteer, or understand our work better, we would love to hear from you.
          </p>
        </section>
        <Contact />
        <Donate />
      </div>
      <Footer />
    </main>
  );
}
