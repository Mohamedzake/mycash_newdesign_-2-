"use client";
import React from "react";
import Header from "../../../components/Header";
import WhatsApp from "../../../components/WhatsApp";
import { useLocale, useTranslations } from "next-intl";
// import { articles } from "@/app/articles/articles";
// import Image from "next/image";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { articles1 } from "./articles";
import Image from "next/image";
const Articles = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("Articles");
  console.log(articles1);
  return (
    <section>
      <div className="bg-articles_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative  ">
        <Header />
        <WhatsApp />

        <div className="flex flex-col justify-center items-center gap-10 w-full h-full text-center ">
          <div className="text-2xl text-white flex flex-col gap-y-10  items-center">
            <h1 className="text-2xl font-bold sm:text-2xl xl:text-4xl 2xl:text-5xl ">
              {t("title")}
            </h1>
            <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-4 w-8/12 text-center">
              {t("sub_title")}
            </h2>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {articles1.map((article) => (
          <Link
            href={`/${locale}/articles/${article.id}`}
            className=""
            key={article.id}
          >
            <div className="p-4 text-center m-4 rounded-2xl shadow-[rgba(0,0,0,0.2)_0px_4px_12px] bg-white hover:shadow-md border duration-100 *:!leading-10">
              <h3 className="text-xl font-bold text-primary-blue ">
                {isArabic === true ? article.titleAr : article.titleEn}
              </h3>
              <p className="text-lg ">
                {isArabic === true
                  ? article.descriptionAr
                  : article.descriptionEn}
              </p>
              <Image
                src={article.imgSrc}
                alt="Logo"
                className="w-100% h-1/2 block m-auto  rounded-3xl border-4 "
                width={1000}
                height={1000}
              />
            </div>
          </Link>
        ))}
      </div>
      {/* <div className=" bottom-60 w-full m-auto ">
        <div className=" m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {articles1.map((article) => (
            <Link
              href={`/${locale}/articles/${article.id}`}
              key={article.id}
              className="w-10/12 p-4 text-center m-4 rounded-2xl shadow-[rgba(0,0,0,0.2)_0px_4px_12px] bg-white"
            >
            
              <h3 className="text-xl font-bold text-primary-blue">
                {article.titleAr}
              </h3>
              <p>{article.descriptionAr}</p>
            </Link>
          ))}
        </div>
      </div> */}
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Articles;
