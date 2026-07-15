"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
export default function FAQAccordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (<div className="space-y-4 max-w-3xl mx-auto w-full">
      {items.map((item, index) => {
            const isOpen = activeIndex === index;
            return (<div key={index} className={clsx("border rounded-xl overflow-hidden transition-colors duration-300", isOpen ? "border-brand-cyan/40 bg-sky-50" : "border-slate-200 bg-white")}>
            <button onClick={() => toggleFAQ(index)} className="flex w-full min-w-0 items-center justify-between gap-4 p-4 text-left font-semibold text-slate-800 hover:text-brand-blue cursor-pointer sm:p-5">
              <span className="min-w-0 break-words">{item.q}</span>
              <ChevronDown className={clsx("h-5 w-5 shrink-0 text-slate-600 transition-transform duration-300", isOpen && "rotate-180 text-brand-cyan")}/>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 mt-1">
                    {item.a}
                  </div>
                </motion.div>)}
            </AnimatePresence>
          </div>);
        })}
    </div>);
}
