import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Users, Check } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const reasons = [
  "Plant indigenous seedlings during the rainy seasons",
  "Support community education and school nurseries",
  "Help map and protect water catchments",
  "Contribute skills, from field work to design",
];

const upcoming = [
  { date: "Mar 22", title: "Community Planting Day", place: "Gatab village slopes" },
  { date: "Apr 05", title: "Green Schools Workshop", place: "Ntarakwai Primary" },
  { date: "Apr 27", title: "Water Catchment Survey", place: "Kalacha springs" },
];

export function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="volunteer" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={communityImg} alt="" aria-hidden width={1600} height={1200} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
      </div>

      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-white"
          >
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-highlight">
              <span className="h-px w-8 bg-highlight" /> Volunteer with us
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Bring your <span className="italic">hands</span>.
              Leave a <span className="italic text-gradient-sunrise">forest</span>.
            </h2>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-lg">
              We welcome volunteers from Marsabit and across the world — for a day, a season,
              or a lifetime of stewardship.
            </p>
            <ul className="mt-8 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-white/90">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-highlight/25 text-highlight">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.22em] text-white/60 mb-4">Upcoming activities</div>
              <div className="space-y-2">
                {upcoming.map((u) => (
                  <div key={u.title} className="flex items-center gap-4 rounded-2xl glass-dark p-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-highlight text-highlight-foreground font-display text-sm leading-tight text-center">
                      {u.date}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-white">{u.title}</div>
                      <div className="mt-0.5 flex items-center gap-1.5 text-xs text-white/70">
                        <MapPin className="h-3 w-3" /> {u.place}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl glass p-8 md:p-10 shadow-elegant">
              {!submitted ? (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold">Register as a volunteer</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Tell us a little about yourself and we'll be in touch.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                    <Field label="Phone" name="phone" placeholder="+254 ..." />
                    <Field label="Location" name="location" placeholder="City or village" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 mb-2">How would you like to help?</label>
                    <textarea rows={4} placeholder="Skills, availability, or activities you'd like to join…" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition" />
                  </div>
                  <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:shadow-[0_18px_40px_-12px_rgba(14,90,58,0.6)] transition-shadow">
                    <Users className="h-4 w-4" /> Submit registration
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent"><Check className="h-7 w-7" /></div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Karibu! Welcome to the team.</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">We've received your registration. A programme coordinator will reach out shortly.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 mb-2">{label}</span>
      <input {...props} className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition" />
    </label>
  );
}
