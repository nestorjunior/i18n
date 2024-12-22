import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";
import Counter from "@/components/counter";
import LocaleSwitcher from "@/components/locale-swicher";

export default async function IndexPage({
  params,
}: {
  params: { lang: Locale };
}) {
  // Agora, o Next.js irá garantir que você aguarde o parâmetro params
  const { lang } = await params; // Aguardar a resolução do parâmetro
  const dictionary = await getDictionary(lang);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <LocaleSwitcher dictionary={dictionary.counter} />
      <p className="text-2xl font-bold m-4 p-4 border border-blue">
        {dictionary["current-locale"]}: {lang}
      </p>
      <p className="font-bold m-4 p-4 border rounded-md bg-slate-300">
        Serve Component: {dictionary["server-component"].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
