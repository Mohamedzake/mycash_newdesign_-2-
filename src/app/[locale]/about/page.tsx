// import { useTranslations } from "next-intl";
// import { getMessages } from "next-intl/server";
// import React from "react";

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }) {
//   const messages: any = await getMessages({ locale });
//   const title = messages.NavbarLinks.aboutTitle;

//   return {
//     title,
//   };
// }

// const AboutPage = () => {
//   const t = useTranslations("AboutPage");
//   return (
//     <div className="flex w-full items-center justify-center">
//       <h1 className="text-3xl font-bold mt-20">{t("title")}</h1>
//     </div>
//   );
// };

// export default AboutPage;
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function PathnamesPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("AboutPage");

  return (
    <div className="flex w-full items-center justify-center">
      <h1 className="text-3xl font-bold mt-20"> {t("title")}</h1>
    </div>
  );
}
