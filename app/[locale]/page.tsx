import { use } from "react";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const isEn = locale === "en";
  return (
    <a
      href="mailto:tovmassian.serge@gmail.com"
      className="border border-[#c778dd] text-white px-4 py-2 hover:bg-[#c778dd]/10 transition-colors inline-block"
    >
      {isEn ? 'Contact me!!' : 'Contactez-moi !!'}
    </a>
  );
} 