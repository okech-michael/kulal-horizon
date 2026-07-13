import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import nurseryImg from "@/assets/nursery.jpg";
import plantingImg from "@/assets/planting.jpg";
import communityImg from "@/assets/community.jpg";
import restorationImg from "@/assets/restoration.jpg";
import forestMist from "@/assets/forest-mist.jpg";
import seedlingImg from "@/assets/seedling.jpg";
import heroImg from "@/assets/hero-kulal.jpg";

const items = [
  { src: heroImg, alt: "Mt. Kulal at sunrise", cat: "Landscape", span: "md:col-span-2 md:row-span-2" },
  { src: plantingImg, alt: "Community planting seedlings", cat: "Community", span: "" },
  { src: nurseryImg, alt: "Indigenous tree nursery", cat: "Nursery", span: "" },
  { src: seedlingImg, alt: "A seedling held in cupped hands", cat: "Nursery", span: "md:row-span-2" },
  { src: communityImg, alt: "Schoolchildren with seedlings", cat: "Community", span: "" },
  { src: restorationImg, alt: "Aerial view of restoration zone", cat: "Restoration", span: "md:col-span-2" },
  { src: forestMist, alt: "Forest canopy in morning mist", cat: "Landscape", span: "" },
];

const cats = ["All", "Landscape", "Nursery", "Community", "Restoration"];

export function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const list = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="py-28 md:py-40 bg-secondary/30">
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
              <span className="h-px w-8 bg-primary" /> Field gallery
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Frames from the <span className="italic text-gradient-forest">mountain</span>.
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === c ? "bg-primary text-primary-foreground" : "bg-background/60 text-foreground/70 hover:text-foreground border border-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {list.map((it, i) => (
            <motion.button
              key={it.src + i}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 5) * 0.06 }}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-70" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/70">{it.cat}</div>
                <div className="mt-1 font-display text-lg leading-tight">{it.alt}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/85 backdrop-blur-sm p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={list[lightbox].src}
              alt={list[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <button onClick={() => setLightbox(null)} className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass-dark text-white">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
