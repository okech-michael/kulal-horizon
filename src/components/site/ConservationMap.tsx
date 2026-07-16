import { motion } from "framer-motion";
import { useState } from "react";
import { Trees, School, Droplets, Users, Building2, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-kulal.jpg";

const markers = [
  { x: 34, y: 42, icon: Trees, label: "Ntarakwai Nursery", note: "Central seedling nursery" },
  { x: 52, y: 30, icon: Leaf, label: "Upper Slope Reforestation", note: "Active restoration zone" },
  { x: 66, y: 56, icon: School, label: "Green Schools Cluster", note: "12 partner schools" },
  { x: 24, y: 62, icon: Droplets, label: "Kalacha Springs", note: "Water catchment protection" },
  { x: 70, y: 38, icon: Users, label: "Gatab Community", note: "Rainy season distribution" },
  { x: 46, y: 68, icon: Building2, label: "Kenya Forest Service Post", note: "Partner institution" },
];

export function ConservationMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 md:py-40">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 lg:sticky lg:top-32 self-start"
          >
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-8 bg-primary" /> Where we work
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05]">
              A living map of <span className="italic text-gradient-forest">Mt. Kulal</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From highland tree nurseries to lowland water catchments, our programmes trace
              the shape of the mountain and the communities that call it home.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-sm">
              {markers.map((m, i) => (
                <button
                  key={m.label}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${
                    active === i ? "bg-primary/10 text-primary" : "text-foreground/75 hover:text-primary"
                  }`}
                >
                  <m.icon className="h-4 w-4" />
                  <span className="font-medium">{m.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/50 shadow-elegant"
            >
              <img
                src={heroImg}
                alt="Mt. Kulal landscape restoration"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/90">
                  Mt. Kulal · Marsabit County
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  A living landscape shaped by restoration and community care.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
