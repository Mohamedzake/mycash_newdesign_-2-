"use client";
import React from "react";
import OurVisionIntro from "../../../components/OurVisionIntro";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import OurVisionBody from "../../../components/OurVisionBody";

const page = () => {
  return (
    <section>
      <OurVisionIntro />
      <OurVisionBody />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default page;
