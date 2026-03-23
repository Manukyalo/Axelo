"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Building2, 
  Palette,
  Briefcase,
  Clock,
  User,
  Mail,
  MapPin,
  MessageSquare
} from "lucide-react";

type Step = 1 | 2 | 3;

const PROJECT_TYPES = [
  { id: "web", label: "Web Application", icon: Globe },
  { id: "mobile", label: "Mobile App", icon: Smartphone },
  { id: "ai", label: "AI / Machine Learning", icon: Cpu },
  { id: "saas", label: "SaaS Platform", icon: Cloud },
  { id: "erp", label: "ERP / CRM System", icon: Building2 },
  { id: "design", label: "Brand & Motion Design", icon: Palette },
];

const BUDGET_OPTIONS = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+"];
const TIMELINE_OPTIONS = ["ASAP (< 1 month)", "1–3 months", "3–6 months", "Flexible"];

export function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    projectTypes: [] as string[],
    budget: BUDGET_OPTIONS[1],
    timeline: TIMELINE_OPTIONS[1],
    description: "",
    fullName: "",
    email: "",
    company: "",
    country: "Kenya",
    whatsapp: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleProjectType = (label: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(label)
        ? prev.projectTypes.filter(t => t !== label)
        : [...prev.projectTypes, label]
    }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && formData.projectTypes.length === 0) {
      newErrors.projectTypes = "Please select at least one project type.";
    }
    if (step === 3) {
      if (!formData.fullName) newErrors.fullName = "Full name is required.";
      if (!formData.email) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(prev => (prev + 1) as Step);
  };

  const handleBack = () => {
    setStep(prev => (prev - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="py-32 px-6 relative z-10 w-full bg-[#03000A]" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#00FFB2] mb-4 block"
          >
            Project Inquiry
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#F0F0FF] tracking-tighter"
          >
            Let&apos;s Build Your <span className="text-gradient-full">Future.</span>
          </motion.h2>
        </div>

        <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/[0.08] relative overflow-hidden min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center h-full flex-1"
              >
                <div className="w-20 h-20 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/30 flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10 text-[#00FFB2]" />
                </div>
                <h3 className="text-3xl font-bold text-[#F0F0FF] mb-4">Brief Received!</h3>
                <p className="text-[#8888AA] text-lg max-w-md mx-auto leading-relaxed mb-8">
                  ✓ We&apos;ve logged your request for: <br />
                  <span className="text-[#F0F0FF] font-medium">{formData.projectTypes.join(", ")}</span>. <br />
                  Our team will be in touch within 24 hours.
                </p>
                <button 
                  onClick={() => { setIsSuccess(false); setStep(1); setFormData({ ...formData, projectTypes: [] }); }}
                  className="text-sm font-mono uppercase tracking-widest text-[#00FFB2] hover:underline"
                >
                  Send another brief
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col h-full flex-1">
                {/* Progress Header */}
                <div className="mb-12">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8888AA]">
                      Step {step} of 3
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0F0FF]">
                      {step === 1 ? "Project Type" : step === 2 ? "Scope & Budget" : "Contact Details"}
                    </span>
                  </div>
                  <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#00FFB2] to-[#7B61FF]"
                      initial={{ width: "33.33%" }}
                      animate={{ width: `${(step / 3) * 100}%` }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  {/* Honeypot */}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="flex-1">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-8"
                        >
                          <h3 className="text-2xl font-bold text-[#F0F0FF]">What are you building?</h3>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {PROJECT_TYPES.map((type) => {
                              const Icon = type.icon;
                              const isSelected = formData.projectTypes.includes(type.label);
                              return (
                                <button
                                  key={type.id}
                                  type="button"
                                  onClick={() => toggleProjectType(type.label)}
                                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 gap-4 group ${
                                    isSelected 
                                      ? "bg-[#00FFB2]/10 border-[#00FFB2]/40" 
                                      : "bg-white/[0.02] border-white/[0.06] hover:border-white/20"
                                  }`}
                                >
                                  <div className={`p-3 rounded-xl transition-colors duration-300 ${
                                    isSelected ? "bg-[#00FFB2]/20 text-[#00FFB2]" : "bg-white/[0.05] text-[#8888AA] group-hover:text-[#F0F0FF]"
                                  }`}>
                                    <Icon className="w-6 h-6" />
                                  </div>
                                  <span className={`text-[13px] font-medium tracking-wide ${
                                    isSelected ? "text-[#F0F0FF]" : "text-[#8888AA] group-hover:text-[#CCCCEE]"
                                  }`}>
                                    {type.label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                          {errors.projectTypes && <p className="text-xs text-red-500 font-mono">{errors.projectTypes}</p>}
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-8"
                        >
                          <h3 className="text-2xl font-bold text-[#F0F0FF]">Tell us about your scope.</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA]">
                                <Briefcase className="w-3 h-3" /> Budget Range
                              </label>
                              <div className="relative">
                                <select 
                                  value={formData.budget}
                                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-4 text-[#F0F0FF] outline-none appearance-none cursor-pointer focus:border-[#00FFB2]/40 transition-colors"
                                >
                                  {BUDGET_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-[#0D0D1A]">{opt}</option>)}
                                </select>
                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8888AA] rotate-90 pointer-events-none" />
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA]">
                                <Clock className="w-3 h-3" /> Targeted Timeline
                              </label>
                              <div className="relative">
                                <select 
                                  value={formData.timeline}
                                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-4 text-[#F0F0FF] outline-none appearance-none cursor-pointer focus:border-[#00FFB2]/40 transition-colors"
                                >
                                  {TIMELINE_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-[#0D0D1A]">{opt}</option>)}
                                </select>
                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8888AA] rotate-90 pointer-events-none" />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA]">
                              <MessageSquare className="w-3 h-3" /> Project Description (Optional)
                            </label>
                            <textarea 
                              rows={4}
                              value={formData.description}
                              onChange={(e) => setFormData({...formData, description: e.target.value})}
                              placeholder="Tell us what problem you're trying to solve..."
                              className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-4 text-[#F0F0FF] outline-none focus:border-[#00FFB2]/40 transition-colors resize-none placeholder:text-white/10"
                            />
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-8"
                        >
                          <h3 className="text-2xl font-bold text-[#F0F0FF]">How do we reach you?</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">
                                <User className="w-3 h-3" /> Full Name
                              </label>
                              <input 
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                placeholder="John Doe"
                                className={`w-full bg-white/[0.03] border ${errors.fullName ? 'border-red-500/50' : 'border-white/[0.1]'} rounded-xl px-5 py-4 text-[#F0F0FF] outline-none focus:border-[#00FFB2]/40 transition-all`}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">
                                <Mail className="w-3 h-3" /> Email Address
                              </label>
                              <input 
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                placeholder="john@company.com"
                                className={`w-full bg-white/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-white/[0.1]'} rounded-xl px-5 py-4 text-[#F0F0FF] outline-none focus:border-[#00FFB2]/40 transition-all`}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">
                                <Building2 className="w-3 h-3" /> Company / Organization
                              </label>
                              <input 
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                placeholder="Global Enterprises"
                                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-4 text-[#F0F0FF] outline-none focus:border-[#00FFB2]/40 transition-all"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">
                                <MapPin className="w-3 h-3" /> Country
                              </label>
                              <div className="relative">
                                <select 
                                  value={formData.country}
                                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-4 text-[#F0F0FF] outline-none appearance-none cursor-pointer focus:border-[#00FFB2]/40"
                                >
                                  <option value="Kenya" className="bg-[#0D0D1A]">Kenya 🇰🇪</option>
                                  <option value="Nigeria" className="bg-[#0D0D1A]">Nigeria 🇳🇬</option>
                                  <option value="South Africa" className="bg-[#0D0D1A]">South Africa 🇿🇦</option>
                                  <option value="USA" className="bg-[#0D0D1A]">United States 🇺🇸</option>
                                  <option value="UK" className="bg-[#0D0D1A]">United Kingdom 🇬🇧</option>
                                  <option value="Other" className="bg-[#0D0D1A]">Other</option>
                                </select>
                                <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8888AA] rotate-90 pointer-events-none" />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#8888AA] ml-1">
                              📱 WhatsApp Number (Optional)
                            </label>
                            <input 
                              type="text"
                              value={formData.whatsapp}
                              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                              placeholder="+254 700 000 000"
                              className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-5 py-4 text-[#F0F0FF] outline-none focus:border-[#00FFB2]/40 transition-all"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Buttons */}
                  <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/[0.05]">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={step === 1 || isSubmitting}
                      className={`flex items-center gap-2 text-sm font-medium transition-all ${
                        step === 1 ? "opacity-0 pointer-events-none" : "text-[#8888AA] hover:text-[#00FFB2]"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-[#F0F0FF] font-semibold hover:bg-[#00FFB2]/20 hover:border-[#00FFB2]/40 transition-all duration-300"
                      >
                        Next Step <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] text-[#03000A] font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,255,178,0.4)] disabled:opacity-50 transition-all duration-500"
                      >
                        {isSubmitting ? "Processing..." : "Send Project Brief →"}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
