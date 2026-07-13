import { motion } from "framer-motion";

const partners = [
  "Kenya Forest Service",
  "UNDP Kenya",
  "Marsabit County",
  "NEMA",
  "WWF",
  "Nature Kenya",
  "GBM",
  "USAID",
  "AFR100",
  "IUCN",
];

export function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="py-24 border-y border-border/60">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-8 bg-primary" /> Partners & supporters <span className="h-px w-8 bg-primary" />
          </div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {loop.map((p, i) => (
            <div key={i} className="flex items-center px-10 md:px-16 text-2xl md:text-3xl font-display font-medium text-foreground/40 hover:text-primary transition-colors whitespace-nowrap">
              {p}
              <span className="mx-8 h-1.5 w-1.5 rounded-full bg-foreground/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
