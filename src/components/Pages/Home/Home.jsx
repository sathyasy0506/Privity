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

const Home = () => {
  return (
    <main className="relative font-montserrat">
      {/* Top sections */}
      <div className="overflow-x-hidden">
        <InsuranceHero />
        <StatsSection />
        <WhatWeOffer />
        <InsurancePartners />
      </div>

      {/* Features + How It Works */}
      <div className="relative z-20">
        <FeaturesAndHowItWorks />
      </div>

      {/* Bottom sections */}
      <div className="relative z-10">
        <AboutPrivity />
        <Achievement />
        <TestimonialCarousel />
        <WhyChooseUs />
        <InsuranceQuote />
        <TeamSection />
        <FAQSection />
      </div>
    </main>
  );
};

export default Home;
