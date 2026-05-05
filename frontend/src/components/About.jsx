import { motion } from "framer-motion";
import { services } from "../data/site";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[#0A0A0A] py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
              The Studio
            </span>
          </div>

          <h2
            data-testid="about-heading"
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F8F6F0] leading-[1.05]"
          >
            Award-winning <em className="text-[#D4AF37] font-normal">interior design</em>
            <br />
            from Austin, Texas.
          </h2>

          <div className="mt-10 max-w-xl space-y-6 text-base md:text-lg font-light text-[#A09E96] leading-relaxed">
            <p>
              Allison Jaffe Interior Design (AJID) is a full-service studio
              where smart design meets imagination and practicality. We curate
              homes for clients who want spaces that are unmistakably theirs —
              calm, considered, and built to last.
            </p>
            <p>
              From the first walk-through to the final pillow, we manage every
              decision: floor plans, finishes, custom cabinetry, lighting,
              furniture and the trades that bring it all to life. We never take
              on a project unless we know we can deliver on time, on budget,
              and above expectations.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "20+", l: "Years Designing" },
              { n: "Austin", l: "Home Studio" },
              { n: "AJID", l: "Award-Winning" },
            ].map((s) => (
              <div
                key={s.l}
                className="border-l border-[#D4AF37]/40 pl-4"
                data-testid={`about-stat-${s.l.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="font-serif-display text-3xl md:text-4xl text-[#F8F6F0]">
                  {s.n}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#A09E96]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image + services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1762843353757-3e4c2e85d4ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBwb3J0cmFpdCUyMGx1eHVyeSUyMHN0dWRpb3xlbnwwfHx8fDE3Nzc2NDQyNzl8MA&ixlib=rb-4.1.0&q=85"
              alt="Allison Jaffe — Lead Designer"
              className="w-full h-[520px] md:h-[640px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Founder & Principal Designer
              </div>
              <div className="mt-2 font-serif-display text-2xl text-[#F8F6F0]">
                Allison Jaffe
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.25em] text-[#A09E96] mb-4">
              Services
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
              {services.map((s) => (
                <li
                  key={s}
                  data-testid={`service-${s.toLowerCase().replace(/\s/g, "-").replace(/&/g, "and")}`}
                  className="text-sm text-[#F8F6F0] py-2 border-b border-white/5 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
