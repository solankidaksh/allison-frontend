import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/site";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative bg-[#0A0A0A] py-24 md:py-36 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
                In Their Words
              </span>
            </div>
            <h2
              data-testid="testimonials-heading"
              className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F8F6F0] leading-[1.05]"
            >
              Trusted by collectors, <br />
              founders, and quiet legends.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={idx}
              data-testid={`testimonial-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative p-8 md:p-12 bg-[#141414] border border-white/5 hover:border-[#D4AF37]/40 transition-colors duration-700 group"
            >
              <Quote
                size={28}
                className="text-[#D4AF37] mb-6 opacity-80"
                strokeWidth={1.2}
              />
              <blockquote className="font-serif-display italic text-xl md:text-2xl text-[#F8F6F0] leading-snug mb-8">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="w-10 h-px bg-[#D4AF37]" />
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[#F8F6F0]">
                    {t.author}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#A09E96]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
