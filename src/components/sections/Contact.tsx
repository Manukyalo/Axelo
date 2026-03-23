"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, CheckCircle2, ChevronDown } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  "Web Application",
  "AI & Machine Learning",
  "SaaS Platform",
  "ERP / CRM System",
  "Mobile Application",
  "Brand & Motion Design",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
];

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    const nextErrors: Record<string, string> = {};
    if (!data.fullName) nextErrors.fullName = "Name is required";
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email as string)) nextErrors.email = "Valid email is required";
    if (!data.message) nextErrors.message = "Message is required";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFormState("idle");
      return;
    }

    // Mock sumbit
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormState("success");
    } catch (err) {
      setFormState("error");
    }
  };

  return (
    <section className="py-32 px-6 relative z-10 w-full bg-[#03000A]" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-6 block">
            Get in Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F0F0FF] tracking-tight leading-[1.1] mb-8">
            Ready to Build <br />
            <span className="text-gradient-full">Something Great?</span>
          </h2>
          <p className="text-[#8888AA] text-lg leading-relaxed mb-12 max-w-md">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a free strategic consultation.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#00FFB2] group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#8888AA] mb-1">Email Us</p>
                <p className="text-[#F0F0FF] font-medium">hello@novatechafrica.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#7B61FF] group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#8888AA] mb-1">Call Us</p>
                <p className="text-[#F0F0FF] font-medium">+254 700 000 000</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF6B35] group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#8888AA] mb-1">Visit Us</p>
                <p className="text-[#F0F0FF] font-medium">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "#", color: "#0077B5" },
              { icon: Twitter, href: "#", color: "#1DA1F2" },
              { icon: Github, href: "#", color: "#F0F0FF" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#8888AA] hover:text-[#00FFB2] transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 md:p-10 border border-white/[0.08] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00FFB2]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#F0F0FF] mb-4">Message Sent!</h3>
                  <p className="text-[#8888AA] max-w-xs mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-8 text-[13px] font-mono uppercase tracking-widest text-[#00FFB2] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Honeypot */}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        className={`w-full bg-white/[0.03] border ${errors.fullName ? 'border-red-500/50' : 'border-white/[0.1]'} focus:border-[#00FFB2]/50 rounded-xl px-5 py-4 text-[#F0F0FF] placeholder:text-white/10 outline-none transition-all duration-300`}
                      />
                      {errors.fullName && <p className="text-[10px] text-red-500 ml-1">{errors.fullName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className={`w-full bg-white/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-white/[0.1]'} focus:border-[#00FFB2]/50 rounded-xl px-5 py-4 text-[#F0F0FF] placeholder:text-white/10 outline-none transition-all duration-300`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        className="w-full bg-white/[0.03] border border-white/[0.1] focus:border-[#00FFB2]/50 rounded-xl px-5 py-4 text-[#F0F0FF] placeholder:text-white/10 outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2 relative">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">Service Needed</label>
                      <select
                        name="service"
                        className="w-full bg-white/[0.03] border border-white/[0.1] focus:border-[#00FFB2]/50 rounded-xl px-5 py-4 text-[#F0F0FF] outline-none transition-all duration-300 appearance-none cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-[#0D0D1A]">{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-5 bottom-4 w-4 h-4 text-[#8888AA] pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">Project Budget</label>
                    <select
                      name="budget"
                      className="w-full bg-white/[0.03] border border-white/[0.1] focus:border-[#00FFB2]/50 rounded-xl px-5 py-4 text-[#F0F0FF] outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b} className="bg-[#0D0D1A]">{b}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-5 bottom-4 w-4 h-4 text-[#8888AA] pointer-events-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project goals..."
                      className={`w-full bg-white/[0.03] border ${errors.message ? 'border-red-500/50' : 'border-white/[0.1]'} focus:border-[#00FFB2]/50 rounded-xl px-5 py-4 text-[#F0F0FF] placeholder:text-white/10 outline-none transition-all duration-300 resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-[10px] text-red-500 ml-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formState === "submitting"}
                    className="w-full py-5 rounded-xl bg-gradient-to-r from-[#00FFB2] via-[#7B61FF] to-[#FF6B35] text-white font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,255,178,0.3)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden relative group"
                  >
                    <span className="relative z-10">
                      {formState === "submitting" ? "Sending..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
