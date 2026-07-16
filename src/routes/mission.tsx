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
        <Mission />
        <AboutTimeline />
      </div>
      <Footer />
    </main>
  );
}
