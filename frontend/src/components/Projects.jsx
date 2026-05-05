import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/site";

export const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative bg-[#0A0A0A] py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
                Selected Works
              </span>
            </div>
            <h2
              data-testid="projects-heading"
              className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F8F6F0] leading-[1.05] max-w-3xl"
            >
              A quiet portfolio of <em className="text-[#D4AF37] font-normal">cinematic</em> spaces.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-light text-[#A09E96] leading-relaxed">
            Each commission is documented from material palette to final
            composition. Click any project for the full case study.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${p.span} ${p.height}`}
            >
              <Link
                to={`/projects/${p.id}`}
                data-testid={`project-card-${p.id}`}
                className="relative group overflow-hidden cursor-pointer block w-full h-full"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent transition-opacity duration-700" />
                <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-colors duration-700" />

                {/* Top-right index */}
                <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
                  <span className="font-serif-display text-sm text-[#F8F6F0]/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="w-6 h-px bg-[#D4AF37]" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <div className="flex items-end justify-between gap-4">
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#D4AF37] mb-3">
                        {p.category} · {p.location}
                      </div>
                      <h3
                        data-testid={`project-title-${p.id}`}
                        className="font-serif-display text-2xl md:text-4xl text-[#F8F6F0] leading-tight"
                      >
                        {p.title}
                      </h3>
                      <div className="mt-3 text-xs uppercase tracking-[0.22em] text-[#A09E96] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        View case study · {p.year}
                      </div>
                    </div>
                    <div className="shrink-0 w-12 h-12 border border-[#D4AF37]/0 group-hover:border-[#D4AF37] flex items-center justify-center transition-all duration-500 translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} className="text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
