import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1a12] text-white/85">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-highlight blur-3xl" />
      </div>

      <div className="container-editorial relative py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary"><Leaf className="h-4 w-4" /></span>
              <div>
                <div className="font-display text-xl font-semibold text-white">Ntarakwai CBO</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">Mt. Kulal · Kenya</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-white/70 leading-relaxed">
              Community-based environmental conservation, restoration and climate resilience,
              rooted in the people and ecosystems of Mt. Kulal.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-md">
              <label className="block text-xs uppercase tracking-[0.22em] text-white/60 mb-3">Field notes newsletter</label>
              <div className="flex gap-2 rounded-full glass-dark p-1.5">
                <input type="email" placeholder="you@email.com" className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none" />
                <button className="rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-highlight-foreground">Subscribe</button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterCol title="Explore" links={["Mission", "Impact", "Projects", "Gallery"]} />
            <FooterCol title="Get involved" links={["Volunteer", "Donate", "Partners", "Careers"]} />
            <FooterCol title="Resources" links={["Journal", "Reports", "Press", "Research"]} />
            <FooterCol title="Legal" links={["Privacy", "Terms", "Governance", "Contact"]} />
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Ntarakwai Community Based Organization. All rights reserved.</div>
          <div className="font-display italic">Growing forests. Restoring ecosystems. Protecting Mt. Kulal.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] text-white/50">{title}</div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-sm text-white/85 hover:text-highlight transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
