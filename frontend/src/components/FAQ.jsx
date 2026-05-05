import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/site";

export const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative bg-[#0A0A0A] py-24 md:py-36 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
              FAQs
            </span>
          </div>
          <h2
            data-testid="faq-heading"
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F8F6F0] leading-[1.05]"
          >
            Questions, <em className="text-[#D4AF37] font-normal">answered</em>.
          </h2>
          <p className="mt-6 text-base font-light text-[#A09E96] leading-relaxed max-w-md">
            A short guide to working with Allison Jaffe Interior Design — from
            first conversation to final install. Couldn't find what you're
            looking for? Reach out below.
          </p>
        </div>

        {/* Right: Items */}
        <div className="lg:col-span-8 divide-y divide-white/10 border-t border-white/10">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} data-testid={`faq-item-${idx}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  data-testid={`faq-toggle-${idx}`}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 text-left py-6 md:py-7 group"
                >
                  <span className="flex items-baseline gap-4 md:gap-6">
                    <span className="font-serif-display text-sm text-[#D4AF37] tabular-nums shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif-display text-xl md:text-2xl text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug">
                      {item.q}
                    </span>
                  </span>
                  <span className="shrink-0 mt-1 w-9 h-9 border border-white/15 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors duration-300 text-[#F8F6F0]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 md:pb-8 pl-10 md:pl-14 pr-12 max-w-3xl text-base md:text-lg font-light text-[#A09E96] leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
