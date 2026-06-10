import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, CalendarDays, Sparkles } from "lucide-react";

type Form = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  message?: string;
};

export function Booking() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Form>();
  const [done, setDone] = useState(false);

  const onSubmit = async (data: Form) => {
    await new Promise((r) => setTimeout(r, 600));

    const formattedText = `👋 Hello Bethesda Clinic, I would like to request an appointment:

📅 *Appointment Details:*
👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
✉️ *Email:* ${data.email}
🩺 *Treatment:* ${data.treatment}
🗓️ *Preferred Date:* ${data.date}
${data.message ? `💬 *Message:* ${data.message}` : ""}`;

    const whatsappUrl = `https://wa.me/918056272207?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setDone(true);
    reset();
    setTimeout(() => setDone(false), 4500);
  };

  const input = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

  return (
    <section id="book" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Book your visit</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Reserve a moment for <span className="italic gold-text">you</span>.</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell us a little about you and we'll be in touch within one business day to confirm your appointment.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Complimentary 30-min consultation", "Flexible scheduling, evenings included", "Confidential — your data is safe"].map((t) => (
              <li key={t} className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-gold" />{t}</li>
            ))}
          </ul>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-border bg-card p-8 shadow-luxe"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input className={input} placeholder="Jane Doe" {...register("name", { required: true, maxLength: 80 })} />
              {errors.name && <p className="mt-1 text-xs text-destructive">Please enter your name</p>}
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
              <input className={input} placeholder="+1 555 0000" {...register("phone", { required: true, pattern: /^[\d +()-]{7,20}$/ })} />
              {errors.phone && <p className="mt-1 text-xs text-destructive">Valid phone required</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input type="email" className={input} placeholder="you@email.com" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
              {errors.email && <p className="mt-1 text-xs text-destructive">Valid email required</p>}
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Treatment</label>
              <select className={input} {...register("treatment", { required: true })}>
                <option value="">Select…</option>
                <option>Dental consultation</option>
                <option>Smile makeover</option>
                <option>Implants</option>
                <option>Whitening</option>
                <option>Skin rejuvenation</option>
                <option>Botox & fillers</option>
                <option>Laser treatment</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Preferred date</label>
              <input type="date" className={input} {...register("date", { required: true })} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={3} className={input} placeholder="Anything we should know…" {...register("message", { maxLength: 800 })} />
            </div>
          </div>

          <button
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full primary-bg px-6 py-4 text-sm font-medium text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            <CalendarDays className="h-4 w-4" />
            {isSubmitting ? "Sending…" : "Request appointment"}
          </button>

          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-x-6 -bottom-4 flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background shadow-luxe"
              >
                <Check className="h-4 w-4 text-gold" /> Request received — we'll be in touch shortly.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
