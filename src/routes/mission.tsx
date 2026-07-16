import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Mission } from "@/components/site/Mission";
import { AboutTimeline } from "@/components/site/AboutTimeline";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/mission")({
  component: MissionPage,
});

function MissionPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Mission
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            We protect the forest by growing the next generation of stewards.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            Ntarakwai CBO links restoration work with the people who depend on the landscape every day, making resilience local and visible.
          </p>
        </section>
        <Mission />
        <AboutTimeline />
      </div>
      <Footer />
    </main>
  );
}
