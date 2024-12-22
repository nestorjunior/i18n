"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { i18n } from "@/i18n-config";

type LocaleSwitcherProps = {
  dictionary: Record<string, string>; // Ajuste o tipo se necessário
};

export default function LocaleSwitcher({ dictionary }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState<string>("");

  // Atualiza o valor do estado ao carregar a página com o idioma atual
  useEffect(() => {
    const currentLocale = pathname.split("/")[1]; // Assume que o idioma está na primeira parte da URL
    setSelectedLocale(currentLocale);
  }, [pathname]);

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    window.location.href = `/${newLocale}${pathname.substring(3)}`; // Redireciona para a nova URL com o idioma
  };

  return (
    <div>
      <select
        value={selectedLocale}
        onChange={handleLocaleChange}
        className="p-2 border rounded-md"
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {dictionary[locale] || locale}{" "}
            {/* Exibe algo baseado no dictionary */}
          </option>
        ))}
      </select>
    </div>
  );
}
