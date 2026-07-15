"use client";
import { useSelector, useDispatch } from "react-redux";
import { updateField, submitContactForm, resetForm } from "@/store/slices/contactSlice";
import { ALLOWED_SERVICES } from "@/utils/validation";
import { ShieldCheck, Send, Loader2, CheckCircle2, AlertCircle, Clock3, Lock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
export default function ContactPage() {
    const dispatch = useDispatch();
    const { form, status, errorMessage } = useSelector((state) => state.contact);
    const trustPoints = [
        { icon: Clock3, label: "24-Hour Response" },
        { icon: ShieldCheck, label: "Certified Security Engineers" },
        { icon: Lock, label: "NDA Available" },
        { icon: ShieldCheck, label: "SOC2 & ISO27001 Expertise" },
    ];
    const servicesDropdown = ALLOWED_SERVICES.map((service) => ({
        value: service,
        label: service,
    }));
    const handleInputChange = (field, value) => {
        dispatch(updateField({ field, value }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(submitContactForm(form));
    };
    return (<div className="relative min-h-screen overflow-hidden bg-linear-to-b from-cyan-50/40 via-white to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-5%] top-[-8%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"/>
        <div className="absolute right-[-8%] top-[35%] h-80 w-80 rounded-full bg-violet-400/20 blur-3xl"/>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-cyan">
            Get in Touch
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Let&apos;s Secure
            <br className="hidden sm:block"/>
            Your Business
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Our security specialists are ready to help with VAPT, GRC, SOC 2, ISO 27001, source code review, and cybersecurity operations.
          </p>
        </motion.section>

        <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:items-stretch lg:gap-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }} className="relative hidden h-full lg:block">
            <div className="flex h-full min-h-140 flex-col justify-between overflow-hidden rounded-4xl border border-slate-200/70 bg-white/90 p-8 shadow-[0_20px_80px_rgba(2,8,23,0.08)] xl:p-10">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-cyan backdrop-blur-sm">
                  Get in Touch
                </span>
                <div className="max-w-xl space-y-3">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                    Let&apos;s Secure
                    <br />
                    Your Business
                  </h2>
                  <p className="text-sm leading-7 text-slate-600">
                    Our team helps enterprises assess risk, strengthen defenses, and accelerate compliance with precision-led security programs.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-1">
                  {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (<motion.div key={point.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-700 shadow-sm">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                          <Icon className="h-4.5 w-4.5"/>
                        </div>
                        <span className="text-sm font-medium">{point.label}</span>
                      </motion.div>);
        })}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }} className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                  <Shield className="h-5 w-5"/>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Trusted by Startups & Enterprises</p>
                  <p className="text-xs text-slate-500">Security-first delivery from strategy to response.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }} className="mx-auto w-full min-w-0 max-w-2xl lg:mx-0 lg:h-full lg:max-w-none">
            <Card glowColor="cyan" className="flex h-full flex-col justify-center border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_80px_rgba(2,8,23,0.08)] sm:p-8 lg:p-10">
              {status === "success" ? (<div className="flex h-full min-h-120 flex-col items-center justify-center px-2 py-8 text-center sm:px-6">
                  <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.45, ease: "easeOut" }} className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-600 shadow-[0_10px_35px_rgba(6,182,212,0.16)]">
                    <CheckCircle2 className="h-10 w-10"/>
                  </motion.div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-slate-950">Request Submitted Successfully</h2>
                    <p className="mx-auto max-w-lg text-sm leading-7 text-slate-600">
                      Thank you for contacting Arrow CyberTech. One of our cybersecurity consultants will contact you within one business day.
                    </p>
                  </div>
                  <Button variant="outline" size="md" onClick={() => dispatch(resetForm())} className="mt-8 w-full sm:w-auto">
                    Submit Another Request
                  </Button>
                </div>) : (<form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-cyan">
                      Request Security Assessment
                    </span>
                    <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Request Security Audit</h2>
                    <p className="text-sm leading-7 text-slate-600">
                      Fill out the form and our security consultants will contact you within 24 hours.
                    </p>
                  </div>

                  {status === "error" && (<div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0"/>
                      <span>{errorMessage || "Verification failure. Check input parameters."}</span>
                    </div>)}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                        Your Name
                      </label>
                      <input type="text" required value={form.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="e.g. Kabir Mehta" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 transition-all duration-300 hover:border-slate-300 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"/>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                        Business Email
                      </label>
                      <input type="email" required value={form.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="e.g. user@company.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 transition-all duration-300 hover:border-slate-300 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"/>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                        Company Name
                      </label>
                      <input type="text" required value={form.company} onChange={(e) => handleInputChange("company", e.target.value)} placeholder="e.g. Tech Systems Inc" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 transition-all duration-300 hover:border-slate-300 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"/>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                        Service of Interest
                      </label>
                      <select value={form.service} onChange={(e) => handleInputChange("service", e.target.value)} className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 transition-all duration-300 hover:border-slate-300 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20">
                        {servicesDropdown.map((opt) => (<option key={opt.value} value={opt.value} className="bg-white">
                            {opt.label}
                          </option>))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                      Infrastructure Specifications
                    </label>
                    <textarea required rows={5} value={form.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Provide details on host counts, active repositories, code languages, or target timelines..." className="min-h-36 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 transition-all duration-300 hover:border-slate-300 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"/>
                  </div>

                  <Button variant="primary" type="submit" disabled={status === "loading"} className="w-full justify-center py-4 text-sm sm:text-base bg-linear-to-tr from-brand-cyan to-brand-purple">
                    {status === "loading" ? (<>
                        <Loader2 className="h-4.5 w-4.5 animate-spin"/> Submitting Security Request...
                      </>) : (<>
                        Request Security Assessment <Send className="ml-1 h-4 w-4"/>
                      </>)}
                  </Button>
                </form>)}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>);
}
