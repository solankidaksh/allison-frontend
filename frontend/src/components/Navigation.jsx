import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { CALENDLY_URL } from "../data/site";

const links = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQs" },
  { id: "inquire", label: "Inquire" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-5 md:py-6">
        <button
          data-testid="logo-link"
          onClick={() => {
            if (location.pathname !== "/") navigate("/");
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <span className="w-8 h-8 border border-[#D4AF37]/60 flex items-center justify-center font-serif-display text-[#D4AF37] text-lg">
            AJ
          </span>
          <span className="font-serif-display text-xl tracking-wide text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors">
            Allison Jaffe
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => goTo(l.id)}
              className="text-xs uppercase tracking-[0.22em] text-[#A09E96] hover:text-[#D4AF37] transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-quote-btn"
            className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.22em] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300"
          >
            Book a Call
          </a>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden text-[#F8F6F0] p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        data-testid="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[520px]" : "max-h-0"
        } bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`mobile-nav-${l.id}`}
              onClick={() => goTo(l.id)}
              className="text-left text-sm uppercase tracking-[0.25em] text-[#F8F6F0] hover:text-[#D4AF37] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-quote-btn"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center w-full py-4 bg-[#D4AF37] text-[#0A0A0A] font-medium uppercase tracking-[0.22em] text-xs"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
};
