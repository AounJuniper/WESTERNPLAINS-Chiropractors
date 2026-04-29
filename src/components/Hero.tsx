import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-24 lg:pt-32 overflow-hidden bg-[#F9FBFA]"
    >
      {/* Background Effects */}
      <motion.div
        animate={{ x: [0, 20, 0], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-[#F3F6F5] rounded-l-[120px] -mr-20 hidden lg:block"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-brand-teal/5 rounded-full blur-[80px]"
      />

      <div className="w-[90%] mx-auto relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center lg:text-left pt-8 md:pt-12 lg:pt-0"
          >

            <div className="inline-flex items-center space-x-3 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white shadow-sm border border-slate-100 text-brand-teal text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-teal animate-pulse" />
              <span>Certified Neurological Care</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-brand-blue leading-[1.1] mb-6 md:mb-8 tracking-tighter font-serif">
              Pain-Free <br />
              <span className="text-brand-teal font-normal">Living Starts</span> <br />
              Here.
            </h1>

            <p className="text-sm md:text-base lg:text-[17px] text-slate-500 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 font-light px-4 lg:px-0">
              Experience advanced, neurologically-based chiropractic care designed to restore balance and unlock your body's potential for natural healing.
            </p>

            <a
              href="#booking"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-brand-blue text-white rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-brand-teal transition-all shadow-2xl flex items-center justify-center group"
            >
              Book Appointment
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </motion.div>

          {/* RIGHT IMAGE (FIXED FOR IPHONE + ALL DEVICES) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative flex justify-center w-full"
          >
            <div
              className="
                relative w-full 
                max-w-[340px] sm:max-w-[420px] lg:max-w-[520px]
                
                /* FIX FOR iPHONE */
                h-[420px] sm:h-[520px] lg:h-[620px]

                rounded-[30px] sm:rounded-[40px]
                overflow-hidden 
                border-4 sm:border-8 border-white 
                shadow-2xl
              "
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/638e0fffa08c6c660d9c95f9/8970254f-8a17-4f44-a8e2-d7a7d64b5401/WesternPlainsChiropractic-cutting-edge-techniques-Gillette.jpg?format=1000w"
                alt="Clinical Session"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* DOCTOR CARD (DYNAMIC) */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-12 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-[24px] shadow-2xl border border-brand-blue/5">

              <div className="text-brand-teal mb-2">
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              <p className="text-[8px] md:text-[10px] font-black text-brand-blue uppercase tracking-[0.2em]">
                Board Certified
              </p>

              <p className="text-[12px] md:text-[14px] font-serif text-slate-800 mt-1">
                {siteConfig.doctorName}
              </p>

              <p className="text-[10px] text-slate-500 mt-1">
                Chiropractic Specialist
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
