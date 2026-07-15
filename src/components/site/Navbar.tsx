import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#impact", label: "Impact" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-editorial">
        <div
          className={`flex items-center justify-between rounded-full px-5 lg:px-8 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_10px_40px_-20px_rgba(14,90,58,0.35)] py-3"
              : "bg-transparent py-4"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur-md"}`}>
              <Leaf className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className={`font-display text-lg font-semibold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
                Ntarakwai
              </div>
              <div className={`text-[10px] font-medium uppercase tracking-[0.18em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                CBO · Mt. Kulal
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`link-underline text-sm font-medium ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#donate"
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_rgba(14,90,58,0.5)]"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Donate
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className={`lg:hidden grid h-10 w-10 place-items-center rounded-full ${scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur-md"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden container-editorial mt-3"
          >
            <div className="glass rounded-3xl p-6 shadow-elegant">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground/85 hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#donate"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground"
                >
                  Donate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
