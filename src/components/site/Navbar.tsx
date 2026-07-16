import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/mission", label: "Mission" },
  { to: "/impact", label: "Impact" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
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
          className={`flex items-center justify-between rounded-full border border-primary/20 bg-[#08331f] px-5 lg:px-8 transition-all duration-500 ${
            scrolled
              ? "shadow-[0_10px_40px_-20px_rgba(14,90,58,0.55)] py-3"
              : "py-4"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-highlight text-highlight-foreground transition-colors">
              <Leaf className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-tight text-white">
                Ntarakwai
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/90">
                CBO · Mt. Kulal
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline text-sm font-medium text-white/95 hover:text-highlight"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/donate"
              className="rounded-full bg-highlight px-5 py-2.5 text-sm font-medium text-highlight-foreground transition-all hover:bg-highlight/90"
            >
              Donate
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-highlight text-highlight-foreground"
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
            <div className="rounded-3xl border border-primary/20 bg-[#08331f] p-6 shadow-elegant">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-white/95 hover:bg-white/10 hover:text-highlight transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/donate"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-highlight px-4 py-3 text-center text-base font-medium text-highlight-foreground"
                >
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
