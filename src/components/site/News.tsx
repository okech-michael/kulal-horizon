import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import nurseryImg from "@/assets/nursery.jpg";
import restorationImg from "@/assets/restoration.jpg";
import communityImg from "@/assets/community.jpg";

const featured = {
  cat: "Field report",
  date: "March 2026",
  title: "How 40 hectares of Mt. Kulal's upper slopes came back to life",
  body: "A three-year restoration effort combining indigenous species selection, community stewardship and patient rainy-season planting.",
  img: restorationImg,
};

const others = [
  { cat: "Programme", date: "Feb 2026", title: "Green Schools programme reaches its 22nd partner school", img: communityImg },
  { cat: "Nursery", date: "Jan 2026", title: "New batch of indigenous seedlings ready for the long rains", img: nurseryImg },
  { cat: "Community", date: "Dec 2025", title: "Reflections from a decade of community-led conservation", img: communityImg },
];

export function News() {
  return (
    <section className="py-28 md:py-40 bg-secondary/30">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-8 bg-primary" /> Journal
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              News from the <span className="italic text-gradient-forest">field</span>.
            </h2>
          </motion.div>
          <a href="#" className="link-underline text-sm font-medium text-primary">Browse all stories →</a>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="group lg:col-span-7 relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:shadow-elegant transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={featured.img} alt={featured.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary/80">
                <span>{featured.cat}</span><span className="h-1 w-1 rounded-full bg-primary/40" /><span className="text-muted-foreground">{featured.date}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-[1.1]">{featured.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{featured.body}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">Read the story <ArrowUpRight className="h-4 w-4" /></div>
            </div>
          </motion.article>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((n, i) => (
              <motion.article
                key={n.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex gap-5 items-center rounded-2xl bg-card border border-border/50 p-4 hover:shadow-elegant transition-all"
              >
                <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                  <img src={n.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary/80">
                    <span>{n.cat}</span><span className="h-1 w-1 rounded-full bg-primary/40" /><span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h4 className="mt-1.5 font-display text-lg font-semibold leading-snug">{n.title}</h4>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
