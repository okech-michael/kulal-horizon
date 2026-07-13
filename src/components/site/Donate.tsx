import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import seedlingImg from "@/assets/seedling.jpg";

const amounts = [
  { v: 25, label: "10 seedlings" },
  { v: 75, label: "A community day" },
  { v: 250, label: "A school nursery" },
  { v: 1000, label: "A hectare restored" },
];

export function Donate() {
  const [amount, setAmount] = useState(75);
  const [custom, setCustom] = useState("");

  return (
    <section id="donate" className="relative py-28 md:py-40 overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-highlight/30 blur-3xl" />
      </div>

      <div className="container-editorial relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] max-w-md">
              <img src={seedlingImg} alt="A seedling cradled in red volcanic soil" loading="lazy" className="h-full w-full object-cover animate-slow-zoom" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-highlight">100% transparent</div>
                <p className="mt-1 text-sm text-white/85">Every contribution is tracked from seedling to standing tree.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-highlight">
              <span className="h-px w-8 bg-highlight" /> Support the mission
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-white">
              Give a <span className="italic text-gradient-sunrise">seedling</span> a lifetime.
            </h2>
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg">
              Your gift funds indigenous seedlings, community training and the field work
              that keeps young forests alive through their most vulnerable years.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {amounts.map((a) => (
                <button
                  key={a.v}
                  onClick={() => { setAmount(a.v); setCustom(""); }}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                    amount === a.v && !custom
                      ? "border-highlight bg-highlight/10"
                      : "border-white/15 hover:border-white/35 bg-white/5"
                  }`}
                >
                  <div className="font-display text-3xl font-semibold text-white">${a.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{a.label}</div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
              <span className="text-white/60">$</span>
              <input
                type="number"
                min={1}
                placeholder="Other amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/40 outline-none"
              />
            </div>

            <button className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-highlight px-7 py-4 text-sm font-semibold text-highlight-foreground hover:bg-highlight/90 transition-all hover:shadow-[0_20px_50px_-15px_rgba(232,185,75,0.6)]">
              <Heart className="h-4 w-4" />
              Donate ${custom || amount}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-white/50">
              <span>· Corporate partnerships</span>
              <span>· Community sponsorship</span>
              <span>· In-kind giving</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
