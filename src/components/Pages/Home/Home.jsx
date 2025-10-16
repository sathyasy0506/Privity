import React from "react";
import InsuranceHero from "./InsuranceHero";
import WhatWeOffer from "./WhatWeOffer";
import TestimonialCarousel from "./Testimonial";
import TeamSection from "./TeamSection";
import Achievement from "./Achievement";
import FeaturesSection from "./FeaturesSection";
import AboutPrivity from "./AboutPrivity";
import StatsSection from "./StatsSection";
import InsurancePartners from "./InsurancePartners";
import HowItWorks from "./HowItWorks";
import FAQSection from "./FAQSection";
import InsuranceQuote from "./InsuranceQuote";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <InsuranceHero />
      <StatsSection />
      <WhatWeOffer />
      <InsurancePartners />
      <FeaturesSection />
      <HowItWorks />
      <AboutPrivity />
      <Achievement />
      <TestimonialCarousel />
      <WhyChooseUs />
      <InsuranceQuote />
      <TeamSection />
      <FAQSection />
    </main>
  );
};

export default Home;
