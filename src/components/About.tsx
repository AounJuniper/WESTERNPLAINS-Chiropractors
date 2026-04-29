import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F9FBFA] scroll-mt-32 overflow-hidden">
      <div className="w-[90%] mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">
              About {siteConfig.doctorName}
            </h2>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-8 leading-tight tracking-tight font-serif">
              A Lifetime Dedicated to <br />
              <span className="text-brand-teal font-normal">Healing & Service.</span>
            </h3>

            {/* STORY */}
            <div className="space-y-6 text-slate-500 mb-10">

              <p className="text-sm md:text-[17px] leading-relaxed font-light">
                {siteConfig.doctorName} is a 4th-generation Gillette native, raised on a ranch in Campbell County.
                Inspired by a father who understood the impact of spine pain on hardworking blue-collar workers,
                he pursued chiropractic to serve his community.
              </p>

              <p className="text-sm md:text-[17px] leading-relaxed font-light">
                He graduated with honors from Parker University Chiropractic College in 2013 and returned to Gillette
                to take over Dr. Scott Hunter’s practice in 2014.
              </p>

              <p className="text-sm md:text-[17px] leading-relaxed font-light">
                Over the years, he built a strong clinical family including long-term staff like Tara (office manager),
                Dr. TJ Woodham (associate chiropractor), and Bonnie (patient coordinator), forming a practice rooted in trust and care.
              </p>

              <p className="text-sm md:text-[17px] leading-relaxed font-light">
                Outside the clinic, he is a Brazilian Jiu Jitsu Black Belt (since 2021), coach at Western Plains BJJ Academy,
                and actively involved in backcountry hunting, guiding, and research in spinal rehabilitation with published case studies.
              </p>

            </div>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-6 mb-10">

              {[
                { label: 'Education', val: 'Parker University (2013)' },
                { label: 'Experience', val: '10+ Years Practice' },
                { label: 'Background', val: '4th Gen Gillette Native' },
                { label: 'Expertise', val: 'Spine & Neuro Rehab' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="border-l-2 border-brand-teal/20 pl-4 py-1"
                >
                  <p className="text-[9px] uppercase font-black tracking-widest text-brand-teal mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm font-bold text-brand-blue">
                    {stat.val}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ x: 10 }}
              className="group flex items-center space-x-6 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:bg-brand-teal transition-colors">
                <Heart className="w-6 h-6" />
              </div>

              <div>
                <p className="text-sm font-bold text-brand-blue mb-1">
                  Our Philosophy
                </p>
                <p className="text-xs text-slate-400 group-hover:text-brand-teal transition-colors">
                  Care Beyond Symptoms
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >

            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(12,16,20,0.2)]">

              <img
                src="https://images.squarespace-cdn.com/content/v1/638e0fffa08c6c660d9c95f9/8970254f-8a17-4f44-a8e2-d7a7d64b5401/WesternPlainsChiropractic-cutting-edge-techniques-Gillette.jpg?format=1000w"
                alt="Doctor in practice"
                className="w-full aspect-[4/5] object-cover"
              />

            </div>

            {/* DECOR */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-slate-200 rounded-full -z-10" />

          </motion.div>

        </div>
      </div>
    </section>
  );
}