import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroSlides, CALENDLY_URL } from "../data/site";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-[#0A0A0A]"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        speed={1200}
        pagination={{ clickable: true }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="hero-swiper absolute inset-0 w-full h-full"
        data-testid="hero-slider"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover ken-burns-img"
                key={`${i}-${activeIndex === i}`}
              />
              {/* Layered overlays for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#D4AF37]" />
                <span
                  data-testid={`hero-eyebrow-${activeIndex}`}
                  className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]"
                >
                  {heroSlides[activeIndex].eyebrow}
                </span>
              </div>
              <h1
                data-testid="hero-title"
                className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F8F6F0] leading-[1.05] text-balance"
              >
                {heroSlides[activeIndex].title}
              </h1>
              <p
                data-testid="hero-subtitle"
                className="mt-6 max-w-xl text-base md:text-lg font-light text-[#A09E96] leading-relaxed"
              >
                {heroSlides[activeIndex].subtitle}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="get-quote-btn"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-medium uppercase tracking-[0.22em] text-xs hover:bg-[#F0C847] transition-colors duration-300"
                >
                  Book an Introductory Call
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <button
                  data-testid="hero-projects-btn"
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-[#F8F6F0] font-medium uppercase tracking-[0.22em] text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  View Projects
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#0A0A0A]/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#A09E96]">
          <span>AJID — 6101 Balcones Dr. Ste. 103, Austin, Texas 78731</span>
          <span className="hidden sm:inline">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};
