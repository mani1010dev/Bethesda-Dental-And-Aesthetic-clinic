import { motion } from "framer-motion";
import { process } from "./data";

export function Process() {
  return (
    <section className="relative py-24 md:py-32 luxe-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Your journey</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">A path designed with <span className="italic gold-text">care</span>.</h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-12">
            {process.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12 md:text-right md:[direction:ltr]" : "md:pr-12 md:text-right"}`}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <div className="text-xs uppercase tracking-[0.25em] text-gold">Step 0{i + 1}</div>
                    <div className="mt-2 font-display text-2xl">{p.t}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                  </div>
                </div>
                <div className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full primary-bg text-xs text-primary-foreground shadow-luxe md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
