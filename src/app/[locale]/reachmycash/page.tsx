import React from "react";

import WhyMyCash from "../../../components/WhyMyCash";
import LandingForm from "../../../components/LandingForm";
import WhyChooseMyCash from "../../../components/WhyChooseMyCash";
import CompanyLogos from "../../../components/CompanyLogos";
import CompanyLogos2 from "../../../components/CompanyLogos2";
import CompanyLogos3 from "../../../components/CompanyLogos3";
import WhatsApp from "../../../components/WhatsApp";

const LandingPage = () => {
  return (
    <section className=" ">
      <WhatsApp />
      <LandingForm />
      <WhyMyCash />
      <WhyChooseMyCash />
      <div className=" flex justify-center items-center flex-col ">
        <CompanyLogos />
        <CompanyLogos2 />
        <CompanyLogos3 />
      </div>
    </section>
  );
};

export default LandingPage;
