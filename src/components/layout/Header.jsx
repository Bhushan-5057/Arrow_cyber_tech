"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toggleMenu, setMenuOpen, setScrolled, setActiveCategory, } from "@/store/slices/navigationSlice";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import clsx from "clsx";
import Button from "@/components/ui/Button";
export default function Header() {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const megaMenuLeaveTimer = useRef(null);
    const { isMenuOpen, isScrolled, activeCategory } = useSelector((state) => state.navigation);
    const openMegaMenu = useCallback(() => {
        if (megaMenuLeaveTimer.current) {
            window.clearTimeout(megaMenuLeaveTimer.current);
            megaMenuLeaveTimer.current = null;
        }
        dispatch(setActiveCategory("services"));
    }, [dispatch]);
    const scheduleMegaMenuClose = useCallback(() => {
        if (megaMenuLeaveTimer.current) {
            window.clearTimeout(megaMenuLeaveTimer.current);
        }
        megaMenuLeaveTimer.current = window.setTimeout(() => {
            dispatch(setActiveCategory(null));
            megaMenuLeaveTimer.current = null;
        }, 120);
    }, [dispatch]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                dispatch(setScrolled(true));
            }
            else {
                dispatch(setScrolled(false));
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch]);
    useEffect(() => {
        dispatch(setMenuOpen(false));
        dispatch(setActiveCategory(null));
        setMobileServicesOpen(false);
    }, [pathname, dispatch]);
    useEffect(() => {
        if (!isMenuOpen) {
            setMobileServicesOpen(false);
        }
    }, [isMenuOpen]);
    useEffect(() => {
        return () => {
            if (megaMenuLeaveTimer.current) {
                window.clearTimeout(megaMenuLeaveTimer.current);
            }
        };
    }, []);
    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }
        const scrollY = window.scrollY;
        const previousOverflow = document.body.style.overflow;
        const previousPosition = document.body.style.position;
        const previousTop = document.body.style.top;
        const previousWidth = document.body.style.width;
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.position = previousPosition;
            document.body.style.top = previousTop;
            document.body.style.width = previousWidth;
            window.scrollTo(0, scrollY);
        };
    }, [isMenuOpen]);
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services", hasMega: true },
        { label: "Blogs", href: "/blogs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact Us", href: "/contact" },
    ];
    return (<header className={clsx("fixed top-0 left-0 z-50 w-full transition-all duration-300", isScrolled
            ? "bg-white/90 backdrop-blur-xl"
            : "bg-white/70 backdrop-blur-sm")}>
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6 min-w-0">
        <Link href="/" className="group flex shrink-0 items-center px-1 py-1" aria-label="Arrow CyberTech home">
          <img src="/assets/logo1.png" alt="Arrow CyberTech logo" className="h-10 w-auto max-w-[min(180px,42vw)] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-12 md:h-14 lg:h-16 xl:h-20"/>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.hasMega) {
                return (<div key={link.label} className="relative py-2" onMouseEnter={openMegaMenu} onMouseLeave={scheduleMegaMenuClose}>
                  <button className={clsx("flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold hover:bg-cyan-50 hover:text-brand-cyan transition-colors cursor-pointer", pathname.startsWith("/services") ? "text-brand-cyan" : "text-slate-700")}>
                    Services
                    <ChevronDown className={clsx("w-4 h-4 transition-transform duration-300", activeCategory === "services" && "rotate-180")}/>
                  </button>
                </div>);
            }
            return (<Link key={link.label} href={link.href} className={clsx("text-sm font-semibold transition-colors relative px-3 py-2 hover:text-brand-blue", isActive ? "text-brand-cyan" : "text-slate-700")}>
                {link.label}
                {isActive && (<motion.span layoutId="navbar-indicator" className="absolute bottom-1.5 left-3 right-3 h-[2px] rounded-full bg-brand-cyan"/>)}
              </Link>);
        })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="cyber-glow" size="sm">
              Schedule Audit
            </Button>
          </Link>
        </div>

        <button onClick={() => dispatch(toggleMenu())} className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-brand-blue shadow-sm cursor-pointer" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
        </button>
      </div>

      <AnimatePresence>
        {activeCategory === "services" && (<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.25 }} onMouseEnter={openMegaMenu} onMouseLeave={scheduleMegaMenuClose} className="absolute left-1/2 top-full z-50 hidden w-[min(850px,calc(100vw-2rem))] -translate-x-1/2 px-4 pt-2 lg:block">
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-8 xl:grid-cols-4 xl:gap-6">
              {servicesData.map((cat) => (<div key={cat.slug} className="min-w-0 space-y-4">
                  <Link href={`/services/${cat.slug}`} className="flex items-center gap-1 font-bold text-sm text-brand-cyan transition-colors hover:text-brand-blue group/cat">
                    {cat.title}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover/cat:translate-x-1 group-hover/cat:opacity-100"/>
                  </Link>
                  <hr className="border-slate-200"/>
                  <ul className="space-y-2">
                    {cat.subServices.map((sub) => (<li key={sub.slug}>
                        <Link href={`/services/${cat.slug}/${sub.slug}`} className="block py-1 text-xs text-slate-600 transition-all hover:translate-x-1 hover:text-brand-blue">
                          {sub.title}
                        </Link>
                      </li>))}
                  </ul>
                </div>))}
            </div>
          </motion.div>)}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (<>
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-[2px] lg:hidden" aria-label="Close navigation menu" onClick={() => dispatch(setMenuOpen(false))}/>
            <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed right-0 top-0 z-50 h-dvh w-[min(88vw,390px)] max-w-full bg-white border-l border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.18)] lg:hidden overflow-y-auto overscroll-contain">
              <div className="sticky top-0 z-10 flex items-center justify-end border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
                <button onClick={() => dispatch(setMenuOpen(false))} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:text-brand-blue" aria-label="Close navigation menu">
                  <X className="w-5 h-5"/>
                </button>
              </div>

              <div className="px-6 py-6 space-y-3">
                {navLinks.map((link) => (<div key={link.label} className="border-b border-slate-200/70 pb-3">
                    {link.hasMega ? (<div>
                        <button type="button" onClick={() => setMobileServicesOpen((open) => !open)} className="flex w-full items-center justify-between py-2 text-left text-lg font-bold text-slate-800 transition-colors hover:text-brand-blue" aria-expanded={mobileServicesOpen}>
                          <span>Services</span>
                          <ChevronDown className={clsx("w-5 h-5 transition-transform duration-200", mobileServicesOpen && "rotate-180 text-brand-cyan")}/>
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                              <div className="pt-3 space-y-4">
                                <Link href="/services" className="block rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-brand-blue hover:text-brand-cyan">
                                  All Services
                                </Link>
                                {servicesData.map((cat) => (<div key={cat.slug} className="space-y-2 rounded-lg bg-slate-50 p-3">
                                    <Link href={`/services/${cat.slug}`} className="flex items-center justify-between text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors">
                                      {cat.title}
                                      <ArrowRight className="w-3.5 h-3.5"/>
                                    </Link>
                                    <div className="space-y-1 border-l border-slate-200 pl-3">
                                      {cat.subServices.map((sub) => (<Link key={sub.slug} href={`/services/${cat.slug}/${sub.slug}`} className="block py-1.5 text-xs text-slate-600 hover:text-brand-blue">
                                          {sub.title}
                                        </Link>))}
                                    </div>
                                  </div>))}
                              </div>
                            </motion.div>)}
                        </AnimatePresence>
                      </div>) : (<Link href={link.href} className={clsx("block py-2 text-lg font-bold transition-colors hover:text-brand-blue", pathname === link.href ? "text-brand-cyan" : "text-slate-800")}>
                        {link.label}
                      </Link>)}
                  </div>))}

                <div className="pt-4">
                  <Link href="/contact" className="block w-full">
                    <Button variant="cyber-glow" className="w-full justify-center">
                      Schedule Audit
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>)}
      </AnimatePresence>
    </header>);
}
