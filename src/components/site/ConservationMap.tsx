import { motion } from "framer-motion";
import { useState } from "react";
import { Trees, School, Droplets, Users, Building2, Leaf } from "lucide-react";

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
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 via-secondary to-highlight/10 shadow-elegant"
            >
              {/* Stylised topography */}
              <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="peak" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="oklch(0.62 0.14 152)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="oklch(0.62 0.14 152)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="400" height="300" fill="url(#peak)" />
                {[...Array(9)].map((_, i) => (
                  <path
                    key={i}
                    d={`M0 ${80 + i * 22} Q 100 ${60 + i * 22} 200 ${75 + i * 22} T 400 ${70 + i * 22}`}
                    fill="none"
                    stroke="oklch(0.44 0.10 152)"
                    strokeOpacity={0.18 - i * 0.012}
                    strokeWidth="1"
                  />
                ))}
                {/* River */}
                <path d="M 60 300 Q 120 220 180 200 T 320 120 T 400 40" fill="none" stroke="oklch(0.70 0.10 220)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* Markers */}
              {markers.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${m.x}%`, top: `${m.y}%` }}
                >
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
                    <button className={`relative grid h-10 w-10 place-items-center rounded-full transition-all ${active === i ? "bg-highlight text-highlight-foreground scale-125" : "bg-primary text-primary-foreground hover:scale-110"} shadow-lg`}>
                      <m.icon className="h-4 w-4" />
                    </button>
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl glass p-3 shadow-elegant z-10"
                      >
                        <div className="text-sm font-semibold">{m.label}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{m.note}</div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-4 right-4 rounded-full glass px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/70">
                Mt. Kulal · Marsabit County
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
