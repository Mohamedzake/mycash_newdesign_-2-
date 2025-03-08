// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useTranslations } from "next-intl";
// import { getMessages } from "next-intl/server";
// import React from "react";

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }) {
//   const messages: any = await getMessages({ locale });
//   const title = messages.NavbarLinks.profileTitle;

//   return {
//     title,
//   };
// }

// const ProfilePage = () => {
//   const t = useTranslations("ProfilePage");
//   return (
//     <div className="flex w-full items-center justify-center">
//       <h1 className="text-3xl font-bold mt-20">{t("title")}</h1>
//     </div>
//   );
// };

// export default ProfilePage;
import LocaleSwitcher from "@/src/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function PathnamesPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ProfilePage");

  return (
    <div className="flex w-full items-center justify-center">
      <LocaleSwitcher />
      <Link href={`/${locale}/about`}>About</Link>

      <h1 className="text-3xl font-bold mt-20"> {t("title")}</h1>
    </div>
  );
}
