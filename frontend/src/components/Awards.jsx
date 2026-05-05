import { motion } from "framer-motion";
import { awards } from "../data/site";

export const Awards = () => {
  return (
    <section
      id="press"
      data-testid="awards-section"
      className="relative bg-[#0A0A0A] py-20 md:py-28 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
              Press & Awards
            </span>
          </div>
          <p className="max-w-md text-sm md:text-base font-light text-[#A09E96] leading-relaxed">
            Recognized by the design community we admire. Quietly proud, never
            the point.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
          {awards.map((a, idx) => (
            <motion.div
              key={a.name}
              data-testid={`award-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#0A0A0A] hover:bg-[#141414] transition-colors duration-500 p-6 md:p-8 flex flex-col justify-between min-h-[140px]"
            >
              <div className="font-serif-display text-base md:text-lg text-[#F8F6F0] leading-tight">
                {a.name}
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
                {a.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
