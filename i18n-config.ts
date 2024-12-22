// /i18n-config.ts
export const i18n = {
  locales: ["en", "pt"] as const, // Isso cria uma união de tipo 'en' | 'pt'
  defaultLocale: "en",
};

// Definindo o tipo 'Locale' de forma precisa
export type Locale = (typeof i18n.locales)[number];
