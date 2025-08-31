import LanguageSwitcher from "@/components/language-switcher";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "ja" }>;
}>) {
  const { lang } = await params;
  return (
    <div className="relative max-w-2xl mx-auto py-10">
      {/* Language Switcher - Fixed position in top right */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher currentLang={lang} />
      </div>

      {/* Main content */}
      {children}
    </div>
  );
}
