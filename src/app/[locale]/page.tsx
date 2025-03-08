// import { useTranslations } from "next-intl";
// // import { Link } from "../../i18n/navigation";

// export default function HomePage() {
//   const t = useTranslations("HomePage");
//   return (
//     <div>
//       <h1>{t("title")}</h1>
//       {/* <Link href="/about">{t("about")}</Link> */}
//     </div>
//   );
// }
// "use client";
import React from "react";

import Hero from "../../components/Hero";
import Solutions from "./../../components/Solutions";
import Carousel from "./../../components/Carousel";
// import AboutMyCash from "./_components/AboutMyCash";
// import Agreements from "./_components/Agreements";
// import Promotion from "./_components/Promotion";
import ContactUs from "./../../components/ContactUs";
import Footer from "./../../components/Footer";
import WhatsApp from "./../../components/WhatsApp";
import AboutMyCash from "@/src/components/AboutMyCash";
import Agreements from "@/src/components/Agreements";
import Promotion from "@/src/components/Promotion";
export default function Home() {
  return (
    <>
      <main className="">
        <Hero />

        <WhatsApp />
        <Solutions />
        <Carousel />
        <AboutMyCash />
        <Agreements />
        <Promotion />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
