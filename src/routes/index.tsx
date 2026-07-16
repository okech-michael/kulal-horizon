import { Link, createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AboutTimeline } from "@/components/site/AboutTimeline";
import { Stats } from "@/components/site/Stats";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const spotlightLinks = [
    {
      href: "/mission",
      title: "Our mission",
      description: "See how local stewardship drives every seedling and every restored hectare.",
      accent: "From seed to forest canopy",
    },
    {
      href: "/impact",
      title: "Our impact",
      description: "Explore the restoration milestones and community outcomes we are building.",
      accent: "Community-led change",
    },
    {
      href: "/projects",
      title: "Our projects",
      description: "Learn about the nurseries, reforestation and land restoration work underway.",
      accent: "Active restoration",
    },
    {
      href: "/volunteer",
      title: "Volunteer",
      description: "Join a practical conservation effort and help strengthen the landscape.",
      accent: "Take action today",
    },
  ];

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {spotlightLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {item.accent}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              <span className="mt-5 inline-flex text-sm font-medium text-emerald-700 transition-colors group-hover:text-emerald-900">
                Explore page →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <AboutTimeline />
      <Stats />
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">
            Home
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            The landscape is changing when the community leads.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50/90">
            We bring together restoration, livelihoods, and long-term stewardship so that Mt. Kulal can recover in ways that are visible, measurable, and lasting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              Support restoration
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
