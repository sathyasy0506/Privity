import React from "react";
import InsuranceHero from "./InsuranceHero";
import WhatWeOffer from "./WhatWeOffer";
import TestimonialCarousel from "./Testimonial";
import TeamSection from "./TeamSection";
import Achievement from "./Achievement";
import AboutPrivity from "./AboutPrivity";
import StatsSection from "./StatsSection";
import InsurancePartners from "./InsurancePartners";
import FAQSection from "./FAQSection";
import InsuranceQuote from "./InsuranceQuote";
import WhyChooseUs from "./WhyChooseUs";
import FeaturesAndHowItWorks from "./FeaturesAndHowItWorks";
import FeaturesAndHowItWorksMobile from "./FeaturesAndHowItWorksMobile";
import TestimonialsAndWhyChooseUs from "./TestimonialsAndWhyChooseUs";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonial";
import HowItWorksSection from "./HowItWorks";
import FeaturesSection from "./FeaturesSection";
import TestimonialsAndWhyChooseUsw from "./TestimonialsAndWhyChooseUsw";

const Home = () => {
  return (
    <main className="relative font-montserrat">
      {/* Top sections */}
      <div className="overflow-x-hidden">
        <HeroSection />
        {/* <InsuranceHero /> */}
        <StatsSection />
        <WhatWeOffer />
        <InsurancePartners />
      </div>

      {/* Features + How It Works */}
      <div className="relative z-20 hidden md:block">
        <FeaturesAndHowItWorks />
      </div>

      <div className="block md:hidden">
        {/* <FeaturesSection />
        <HowItWorksSection /> */}

        <FeaturesAndHowItWorksMobile />
      </div>

      <div className="relative z-10 flex flex-col">
        <AboutPrivity />
        <Achievement />
        {/* Web version */}{" "}
        {/* <div className="block md:hidden">
          <TestimonialsAndWhyChooseUs />
        </div> */}
        {/* Mobile version */}
        <div className="">
          <TestimonialsAndWhyChooseUsw />
        </div>
        <InsuranceQuote />
        {/* TEAM (should be below FAQ only on mobile) */}
        <div className="order-1 md:order-1">
          <TeamSection />
        </div>
        {/* FAQ */}
        <div className="order-2 md:order-2">
          <FAQSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
