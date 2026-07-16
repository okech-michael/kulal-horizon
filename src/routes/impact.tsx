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
        <Stats />
        <AboutTimeline />
        <ConservationMap />
      </div>
      <Footer />
    </main>
  );
}
