import { MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address
  )}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F9FBFA] scroll-mt-32">
      <div className="w-[90%] mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">

            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">
              Connect With Us
            </h2>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-blue mb-10 leading-tight tracking-tight">
              A Direct Path to <br />
              <span className="text-brand-teal font-normal">Clinical Excellence.</span>
            </h3>

            <p className="text-sm md:text-[17px] text-slate-500 mb-12 font-light leading-relaxed max-w-xl">
              Our clinical concierges are ready to assist you with scheduling, insurance verification, and any questions regarding your recovery pathway.
            </p>

            <div className="space-y-8">

              {/* ADDRESS */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <ContactInfoItem
                  icon={MapPin}
                  title="Location"
                  detail={siteConfig.address}
                />
              </a>

              {/* PHONE */}
              <a href={`tel:${siteConfig.phone}`} className="block group">
                <ContactInfoItem
                  icon={Phone}
                  title="Phone"
                  detail={siteConfig.phone}
                />
              </a>

             
            

            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="order-1 lg:order-2">

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <div className="h-full w-full bg-white rounded-[3rem] overflow-hidden shadow-[0_45px_100px_-25px_rgba(12,16,20,0.1)] border border-slate-100 relative min-h-[450px] lg:h-[600px] cursor-pointer">

                {/* MAP (AUTO FROM CONFIG) */}
                <iframe
                  title={siteConfig.siteName}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    siteConfig.address
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="pointer-events-none"
                />

                {/* OVERLAY */}
                <div className="absolute bottom-8 left-8 right-8 p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/50">
                  <h4 className="font-bold text-lg text-brand-blue mb-1">
                    {siteConfig.siteName}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-teal font-black">
                    Click to open in Google Maps
                  </p>
                </div>

              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

/* REUSABLE COMPONENT */
function ContactInfoItem({
  icon: Icon,
  title,
  detail
}: {
  icon: any;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start space-x-6">

      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-50 cursor-pointer hover:border-brand-teal transition-colors">
        <Icon className="w-6 h-6 text-brand-teal" />
      </div>

      <div>
        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">
          {title}
        </h4>
        <p className="text-slate-600 leading-relaxed font-medium">
          {detail}
        </p>
      </div>

    </div>
  );
}