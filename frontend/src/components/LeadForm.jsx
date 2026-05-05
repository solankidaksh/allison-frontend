import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { projectTypes, budgetRanges } from "../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initialState = {
  name: "",
  email: "",
  phone: "",
  project_type: "",
  location: "",
  budget_range: "",
  message: "",
};

export const LeadForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", error: "" });

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.project_type) {
      setStatus({ state: "error", error: "Please fill name, email and project type." });
      return;
    }
    setStatus({ state: "loading", error: "" });
    try {
      await axios.post(`${API}/leads`, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        project_type: form.project_type,
        location: form.location.trim() || null,
        budget_range: form.budget_range || null,
        message: form.message.trim() || null,
      });
      setStatus({ state: "success", error: "" });
      setForm(initialState);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = Array.isArray(detail)
        ? detail.map((d) => d.msg || d).join(", ")
        : detail || "Something went wrong. Please try again.";
      setStatus({ state: "error", error: msg });
    }
  };

  const fieldCls =
    "w-full bg-transparent border-0 border-b border-white/15 focus:border-[#D4AF37] outline-none py-3 text-[#F8F6F0] placeholder:text-[#A09E96]/60 font-light text-base transition-colors";

  return (
    <section
      id="inquire"
      data-testid="lead-form-section"
      className="relative bg-[#0A0A0A] py-24 md:py-36 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
              Begin Your Project
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            data-testid="lead-form-heading"
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F8F6F0] leading-[1.05]"
          >
            Tell us about <em className="text-[#D4AF37] font-normal">your home</em>.
          </motion.h2>
          <p className="mt-6 text-base md:text-lg font-light text-[#A09E96] leading-relaxed max-w-md">
            Share a few details and we'll be in touch within one business day.
            Prefer to talk? Book an introductory call from the button below.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={submit}
          data-testid="lead-form"
          className="lg:col-span-7 space-y-8"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#A09E96]">
                Name *
              </label>
              <input
                data-testid="lead-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className={fieldCls}
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#A09E96]">
                Email *
              </label>
              <input
                data-testid="lead-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className={fieldCls}
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#A09E96]">
                Phone
              </label>
              <input
                data-testid="lead-phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="Optional"
                className={fieldCls}
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#A09E96]">
                Location
              </label>
              <input
                data-testid="lead-location"
                type="text"
                value={form.location}
                onChange={update("location")}
                placeholder="City, State"
                className={fieldCls}
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#A09E96]">
                Project Type *
              </label>
              <select
                data-testid="lead-project-type"
                required
                value={form.project_type}
                onChange={update("project_type")}
                className={`${fieldCls} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-[#0A0A0A]">Select…</option>
                {projectTypes.map((p) => (
                  <option key={p} value={p} className="bg-[#0A0A0A]">
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#A09E96]">
                Budget Range
              </label>
              <select
                data-testid="lead-budget"
                value={form.budget_range}
                onChange={update("budget_range")}
                className={`${fieldCls} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-[#0A0A0A]">Select…</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b} className="bg-[#0A0A0A]">
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-[#A09E96]">
              Tell us about your project
            </label>
            <textarea
              data-testid="lead-message"
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="What are you imagining? Timeline, scope, anything you'd like us to know."
              className={`${fieldCls} resize-none`}
            />
          </div>

          {/* Status */}
          {status.state === "success" && (
            <div
              data-testid="lead-success"
              className="flex items-start gap-3 border border-[#D4AF37]/40 bg-[#D4AF37]/5 px-5 py-4"
            >
              <CheckCircle2 size={18} className="text-[#D4AF37] mt-0.5" />
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-[#F8F6F0]">
                  Thank you
                </div>
                <div className="mt-1 text-sm text-[#A09E96]">
                  Your enquiry has been received. We'll be in touch within one
                  business day.
                </div>
              </div>
            </div>
          )}
          {status.state === "error" && (
            <div
              data-testid="lead-error"
              className="flex items-start gap-3 border border-red-500/30 bg-red-500/5 px-5 py-4"
            >
              <AlertCircle size={18} className="text-red-400 mt-0.5" />
              <div className="text-sm text-red-200">{status.error}</div>
            </div>
          )}

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              data-testid="lead-submit"
              disabled={status.state === "loading"}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-medium uppercase tracking-[0.22em] text-xs hover:bg-[#F0C847] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.state === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send Enquiry
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </button>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#A09E96]/60">
              We respect your inbox — no marketing, ever.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
