import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { dentalServices, aestheticServices } from "./data";

type Service = { title: string; desc: string; long: string };

function Card({ s, onOpen, i }: { s: Service; onOpen: () => void; i: number }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-left shadow-soft transition-shadow hover:shadow-luxe"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">0{i + 1}</div>
      <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
      </div>
    </motion.button>
  );
}

export function Services() {
  const [tab, setTab] = useState<"dental" | "aesthetic">("dental");
  const [active, setActive] = useState<Service | null>(null);
  const list = tab === "dental" ? dentalServices : aestheticServices;

  return (
    <section id="services" className="relative py-24 md:py-32 luxe-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Our services</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-2xl">
              Complete care for your <span className="italic gold-text">smile and skin</span>.
            </h2>
          </div>

          <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-soft">
            {(["dental", "aesthetic"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`relative rounded-full px-5 py-2 text-sm capitalize transition-colors ${
                  tab === k ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {tab === k && (
                  <motion.span layoutId="tabpill" className="absolute inset-0 -z-10 rounded-full primary-bg" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
                )}
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Card key={s.title} s={s} i={i} onOpen={() => setActive(s)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-card p-8 shadow-luxe"
            >
              <button onClick={() => setActive(null)} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted">
                <X className="h-4 w-4" />
              </button>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{tab}</div>
              <h3 className="mt-2 font-display text-3xl">{active.title}</h3>
              <p className="mt-4 text-muted-foreground">{active.long}</p>
              <a href="#book" onClick={() => setActive(null)} className="mt-8 inline-flex items-center gap-2 rounded-full primary-bg px-6 py-3 text-sm text-primary-foreground">
                Book this treatment <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
