import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { quote: "Ntarakwai turned a bare hillside behind our school into a living classroom. Our pupils know every seedling by name.", name: "Halima Adan", role: "Head Teacher, Gatab Primary" },
  { quote: "They don't arrive with a plan for us. They arrive with questions, and then they stay and do the work with us.", name: "Elder Loruman", role: "Community elder, Kalacha" },
  { quote: "One of the few community-led restoration programmes on Mt. Kulal we consider a model for the region.", name: "Dr. J. Kimani", role: "Ecologist, Nature Kenya" },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-14"
        >
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-8 bg-primary" /> Voices
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
            From the people who <span className="italic text-gradient-forest">live it</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 hover:-translate-y-1 hover:shadow-elegant transition-all duration-500"
            >
              <Quote className="h-9 w-9 text-highlight" />
              <blockquote className="mt-5 font-display text-xl leading-snug text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-5">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
