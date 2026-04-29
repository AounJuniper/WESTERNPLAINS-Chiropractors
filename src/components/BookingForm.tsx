import { useState, type FormEvent } from 'react';
import { Calendar, Clock, User, Mail, ChevronRight, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';

export default function BookingForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Spinal Adjustment',
    date: '',
    time: '',
    website: '', // Honeypot field
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Bot protection
    if (formData.website) return;

    // Validation
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setError('Please finalize all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email dimension detected.');
      return;
    }

    setError('');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-white scroll-mt-32">
        <div className="w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-blue rounded-[3rem] p-12 md:p-24 text-center text-white"
          >
            <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Booking Initiated.
            </h2>

            <p className="text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
              Our clinical concierge has received your request. We will contact you shortly.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="px-10 py-5 bg-white text-brand-blue rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-brand-teal hover:text-white transition-all"
            >
              Return to Form
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-white scroll-mt-32">
      <div className="w-[90%] mx-auto">

        <div className="bg-[#F9FBFA] rounded-[3rem] border border-slate-100 overflow-hidden grid lg:grid-cols-5 shadow-[0_40px_100px_-20px_rgba(12,16,20,0.05)]">

          {/* ================= LEFT PANEL ================= */}
          <div className="lg:col-span-2 bg-brand-blue p-10 md:p-14 text-white flex flex-col justify-between">

            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Clinical <br /> Consultation
              </h2>

              <p className="text-white/60 mb-12">
                Book your appointment with ease and speed.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Clock, text: 'Response within 2hrs' },
                  { icon: User, text: 'Expert Consultation' },
                  { icon: Calendar, text: 'Flexible Scheduling' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-teal" />
                    </div>
                    <span className="text-white/80 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= DYNAMIC PHONE ================= */}
            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase text-white/40 mb-2">
                Priority Helpline
              </p>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-xl font-bold hover:text-brand-teal transition"
              >
                {siteConfig.phone}
              </a>
            </div>

          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="lg:col-span-3 p-10 md:p-14 bg-white">

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-2xl">
                {error}
              </div>
            )}

            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 rounded-2xl border bg-slate-50"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-4 rounded-2xl border bg-slate-50"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-4 rounded-2xl border bg-slate-50"
                />

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-brand-blue text-white rounded-2xl font-bold"
                >
                  Next
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full p-4 rounded-2xl border bg-slate-50"
                />

                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full p-4 rounded-2xl border bg-slate-50"
                />

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border rounded-2xl"
                  >
                    Back
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-4 bg-brand-blue text-white rounded-2xl font-bold"
                  >
                    Confirm
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
