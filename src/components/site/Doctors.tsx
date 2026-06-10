import { motion } from "framer-motion";
import { doctors } from "./data";

export function Doctors() {
  return (
    <section id="doctors" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Meet our specialists</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Clinicians you can <span className="italic gold-text">trust</span>.</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-luxe"
            >
              <div>
                <div className="font-display text-3xl">{d.name}</div>
                <div className="mt-1.5 text-sm text-gold tracking-wide">{d.role}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
