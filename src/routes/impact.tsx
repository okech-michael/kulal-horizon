import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Stats } from "@/components/site/Stats";
import { ConservationMap } from "@/components/site/ConservationMap";
import { AboutTimeline } from "@/components/site/AboutTimeline";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impact")({
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Impact
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Every tree planted is part of a larger recovery story.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              We measure progress through restored land, stronger livelihoods, and the confidence that comes from seeing change happen on the ground.
            </p>
          </div>
        </section>
        <Stats />
        <AboutTimeline />
        <ConservationMap />
      </div>
      <Footer />
    </main>
  );
}
