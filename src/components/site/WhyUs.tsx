import { motion } from "framer-motion";
import { Award, Cpu, HeartHandshake, Leaf, ShieldCheck, Wallet } from "lucide-react";
import { whyUs } from "./data";

const icons = [Award, Cpu, HeartHandshake, Leaf, ShieldCheck, Wallet];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Why choose Bethesda</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Care designed with <span className="italic gold-text">intention</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-luxe"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gold/20 group-hover:text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
