import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Projects } from "@/components/site/Projects";
import { ConservationMap } from "@/components/site/ConservationMap";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <Projects />
        <ConservationMap />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
