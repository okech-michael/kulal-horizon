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
        <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Our projects are built around resilient landscapes and steady local partnerships.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            From nursery work to ecosystem restoration, each initiative is designed to leave behind healthier land and stronger communities.
          </p>
        </section>
        <Projects />
        <ConservationMap />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
