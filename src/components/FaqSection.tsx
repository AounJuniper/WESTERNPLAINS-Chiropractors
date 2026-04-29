import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "Do I need a referral from my GP?",
    answer: "No, chiropractors are primary contact practitioners, meaning you can book an appointment directly without a referral from a general practitioner."
  },
  {
    question: "How long does the first assessment take?",
    answer: "Your initial consultation typically takes 40-60 minutes. This includes a detailed health history, physical examination, and potentially your first adjustment if appropriate."
  },
  {
    question: "Is chiropractic care safe?",
    answer: "Yes, chiropractic is widely recognized as one of the safest drug-free, non-invasive therapies available for the treatment of neuromusculoskeletal complaints."
  },
  {
    question: "Will the treatment hurt?",
    answer: "Most patients experience immediate relief following an adjustment. While some may feel minor temporary soreness similar to after a workout, the process itself is generally very comfortable."
  },
  {
    question: "How many sessions will I need?",
    answer: "This depends on your specific condition, how long you've had it, and your overall wellness goals. We will provide a customized recovery blueprint during your first visit."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Patient Inquiries</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-8 leading-tight tracking-tight font-serif">
              Understanding Your <br />
              <span className="text-brand-teal font-normal">Clinical Journey.</span>
            </h3>
            <p className="text-sm md:text-[17px] text-slate-500 mb-12 max-w-md font-light leading-relaxed">
              We prioritize education and clinical transparency. Understanding your treatment trajectory is fundamental to optimal recovery.
            </p>
            <div className="p-8 bg-[#F9FBFA] rounded-3xl border border-slate-100 flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-teal shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-blue mb-1">Direct Assistance</p>
                <p className="text-xs text-slate-400 mb-4 font-light leading-relaxed">Require specialized technical clarification?</p>
                <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-brand-teal hover:underline underline-offset-4">Connect with Clinicians</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-teal/20 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-brand-blue pr-6">{faq.question}</span>
                  <motion.div
                    animate={{ 
                      rotate: openIndex === idx ? 180 : 0,
                      backgroundColor: openIndex === idx ? '#2D5A5A' : '#F9FBFA'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <ChevronDown className={cn("w-4 h-4 transition-colors", openIndex === idx ? "text-white" : "text-brand-teal")} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
