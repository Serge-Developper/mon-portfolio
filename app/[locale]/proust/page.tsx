import { use } from "react";

export default function ProustPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const isEn = locale === "en";
  // ... le reste du JSX (inchangé)
} 