import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const stats = [
  { n: 20, s: "+", l: "Years of excellence" },
  { n: 12000, s: "+", l: "Smiles transformed" },
  { n: 25, s: "", l: "Specialists & staff" },
  { n: 98, s: "%", l: "Patient satisfaction" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-luxe">
            <img src="/clinic_photo_10.jpeg" alt="Inside Bethesda Clinic" className="h-full w-full object-cover" width={1080} height={833} loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden rounded-2xl border border-border bg-card p-6 shadow-soft md:block">
            <div className="font-display text-4xl gold-text">A+</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Hygiene rating</div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-gold"
          >
            About the clinic
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 font-display text-4xl md:text-5xl"
          >
            Where medical precision meets <span className="italic gold-text">quiet luxury</span>.
          </motion.h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Bethesda Dental & Aesthetic Clinic brings together world-class clinicians, calm interiors and the latest evidence-based
            technology — so every visit feels less like a procedure and more like a renewal. We believe
            beautiful results begin with how you feel the moment you arrive.
          </p>

          <ul className="mt-8 grid gap-3 text-sm text-foreground/80">
            {["Certified specialists across dentistry & aesthetics", "State-of-the-art imaging, lasers and sterilisation", "Bespoke plans tailored to your goals and lifestyle"].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            {stats.map((st) => (
              <div key={st.l}>
                <div className="font-display text-3xl md:text-4xl text-foreground">
                  <Counter to={st.n} suffix={st.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
