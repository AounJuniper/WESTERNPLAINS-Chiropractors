import { motion } from 'motion/react';
import { Gift, Clock, CheckCircle2 } from 'lucide-react';

export default function OfferSection() {
  return (
    <section id="offer" className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
      <div className="w-[90%] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 lg:p-16 rounded-[30px] md:rounded-[40px] relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl" />
          
          <div className="lg:w-7/12 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 mx-auto lg:mx-0"
            >
              <Gift className="w-4 h-4" />
              <span>Introductory Invitation</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-6 leading-tight"
            >
              A Complete <span className="text-brand-teal">Wellness Reset</span> <br className="hidden md:block" />
              For New Patients.
            </motion.h3>
            
            <div className="grid gap-3 md:gap-4 mb-8 max-w-md mx-auto lg:mx-0">
               {[
                 'Advanced Spinal & Postural Assessment',
                 'Full Clinical Digital Imaging Analysis',
                 'First Targeted Adjustment Treatment',
                 'Customized Recovery Timeline'
               ].map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.5 + idx * 0.1 }}
                   className="flex items-center space-x-3 text-left"
                 >
                   <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-green shrink-0" />
                   <span className="text-sm md:text-base text-slate-700 font-medium leading-tight">{item}</span>
                 </motion.div>
               ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-4 p-4 bg-brand-light rounded-2xl border border-slate-100"
            >
               <Clock className="w-6 h-6 text-brand-teal animate-pulse" />
               <p className="text-sm text-slate-600">
                 <span className="font-bold text-brand-blue">Limited slots available</span>. Only 3 introductory appointments remaining this week.
               </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:w-5/12 w-full"
          >
             <div className="bg-brand-light p-8 md:p-10 rounded-3xl border-2 border-dashed border-brand-teal/20 text-center">
               <span className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest">Normal Value: $245</span>
               <div className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-brand-blue my-2">$89</div>
               <p className="text-slate-600 text-sm md:text-base mb-8">Your Comprehensive First Visit</p>
               
               <motion.a 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 href="#booking"
                 className="block w-full py-5 bg-brand-blue text-white rounded-xl font-bold shadow-lg shadow-brand-blue/20 hover:bg-brand-teal transition-all"
                >
                   Claim This Offer
                </motion.a>
                
                <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
                  100% Personal Attention Guaranteed
                </p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
