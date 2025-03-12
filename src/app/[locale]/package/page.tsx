import React from "react";

import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import { Pricing } from "../../../components/Pricing";
import WhatsApp from "../../../components/WhatsApp";
import { getTranslations } from "next-intl/server";
const Package = async () => {
  const t = await getTranslations("package");

  return (
    <section className="">
      {/* <Header /> */}
      <WhatsApp />
      <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-center mt-32">
        <div className="text-2xl text-gray-900 flex flex-col gap-y-4  ">
          <h1 className="text-2xl font-bold lg:text-3xl xl:text-3xl 2xl:text-4xl ">
            {t("title")}
          </h1>
          <h2 className="text-base lg:text-lg xl:text-lg 2xl:text-xl mx-4">
            {t("subtitle")}
          </h2>
        </div>
      </div>
      <Pricing />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Package;
