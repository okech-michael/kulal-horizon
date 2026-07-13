import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AboutTimeline } from "@/components/site/AboutTimeline";
import { Stats } from "@/components/site/Stats";
import { Mission } from "@/components/site/Mission";
import { Projects } from "@/components/site/Projects";
import { ConservationMap } from "@/components/site/ConservationMap";
import { Gallery } from "@/components/site/Gallery";
import { Volunteer } from "@/components/site/Volunteer";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { News } from "@/components/site/News";
import { Donate } from "@/components/site/Donate";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <AboutTimeline />
      <Stats />
      <Mission />
      <Projects />
      <ConservationMap />
      <Gallery />
      <Volunteer />
      <Partners />
      <Testimonials />
      <News />
      <Donate />
      <Contact />
      <Footer />
    </main>
  );
}
