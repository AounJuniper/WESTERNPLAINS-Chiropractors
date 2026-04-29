import { siteConfig } from "./config/siteConfig";

export const applyTheme = () => {
  const root = document.documentElement;

  root.style.setProperty("--primary", siteConfig.primaryColor);
  root.style.setProperty("--secondary", siteConfig.secondaryColor);
};