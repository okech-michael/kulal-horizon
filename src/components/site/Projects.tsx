import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import nurseryImg from "@/assets/nursery.jpg";
import plantingImg from "@/assets/planting.jpg";
import communityImg from "@/assets/community.jpg";
import restorationImg from "@/assets/restoration.jpg";

const projects = [
  { cat: "Nursery", title: "Ntarakwai Indigenous Nursery", body: "A 3-acre nursery producing 80,000 indigenous seedlings each season.", progress: 82, metric: "80,000 seedlings", img: nurseryImg },
  { cat: "Restoration", title: "Kulal Slope Restoration", body: "Reforesting 40 hectares of degraded upper slopes with native species.", progress: 55, metric: "40 ha in progress", img: restorationImg },
  { cat: "Education", title: "Green Schools Programme", body: "Establishing school nurseries and environmental clubs across the region.", progress: 68, metric: "22 schools onboard", img: communityImg },
  { cat: "Community", title: "Rainy Season Distribution", body: "Free seedling distribution to households during the long rains.", progress: 91, metric: "12,000 households", img: plantingImg },
];

const filters = ["All", "Nursery", "Restoration", "Education", "Community"];

export function Projects() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="py-28 md:py-40 bg-secondary/30">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-8 bg-primary" /> Featured projects
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Work already <span className="italic text-gradient-forest">in the ground</span>.
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-[0_10px_20px_-10px_rgba(14,90,58,0.6)]"
                    : "bg-background text-foreground/70 hover:text-foreground border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-[0_1px_0_rgba(0,0,0,0.04)] border border-border/50 hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full glass-dark px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white">
                  {p.cat}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-display text-2xl font-semibold leading-tight">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="uppercase tracking-[0.18em] text-primary/80">{p.metric}</span>
                    <span className="text-muted-foreground">{p.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
