"use client";

import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative overflow-hidden bg-[url('/assets/bgimage4.svg')] bg-no-repeat bg-center bg-cover">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16 mb-12">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center" aria-label="Arrow CyberTech home">
              <img
                src="/assets/logo1.png"
                alt="Arrow CyberTech logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Global enterprise penetration testing, GRC audits, and advanced cybersecurity operations. Securing next-generation technology assets.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/arrow-cyber-technologies/" className="w-8 h-8 rounded bg-slate-100 border border-slate-200 hover:border-brand-cyan hover:text-brand-cyan flex items-center justify-center text-slate-600 transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-100 border border-slate-200 hover:border-brand-cyan hover:text-brand-cyan flex items-center justify-center text-slate-600 transition-colors">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-100 border border-slate-200 hover:border-brand-cyan hover:text-brand-cyan flex items-center justify-center text-slate-600 transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-100 border border-slate-200 hover:border-brand-cyan hover:text-brand-cyan flex items-center justify-center text-slate-600 transition-colors">
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm text-slate-950 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-900">
              <li>
                <Link href="/services/penetration-testing" className="hover:text-brand-cyan transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services/grc" className="hover:text-brand-cyan transition-colors">
                  Compliance & GRC
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity-operations" className="hover:text-brand-cyan transition-colors">
                  Operations Hardening
                </Link>
              </li>
              <li>
                <Link href="/services/training-and-awareness" className="hover:text-brand-cyan transition-colors">
                  Employee Awareness
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm text-slate-950 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-slate-900">
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-brand-cyan transition-colors">
                  Cyber Blogs
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-brand-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-200 my-8" />

        <div className="flex justify-center items-center text-center px-4">
          <p className="text-xs sm:text-sm text-slate-900">
            &copy; {currentYear} Arrow CyberTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}