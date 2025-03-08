// "use client";
// import React from "react";
// import { useParams } from "next/navigation";

// import { articles } from "../articles";
// import Image from "next/image";
// import { GoDotFill } from "react-icons/go";
// import { useLocale, useTranslations } from "next-intl";
// import Header from "@/src/components/Header";
// import WhatsApp from "@/src/components/WhatsApp";
// import Footer from "@/src/components/Footer";
// import Link from "next/link";
// const ArticleDetails = () => {
//   const locale = useLocale();
//   const { articleid } = useParams();
//   const t = useTranslations("Articles");
//   const isArabic = locale === "ar";
//   const article = articles.find((a) => a.id === articleid);
//   console.log(article);
//   if (!article) {
//     return <div className="p-6 text-red-500">Article not found!</div>;
//   }

//   return (
//     <div>
//       <div className="bg-articles_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative  tex-">
//         <Header />
//         <WhatsApp />

//         <div className="flex flex-col justify-center items-center gap-10 w-full h-full text-center ">
//           <div className="text-2xl text-white flex flex-col gap-y-10  items-center">
//             <h1 className="text-2xl font-bold sm:text-2xl xl:text-4xl 2xl:text-5xl ">
//               {t("title")}
//             </h1>
//             <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-4 w-8/12 text-center">
//               {t("sub_title")}
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div key={article.id} className="w-11/12 m-auto m-y-4 *:!leading-[2.8]">
//         <div className="mt-8">
//           <Image
//             src={article.articleImg}
//             alt="Logo"
//             className="w-[30%] block m-auto border-4 border-gray-100 "
//             width={2000}
//             height={1000}
//           />
//         </div>
//         <div className="text-base md:text-lg lg:text-xl leading-10  font-normal ">
//           {isArabic === true ? article.introAr : article.introEn}
//         </div>
//         <div className="text-base md:text-lg lg:text-xl leading-10 font-normal text-primary-green underline">
//           {isArabic === true ? article.headAr : article.headEn}
//         </div>
//         <div className="text-base md:text-lg lg:text-xl leading-10 flex flex-row items-center gap-2">
//           <GoDotFill />
//           {isArabic === true ? article.point1Ar : article.point1En}
//         </div>

//         <div className="text-base md:text-lg lg:text-xl leading-10  flex flex-row items-center gap-2">
//           <GoDotFill />
//           {isArabic === true ? article.point2Ar : article.point2En}
//         </div>
//         <div className="text-base md:text-lg lg:text-xl leading-10  flex flex-row items-center gap-2">
//           <GoDotFill />
//           {isArabic === true ? article.point3Ar : article.point3En}
//         </div>
//         <div className="text-base md:text-lg lg:text-xl leading-10 font-normal flex flex-row items-center gap-2">
//           {isArabic === true ? article.conclusionAr : article.conclusionEn}
//         </div>
//       </div>

//       <div className="flex justify-center items-center">
//         <button className="flex justify-center items-center">
//           <Link
//             href={`/${locale}/articles`}
//             className="text-white bg-primary-green hover:bg-primary-green-dark flex justify-center items-center p-5 rounded-xl"
//           >
//             Back to Articles
//           </Link>
//         </button>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ArticleDetails;
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
  const articleIndex = articles.findIndex((a) => a.id === articleid);
  const article = articles[articleIndex];

  if (!article) {
    return <div className="p-6 text-red-500">Article not found!</div>;
  }

  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  return (
    <div>
      <div className="bg-articles_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative">
        <Header />
        <WhatsApp />
        <div className="flex flex-col justify-center items-center gap-10 w-full h-full text-center ">
          <div className="text-2xl text-white flex flex-col gap-y-10 items-center">
            <h1 className="text-2xl font-bold sm:text-2xl xl:text-4xl 2xl:text-5xl">
              {t("title")}
            </h1>
            <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-4 w-8/12 text-center">
              {t("sub_title")}
            </h2>
          </div>
        </div>
      </div>

      <div key={article.id} className="w-11/12 m-auto mt-8">
        <Image
          src={article.articleImg}
          alt="Article Image"
          className="w-[30%] block m-auto border-4 border-gray-100"
          width={2000}
          height={1000}
        />

        <div className="text-base md:text-lg lg:text-xl leading-10 font-normal">
          {isArabic ? article.introAr : article.introEn}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 font-normal text-primary-green underline">
          {isArabic ? article.headAr : article.headEn}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 flex flex-row items-center gap-2">
          <GoDotFill />
          {isArabic ? article.point1Ar : article.point1En}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 flex flex-row items-center gap-2">
          <GoDotFill />
          {isArabic ? article.point2Ar : article.point2En}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 flex flex-row items-center gap-2">
          <GoDotFill />
          {isArabic ? article.point3Ar : article.point3En}
        </div>
        <div className="text-base md:text-lg lg:text-xl leading-10 font-normal flex flex-row items-center gap-2">
          {isArabic ? article.conclusionAr : article.conclusionEn}
        </div>
      </div>

      <div className="flex justify-between items-center w-11/12 m-auto mt-12">
        {prevArticle && (
          <Link
            href={`/${locale}/articles/${prevArticle.id}`}
            className="relative group"
          >
            <button className="text-white bg-gray-700 hover:bg-gray-900 px-5 py-3 rounded-xl transition duration-300">
              ⬅ {isArabic ? "السابق" : "Previous"}
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
              {isArabic ? prevArticle.headAr : prevArticle.headEn}
            </span>
          </Link>
        )}

        <Link
          href={`/${locale}/articles`}
          className="text-white bg-primary-green hover:bg-primary-green-dark px-6 py-4 rounded-xl text-lg font-semibold transition duration-300"
        >
          {isArabic ? "عودة إلى المقالات" : "Back to Articles"}
        </Link>

        {nextArticle && (
          <Link
            href={`/${locale}/articles/${nextArticle.id}`}
            className="relative group"
          >
            <button className="text-white bg-gray-700 hover:bg-gray-900 px-5 py-3 rounded-xl transition duration-300">
              {isArabic ? "التالي" : "Next"} ➡
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
              {isArabic ? nextArticle.headAr : nextArticle.headEn}
            </span>
          </Link>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetails;
