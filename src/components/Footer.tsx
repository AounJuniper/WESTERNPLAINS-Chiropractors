import { Heart, Instagram, Facebook, Linkedin, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialIcons = [Instagram, Facebook, Linkedin];

  return (
    <footer
      className="py-16 md:py-20 text-white"
      style={{ backgroundColor: siteConfig.primaryColor }}
    >
      <div className="w-[90%] max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {siteConfig.logo ? (
                <img
                  src={siteConfig.logo}
                  alt="logo"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: siteConfig.secondaryColor }}
                >
                  <Heart className="w-5 h-5 text-white" />
                </div>
              )}

             
            </div>

            <p className="text-sm opacity-80 leading-relaxed max-w-[280px]">
              {siteConfig.heroSubtitle ||
                "Providing professional chiropractic care to help you live a pain-free life."}
            </p>

            <div className="flex gap-3">
              {socialIcons.map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8 text-white/50">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm opacity-90">
              <li><a href="#home" className="hover:opacity-70">Home</a></li>
              <li><a href="#about" className="hover:opacity-70">About</a></li>
              <li><a href="#services" className="hover:opacity-70">Services</a></li>
              <li><a href="#faq" className="hover:opacity-70">FAQ</a></li>
              <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
            </ul>
          </div>

          {/* HOURS (STATIC - as per your design) */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8 text-white/50">
              Hours
            </h4>

            <ul className="space-y-4 text-sm opacity-90">

              <li className="flex justify-between items-start border-b border-white/5 pb-2">
                <span className="font-medium">Mon, Wed, Thu</span>
                <div className="text-right">
                  <div>8:00am - 12:00pm</div>
                  <div className="text-[12px] opacity-60">3:00pm - 6:00pm</div>
                </div>
              </li>

              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="font-medium">Tuesday, Friday</span>
                <span>8:00am - 12:00pm</span>
              </li>

              <li className="flex justify-between items-center pt-1">
                <span className="font-medium">Weekend</span>
                <span
                  className="font-bold uppercase text-[10px] tracking-wider px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${siteConfig.secondaryColor}20`,
                    color: siteConfig.secondaryColor,
                  }}
                >
                  Closed
                </span>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8 text-white/50">
              Contact
            </h4>

            <div className="space-y-5 text-sm opacity-90">

              {/* ADDRESS (DYNAMIC) */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/60" />
                <span>{siteConfig.address}</span>
              </div>

              {/* PHONE (DYNAMIC) */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 hover:opacity-70 transition"
              >
                <Phone className="w-4 h-4 text-white/60" />
                {siteConfig.phone}
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[10px] md:text-[11px] tracking-[0.2em] font-bold uppercase">

            <p>© {currentYear} {siteConfig.siteName}</p>

            <span className="hidden md:block opacity-20 text-lg">|</span>

            <p className="text-[#89a393]">
              Created by <span className="text-white">Aoun</span>
            </p>

            <div className="flex gap-8">
              <a href="#" className="hover:text-white/60">Privacy</a>
              <a href="#" className="hover:text-white/60">Terms</a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
