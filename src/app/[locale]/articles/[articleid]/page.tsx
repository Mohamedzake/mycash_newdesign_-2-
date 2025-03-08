"use client";
import React from "react";
import { useParams } from "next/navigation";

import { articles } from "../articles";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/src/components/Header";
import WhatsApp from "@/src/components/WhatsApp";
import Footer from "@/src/components/Footer";
import Link from "next/link";
const ArticleDetails = () => {
  const locale = useLocale();
  const { articleid } = useParams();
  const t = useTranslations("Articles");
  const isArabic = locale === "ar";
  const article = articles.find((a) => a.id === articleid);
  console.log(article);
  if (!article) {
    return <div className="p-6 text-red-500">Article not found!</div>;
  }

  return (
    <div>
      <div className="bg-articles_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative  tex-">
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
      <div key={article.id} className="w-11/12 m-auto m-y-4 *:!leading-[2.8]">
        <div className="mt-8">
          <Image
            src={article.articleImg}
            alt="Logo"
            className="w-[30%] block m-auto border-4 border-gray-100 "
            width={2000}
            height={1000}
          />
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10  font-normal ">
          {isArabic === true ? article.introAr : article.introEn}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 font-normal text-primary-green underline">
          {isArabic === true ? article.headAr : article.headEn}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 flex flex-row items-center gap-2">
          <GoDotFill />
          {isArabic === true ? article.point1Ar : article.point1En}
        </div>

        <div className="text-base md:text-lg lg:text-xl leading-10  flex flex-row items-center gap-2">
          <GoDotFill />
          {isArabic === true ? article.point2Ar : article.point2En}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10  flex flex-row items-center gap-2">
          <GoDotFill />
          {isArabic === true ? article.point3Ar : article.point3En}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 font-normal flex flex-row items-center gap-2">
          {isArabic === true ? article.conclusionAr : article.conclusionEn}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center">
          <Link
            href={`/${locale}/articles`}
            className="text-white bg-primary-green hover:bg-primary-green-dark flex justify-center items-center p-5 rounded-xl"
          >
            Back to Articles
          </Link>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetails;
