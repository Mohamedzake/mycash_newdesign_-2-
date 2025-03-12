/* eslint-disable @typescript-eslint/no-explicit-any */
// import Navbar from "@/components/Navbar";
// import "../globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: Readonly<{
//   children: React.ReactNode;
//   params: { locale: string };
// }>) {
//   const messages = await getMessages();
//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider messages={messages}>
//           <div className="mx-auto max-w-4xl h-screen  ">
//             <Navbar locale={locale} />
//             {children}
//           </div>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Header from "@/src/components/Header";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const fontClass =
    locale === "en" ? ibmPlexSans.className : ibmPlexArabic.className;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta
          name="facebook-domain-verification"
          content="kkrd506y1ao3crgzgm7wxpi08nhfsv"
        />
        <title>My Cash For POS Service</title>
      </head>
      <body className={`${fontClass} text-sm`}>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-T7X9PV2W');`,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7X9PV2W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
