import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0A0A0A] pt-24 md:pt-36 pb-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-px bg-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
            Begin a Conversation
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          data-testid="contact-heading"
          className="font-serif-display text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-light tracking-tighter text-[#F8F6F0] leading-[0.95]"
        >
          Let's <em className="text-[#D4AF37] font-normal">talk</em>.
        </motion.h2>

        <p className="mt-8 max-w-2xl text-base md:text-lg font-light text-[#A09E96] leading-relaxed">
          Tell us about your home, your timeline, and the way you want to live
          in your space. The first conversation is about making sure we're the
          right fit — for you, your timeline and your budget.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <a
            href="mailto:info@allisonjaffe.com"
            data-testid="contact-email"
            className="group block border-t border-white/10 hover:border-[#D4AF37]/60 pt-6 transition-colors duration-500"
          >
            <div className="flex items-center justify-between">
              <Mail size={18} className="text-[#D4AF37]" />
              <ArrowUpRight
                size={18}
                className="text-[#A09E96] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500"
              />
            </div>
            <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-[#A09E96]">
              Email
            </div>
            <div className="mt-2 font-serif-display text-2xl md:text-3xl text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors duration-500 break-all">
              info@allisonjaffe.com
            </div>
          </a>

          <a
            href="tel:+15123945045"
            data-testid="contact-phone"
            className="group block border-t border-white/10 hover:border-[#D4AF37]/60 pt-6 transition-colors duration-500"
          >
            <div className="flex items-center justify-between">
              <Phone size={18} className="text-[#D4AF37]" />
              <ArrowUpRight
                size={18}
                className="text-[#A09E96] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500"
              />
            </div>
            <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-[#A09E96]">
              Phone
            </div>
            <div className="mt-2 font-serif-display text-2xl md:text-3xl text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors duration-500">
              512.394.5045
            </div>
          </a>

          <a
            href="https://maps.google.com/?q=6101+Balcones+Dr+Ste+103+Austin+TX+78731"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-studio"
            className="group block border-t border-white/10 hover:border-[#D4AF37]/60 pt-6 transition-colors duration-500"
          >
            <div className="flex items-center justify-between">
              <MapPin size={18} className="text-[#D4AF37]" />
              <ArrowUpRight
                size={18}
                className="text-[#A09E96] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500"
              />
            </div>
            <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-[#A09E96]">
              Studio
            </div>
            <div className="mt-2 font-serif-display text-2xl md:text-3xl text-[#F8F6F0] leading-snug group-hover:text-[#D4AF37] transition-colors duration-500">
              6101 Balcones Dr.<br />
              Ste. 103, Austin,<br />
              Texas 78731
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-[#A09E96]">
          <span>© {new Date().getFullYear()} Allison Jaffe Interior Design. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Houzz</span>
          </div>
        </div>
      </div>
    </section>
  );
};
