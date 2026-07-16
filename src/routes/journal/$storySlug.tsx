import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import nurseryImg from "@/assets/nursery.jpg";
import restorationImg from "@/assets/restoration.jpg";
import communityImg from "@/assets/community.jpg";

const stories = {
  "restoration-returns": {
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
  "green-schools": {
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
  "nursery-ready": {
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
};

export const Route = createFileRoute("/journal/$storySlug")({
  component: StoryDetailPage,
  loader: ({ params }) => {
    const story = stories[params.storySlug as keyof typeof stories];
    if (!story) {
      throw new Error("Story not found");
    }
    return story;
  },
});

function StoryDetailPage() {
  const story = Route.useLoaderData();

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <Link to="/journal" className="inline-flex items-center text-sm font-medium text-primary">
            ← Back to journal
          </Link>
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/90 shadow-sm">
            <img src={story.image} alt={story.title} className="h-[320px] w-full object-cover sm:h-[420px]" />
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary/80">
                <span>{story.category}</span>
                <span className="h-1 w-1 rounded-full bg-primary/40" />
                <span className="text-muted-foreground">{story.date}</span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {story.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{story.summary}</p>
              <div className="mt-8 space-y-5 text-base leading-8 text-foreground/85">
                {story.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
