import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Volunteer } from "@/components/site/Volunteer";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/volunteer")({
  component: VolunteerPage,
});

function VolunteerPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Volunteer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Join the hands that are shaping a healthier mountain.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            Volunteers strengthen the restoration work through field support, shared knowledge, and practical action on the ground.
          </p>
        </section>
        <Volunteer />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
