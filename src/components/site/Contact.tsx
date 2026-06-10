import { motion } from "framer-motion";
import { Clock, MapPin, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 luxe-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-border shadow-luxe"
        >
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7896472064303!2d80.1325304!3d12.9212372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f266eaa016f%3A0xa715d7dcb9d74cb8!2sBethesda%20Dental%20And%20Aesthetic%20clinic!5e0!3m2!1sen!2sin!4v1781072409474!5m2!1sen!2sin"
            className="h-full min-h-[420px] w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Visit us</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">We'd love to <span className="italic gold-text">meet you</span>.</h2>

          <div className="mt-8 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-gold" />
              <div>
                <div className="font-medium">Bethesda Clinic</div>
                <div className="text-muted-foreground">
                  43, Muthu Mariamman Koil St, Adi Nagar,<br />
                  East Tambaram, Tambaram,<br />
                  Chennai, Tamil Nadu 600059
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-gold" />
              <a href="tel:08056272207" className="hover:text-gold">08056272207</a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-gold" />
              <div>
                <div className="font-medium">Hours</div>
                <div className="text-muted-foreground">Mon–Fri 9:00 – 19:00 · Sat 10:00 – 16:00</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:08056272207" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm hover:border-gold">
              <Phone className="h-4 w-4 text-gold" /> Click to call
            </a>
            <a href="https://wa.me/918056272207" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.7_0.16_150)] px-5 py-3 text-sm text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/918056272207"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.7_0.16_150)] text-white shadow-luxe transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="#book"
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full primary-bg px-5 py-3 text-sm text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5 sm:inline-flex"
      >
        Book Appointment
      </a>
    </>
  );
}
