import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import nurseryImg from "@/assets/nursery.jpg";
import restorationImg from "@/assets/restoration.jpg";
import communityImg from "@/assets/community.jpg";

const stories = [
  {
    slug: "restoration-returns",
    title: "How 40 hectares of Mt. Kulal's upper slopes came back to life",
    category: "Field report",
    date: "March 2026",
    image: restorationImg,
    summary:
      "A three-year restoration effort combining indigenous species selection, community stewardship and patient rainy-season planting is beginning to reshape the mountain’s upper slopes.",
    body: [
      "Across the upper slopes of Mt. Kulal, the work is no longer just a line item in a project plan. It is visible in the ground, in the seedlings taking hold, and in the rhythm of community members who now return to the forest with a sense of shared responsibility.",
      "The approach marries careful species choice with long-term stewardship. Indigenous plants that can survive the harsh conditions of the highland environment are selected first, then planted in phases that follow the rain and protect the soil from erosion.",
      "The result is not simply a greener slope. It is a more resilient landscape, one that can sustain livestock, water, and the people who depend on it over time.",
    ],
  },
  {
    slug: "green-schools",
    title: "Green Schools programme reaches its 22nd partner school",
    category: "Programme",
    date: "Feb 2026",
    image: communityImg,
    summary:
      "The Green Schools programme continues to spread through the region, expanding environmental education and practical learning in classrooms and schoolyards.",
    body: [
      "The programme now works with 22 schools, giving each one a practical entry point into conservation. Teachers and pupils are building awareness through hands-on planting days, classroom lessons, and school-led environmental activities.",
      "Students are not only learning about conservation; they are contributing to it. Their participation makes the work immediate and tangible, and it links restoration with the future of the region’s young people.",
    ],
  },
  {
    slug: "nursery-ready",
    title: "New batch of indigenous seedlings ready for the long rains",
    category: "Nursery",
    date: "Jan 2026",
    image: nurseryImg,
    summary:
      "A fresh batch of indigenous seedlings is ready for planting as the long rains arrive, strengthening the nursery pipeline for the season ahead.",
    body: [
      "The nursery team has prepared a new cohort of seedlings, carefully selected for hardiness and ecological fit. The work is timed to the arrival of the long rains so that young trees can establish roots before the dry months return.",
      "That practical timing matters. When planting is aligned with the seasons, the chance of survival rises and the restoration work becomes far more durable.",
    ],
  },
];

export const Route = createFileRoute("/journal")({
  component: JournalIndexPage,
});

function JournalIndexPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">Journal</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Stories from the field</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              Read the latest notes, field reports and community updates from the restoration work around Mt. Kulal.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story.slug}
                to="/journal/$storySlug"
                params={{ storySlug: story.slug }}
                className="group overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <img src={story.image} alt={story.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary/80">
                    <span>{story.category}</span>
                    <span className="h-1 w-1 rounded-full bg-primary/40" />
                    <span className="text-muted-foreground">{story.date}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-foreground">
                    {story.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{story.summary}</p>
                  <span className="mt-5 inline-flex text-sm font-medium text-primary">Read story →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
