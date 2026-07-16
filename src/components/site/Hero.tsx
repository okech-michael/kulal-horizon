import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import heroImg from "@/assets/hero-kulal.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-[#0b1a12] text-white">
      {/* Background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="Mt. Kulal at sunrise, layered ridges disappearing into mist"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Ambient floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-highlight/25 blur-3xl animate-floaty" />
        <div className="absolute right-[8%] bottom-[25%] h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-floaty" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <motion.div style={{ opacity, y: yFg }} className="relative z-10 flex min-h-[100svh] items-center">
        <div className="container-editorial w-full pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white shadow-lg shadow-black/20 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-highlight animate-pulse" />
              Community-led conservation · Mt. Kulal, Kenya
            </div>

            <h1 className="font-display text-[clamp(2.45rem,6.2vw,5.8rem)] font-semibold leading-[1.02] tracking-tight text-white">
              Growing Forests. <br />
              <span className="italic font-normal text-white">Restoring </span>
              <span className="text-gradient-sunrise italic font-normal">Ecosystems.</span>
              <br />
              Protecting Mt. Kulal.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
            >
              For over a decade, Ntarakwai CBO has stood beside the communities of Mt. Kulal,
              nurturing indigenous seedlings, restoring degraded landscapes and building
              climate resilience from the ground up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/impact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
              >
                Explore Our Impact
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/volunteer"
                className="group inline-flex items-center gap-3 rounded-full glass-dark px-7 py-4 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-highlight text-highlight-foreground">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Partner With Us
              </Link>
            </motion.div>

            {/* Micro stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-white/15 pt-8"
            >
              {[
                { k: "250K+", v: "Seedlings" },
                { k: "120", v: "Acres restored" },
                { k: "500+", v: "Volunteers" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/95">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-white/95"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
