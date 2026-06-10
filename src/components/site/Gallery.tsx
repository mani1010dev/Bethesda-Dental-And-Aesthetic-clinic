import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { beforeAfter, clinicPhotos } from "./data";

function Slider({ src }: { src: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-luxe"
      onMouseMove={(e) => e.buttons === 1 && drag(e.clientX)}
      onTouchMove={(e) => drag(e.touches[0].clientX)}
      onClick={(e) => drag(e.clientX)}
    >
      <img src={src} className="absolute inset-0 h-full w-full object-cover" alt="After" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={src} className="h-full w-full object-cover grayscale brightness-95" alt="Before" style={{ width: ref.current?.clientWidth ?? "100%" }} />
        <div className="absolute left-4 top-4 rounded-full bg-foreground/70 px-3 py-1 text-xs text-background">Before</div>
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs text-gold-foreground">After</div>
      <div className="absolute inset-y-0 w-px bg-white shadow" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-foreground shadow-luxe">
          ⇌
        </div>
      </div>
    </div>
  );
}

const categories = ["Clinic Tour", "Before & After"] as const;

export function Gallery() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Clinic Tour");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 luxe-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Gallery</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Experience <span className="italic gold-text">Bethesda</span>.
            </h2>
          </div>
          <div className="inline-flex gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-5 py-2.5 text-sm transition-colors cursor-pointer ${
                  cat === c
                    ? "border-transparent bg-foreground text-background"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {cat === "Clinic Tour" ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clinicPhotos.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                onClick={() => setLightbox(img)}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={img}
                    alt={`Bethesda Clinic Tour ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {beforeAfter.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Slider src={it.img} />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.category}</div>
                    <div className="font-display text-xl">{it.label}</div>
                  </div>
                  <button onClick={() => setLightbox(it.img)} className="text-sm text-foreground/70 hover:text-foreground cursor-pointer">
                    View full
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-foreground/80 p-4 backdrop-blur-sm cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 rounded-full bg-background/25 p-3 text-background transition-colors hover:bg-background/40 cursor-pointer"
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Result"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
