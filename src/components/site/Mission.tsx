import { motion } from "framer-motion";
import { Sprout, Trees, GraduationCap, CloudRain, Droplets, Bird, ArrowUpRight } from "lucide-react";

const areas = [
  { icon: Sprout, title: "Tree Nursery Development", body: "Propagating indigenous species suited to Mt. Kulal's fragile, high-altitude ecology." },
  { icon: Trees, title: "Afforestation", body: "Reforesting degraded slopes and community land during every rainy season." },
  { icon: GraduationCap, title: "Community Education", body: "Working with schools and youth groups to grow a generation of environmental stewards." },
  { icon: CloudRain, title: "Climate Change Action", body: "Adaptation programmes that build resilience against drought and land degradation." },
  { icon: Droplets, title: "Water Catchment Protection", body: "Safeguarding springs, streams and wetlands that sustain communities downhill." },
  { icon: Bird, title: "Biodiversity Conservation", body: "Protecting the endemic birds, mammals and plants of the Mt. Kulal ecosystem." },
];

export function Mission() {
  return (
    <section id="mission" className="relative py-28 md:py-40">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-8 bg-primary" /> What we do
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Six interconnected <span className="text-gradient-forest italic">missions</span>,
              one living mountain.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed"
          >
            Our work follows a simple principle: healthy ecosystems and healthy communities
            grow together. Everything we do serves both.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <motion.a
              href="#projects"
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] border border-border/60 hover:-translate-y-1.5 hover:shadow-elegant transition-all duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <a.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 -translate-y-0.5 -translate-x-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-primary" />
              </div>

              <h3 className="mt-8 font-display text-2xl font-semibold leading-tight">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{a.body}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
