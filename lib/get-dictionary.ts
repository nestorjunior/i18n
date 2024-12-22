import "server-only";
import { Locale } from "@/i18n-config";

// Definindo explicitamente as chaves que o Locale pode ter
type Locale = "en" | "pt";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  pt: () => import("@/dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale](); // agora o TypeScript sabe que 'locale' é 'en' ou 'pt'
};
