export type SiteConfig = {
  siteName: string;
  logo?: string;

  primaryColor: string;
  secondaryColor: string;

  phone: string;
  email: string;
  address: string;

  doctorName: string; // 👈 NEW FIELD

  heroTitle?: string;
  heroSubtitle?: string;
  footerCredit?: string;
};

export const siteConfig: SiteConfig = {
  siteName: "WESTERNPLAINS Chiropractors",
  logo: "https://images.squarespace-cdn.com/content/v1/638e0fffa08c6c660d9c95f9/be8228e0-e579-4248-be78-1c54baccac58/Western-Plains-Chiro-logo-blue-white.png?format=500w",

  primaryColor: "#23395d",
  secondaryColor: "#14b8a6",

  phone: "(307) 682-6650",
  email: "info@westernplains.com",
  address: "900 Ez St Suite 120, Gillette, WY 82718",

  doctorName: "Dr. Miles Fortner", // 👈 yahan change karna hai sirf

  heroTitle: "Pain Free Life Starts Here",
  heroSubtitle: "Professional Chiropractic Care You Can Trust",
  footerCredit: "Created by Aoun"
};