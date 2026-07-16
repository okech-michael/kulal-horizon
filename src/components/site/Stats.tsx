import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import restorationImg from "@/assets/restoration.jpg";

const stats = [
  { value: 250000, suffix: "+", label: "Seedlings Distributed" },
  { value: 500, suffix: "+", label: "Community Volunteers" },
  { value: 150, suffix: "+", label: "Environmental Campaigns" },
  { value: 120, suffix: "+", label: "Acres Restored" },
  { value: 30, suffix: "+", label: "Partner Organizations" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v).toLocaleString()),
    });
    return () => controls.stop();
  }, [inView, mv, to]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function Stats() {
  return (
    <section id="impact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={restorationImg}
          alt=""
          aria-hidden
          width={1600}
          height={1000}
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-primary/85 to-foreground/90" />
        <div className="absolute inset-0 bg-foreground/25" />
      </div>

      <div className="container-editorial text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-highlight">
            <span className="h-px w-8 bg-highlight" /> Impact in numbers
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-[#1F2937] drop-shadow-[0_1px_2px_rgba(255,255,255,0.65)]">
            A decade of stewardship, measured one seedling at a time.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass-dark p-7 hover:-translate-y-1 hover:bg-white/10 transition-all duration-500"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-highlight/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm text-white/90 leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
