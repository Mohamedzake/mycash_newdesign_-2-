"use client";
import Image from "next/image";
// import Header from "../_components/Header"

import sales_solutions_ar from "../../../../public/sales_solutions_ar.webp";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import WhatsApp from "../../../components/WhatsApp";
import { useTranslations } from "next-intl";
import FreeTrialButton from "../../../components/FreeTrialButton";
const Sales = () => {
  const t = useTranslations("solutionsales");
  const SalesRight = [
    { text: t("point1"), desc: t("desc1") },
    { text: t("point2"), desc: t("desc2") },
    { text: t("point3"), desc: t("desc3") },
    { text: t("point4"), desc: t("desc4") },
    { text: t("point5"), desc: t("desc5") },
    { text: t("point6"), desc: t("desc6") },
  ];

  return (
    <section>
      <div className="bg-payment_solutions bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh]">
        {/* <Header /> */}
        <WhatsApp />

        <div className="flex flex-col justify-around items-center w-full h-full text-center pt-14">
          <div className=" text-white flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold sm:text-2xl xl:text-4xl 2xl:text-5xl">
              {t("title")}
            </h1>
            <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-4">
              {t("sub_title")}
            </h2>
          </div>

          <FreeTrialButton />
        </div>
      </div>

      <div className="three pt-8">
        <Image
          className="block m-auto lg:w-6/12"
          src={sales_solutions_ar}
          alt="solutions img"
        />
      </div>

      <div className="container mx-auto">
        <div className="one grid grid-cols-12 rounded-3xl text-center ">
          {SalesRight.map((item, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4 border  shadow-[0_3px_20px_1px_rgba(0,0,0,0.10)] p-3 m-6 rounded-3xl *:!leading-[2.5] "
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-green ">
                {item.text}{" "}
              </h3>
              <h5 className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium  ">
                {item.desc}
              </h5>
            </div>
          ))}
        </div>
      </div>

      <ContactUs />
      <Footer />
    </section>
  );
};

export default Sales;
