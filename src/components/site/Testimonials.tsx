import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "./data";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Patient stories</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Loved by <span className="italic gold-text">thousands</span>.</h2>
        </div>
      </div>

      <div className="relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee">
          {loop.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="w-[340px] flex-shrink-0 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90">"{t.text}"</p>
              <div className="mt-5 text-sm font-medium">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
