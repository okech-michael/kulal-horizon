import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Gallery } from "@/components/site/Gallery";
import { Projects } from "@/components/site/Projects";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Gallery
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A visual record of the work taking root across Mt. Kulal.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            These images show the daily progress, the people involved, and the landscapes slowly returning to health.
          </p>
        </section>
        <Gallery />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
