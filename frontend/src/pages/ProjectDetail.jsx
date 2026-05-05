import { useEffect, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, CALENDLY_URL } from "../data/site";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);
  const nextProject = useMemo(() => {
    if (!project) return null;
    const i = projects.findIndex((p) => p.id === project.id);
    return projects[(i + 1) % projects.length];
  }, [project]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <main className="bg-[#0A0A0A] min-h-screen text-[#F8F6F0] flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-4">
            Not found
          </div>
          <h1 className="font-serif-display text-4xl md:text-5xl">
            This project doesn't exist.
          </h1>
          <button
            data-testid="back-home-btn"
            onClick={() => navigate("/")}
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] uppercase tracking-[0.22em] text-xs"
          >
            <ArrowLeft size={16} /> Back home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      data-testid={`project-detail-${project.id}`}
      className="bg-[#0A0A0A] text-[#F8F6F0] min-h-screen"
    >
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-10 md:py-14">
          <Link
            to="/"
            data-testid="project-back-link"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F8F6F0] hover:text-[#D4AF37] transition-colors w-fit"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
                {project.category} · {project.location}
              </span>
            </div>
            <h1
              data-testid="project-title"
              className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05]"
            >
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            { l: "Scope", v: project.scope },
            { l: "Location", v: project.location },
            { l: "Year", v: project.year },
            { l: "Duration", v: project.duration },
          ].map((m) => (
            <div
              key={m.l}
              className="bg-[#0A0A0A] py-6 md:py-8 px-4"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#A09E96]">
                {m.l}
              </div>
              <div className="mt-3 font-serif-display text-lg md:text-xl text-[#F8F6F0]">
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-6">
              The Story
            </div>
            <p className="font-serif-display text-2xl md:text-3xl text-[#F8F6F0] leading-snug">
              {project.intro}
            </p>
            <div className="mt-10 space-y-6 text-base md:text-lg font-light text-[#A09E96] leading-relaxed">
              {project.narrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Materials */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 self-start"
          >
            <div className="border border-white/10 bg-[#141414] p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-6">
                Material Palette
              </div>
              <ul className="space-y-3">
                {project.materials.map((m, i) => (
                  <li
                    key={i}
                    className="text-base text-[#F8F6F0] py-2 border-b border-white/5 flex items-baseline gap-3"
                  >
                    <span className="font-serif-display text-xs text-[#A09E96] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-10">
            Project Gallery
          </div>
          <div className="space-y-6 md:space-y-8">
            {project.gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  i % 2 === 0
                    ? "w-full"
                    : "w-full md:w-4/5 md:ml-auto"
                }
              >
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  loading="lazy"
                  className="w-full h-[55vh] md:h-[80vh] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + next */}
      <section className="border-t border-white/5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-4">
              Imagining something similar?
            </div>
            <h3 className="font-serif-display text-3xl md:text-4xl text-[#F8F6F0] leading-tight">
              Let's design <em className="text-[#D4AF37] font-normal">your home</em>.
            </h3>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="project-book-call"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] uppercase tracking-[0.22em] text-xs hover:bg-[#F0C847] transition-colors duration-300"
              >
                Book an Introductory Call
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                to="/#inquire"
                onClick={() => {
                  setTimeout(() => {
                    const el = document.getElementById("inquire");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 60);
                }}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-[#F8F6F0] uppercase tracking-[0.22em] text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300"
              >
                Send an Enquiry
              </Link>
            </div>
          </div>

          {nextProject && (
            <Link
              to={`/projects/${nextProject.id}`}
              data-testid="next-project-link"
              className="group block relative overflow-hidden h-[280px] md:h-auto"
            >
              <img
                src={nextProject.image}
                alt={nextProject.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] flex items-center justify-end gap-2">
                  Next Project <ArrowUpRight size={14} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    {nextProject.category}
                  </div>
                  <div className="mt-2 font-serif-display text-2xl md:text-3xl text-[#F8F6F0]">
                    {nextProject.title}
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};
