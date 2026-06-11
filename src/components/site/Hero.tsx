import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
      {/* soft luxury background */}
      <div className="absolute inset-0 -z-10 luxe-bg" />
      <div className="absolute -top-40 -left-40 -z-10 h-[480px] w-[480px] rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Award-winning dental & aesthetic clinic
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl"
          >
            Transforming Smiles &{" "}
            <span className="gold-text italic">Enhancing</span> Confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Advanced dental care and aesthetic treatments delivered with precision, comfort, and excellence —
            in a serene clinic designed around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full primary-bg px-7 py-4 text-sm font-medium text-primary-foreground shadow-luxe transition-all hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-4 text-sm font-medium text-foreground backdrop-blur hover:bg-card"
            >
              <Phone className="h-4 w-4 text-gold" />
              Free Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              ["11+", "Years"],
              ["110k+", "Smiles"],
              ["4.9★", "Rated"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-foreground">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-luxe">
            <img src="/clinic_photo_9.jpeg" alt="Bethesda Clinic Front Office" className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[2rem]" />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-12 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur md:flex md:items-center md:gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/20 text-gold">★</div>
            <div>
              <div className="text-sm font-medium">4.9 / 5</div>
              <div className="text-xs text-muted-foreground">2,400+ reviews</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur md:block"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Now welcoming</div>
            <div className="font-display text-lg">New patients</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
