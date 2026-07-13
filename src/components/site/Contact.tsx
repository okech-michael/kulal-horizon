import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-8 bg-primary" /> Get in touch
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Let's grow <span className="italic text-gradient-forest">something</span> together.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you want to partner, volunteer or simply learn more about our work — we'd love to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, label: "Office", value: "Gatab, Mt. Kulal · Marsabit County, Kenya" },
                { icon: Mail, label: "Email", value: "hello@ntarakwai.org" },
                { icon: Phone, label: "Phone", value: "+254 (0) 700 000 000" },
                { icon: Clock, label: "Hours", value: "Mon – Fri · 08:00 – 17:00 EAT" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-7 rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-lift"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Full name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="you@email.com" />
              <Input label="Organisation" placeholder="Optional" />
              <Input label="Subject" placeholder="Partnership, question, media…" />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 mb-2">Message</label>
              <textarea rows={6} placeholder="Tell us what's on your mind…" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:shadow-[0_18px_40px_-12px_rgba(14,90,58,0.5)] transition">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 mb-2">{label}</span>
      <input {...props} className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition" />
    </label>
  );
}
