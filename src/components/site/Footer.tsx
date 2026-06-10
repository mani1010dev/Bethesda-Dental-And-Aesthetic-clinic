import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground font-display text-lg">B</span>
            <div className="font-display text-xl">Bethesda</div>
          </div>
          <p className="mt-4 text-sm text-background/70">
            A modern dental & aesthetic clinic where craft, science and care meet.
          </p>
          <div className="mt-6 flex gap-3 text-background/70">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="rounded-full border border-background/20 p-2 transition-colors hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-background/60">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Services", "Specialists", "Results", "FAQ", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="text-background/80 hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-background/60">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            {["Dental Implants", "Smile Makeover", "Teeth Whitening", "Botox & Fillers", "Laser Treatments", "Skin Rejuvenation"].map((l) => (
              <li key={l}><a href="#services" className="text-background/80 hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-background/60">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>43, Muthu Mariamman Koil St, East Tambaram, Chennai</li>
            <li><a href="tel:08056272207" className="hover:text-gold">08056272207</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-background/60 md:flex-row">
          <div>© {new Date().getFullYear()} Bethesda Clinic. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
