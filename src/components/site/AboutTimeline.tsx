import { motion } from "framer-motion";
import forestMist from "@/assets/forest-mist.jpg";

const milestones = [
  { year: "The Challenge", title: "Degraded slopes, drying rivers", body: "Deforestation on Mt. Kulal threatened water catchments and the pastoralist livelihoods that depend on them." },
  { year: "The Beginning", title: "Ntarakwai CBO is founded", body: "A group of community elders, youth and educators formalised what had long been informal stewardship." },
  { year: "Mobilisation", title: "Communities take the lead", body: "Village committees, schools and women's groups became the backbone of every campaign." },
  { year: "The Nursery", title: "Indigenous seedlings, at scale", body: "We established a tree nursery focused only on native species suited to the mountain's ecology." },
  { year: "Today", title: "A living, growing forest", body: "Rainy seasons now bring thousands of seedlings into the ground, and measurable change to the land." },
];

export function AboutTimeline() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/40" />
      </div>

      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
                <span className="h-px w-8 bg-primary" /> Our Story
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Rooted in the <span className="text-gradient-forest italic">mountain</span>.
                Grown by the <span className="italic">community</span>.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Ntarakwai CBO exists because the people who live on Mt. Kulal decided,
                together, that the forest they inherited would not be the forest they left behind.
              </p>
              <div className="mt-10 overflow-hidden rounded-3xl shadow-lift">
                <motion.img
                  src={forestMist}
                  alt="Mist rolling over the forested ridges of Mt. Kulal"
                  width={1920}
                  height={1200}
                  loading="lazy"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  className="h-64 w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-highlight opacity-30" />
            <div className="space-y-14">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-1.5 grid h-10 w-10 place-items-center rounded-full bg-background ring-1 ring-primary/20">
                    <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_20%,transparent)]" />
                  </div>
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-primary/80">{m.year}</div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
