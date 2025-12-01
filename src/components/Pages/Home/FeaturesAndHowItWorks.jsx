import React, { useState } from "react";

import premium from "../../../assets/icons/premium.png";
import documentation from "../../../assets/icons/documentation.png";
import support from "../../../assets/icons/support.png";
import assistance from "../../../assets/icons/assistance.png";
import Arrow from "../../../assets/images/Arrow.svg"; // Imported arrow SVG

import premiumImage from "../../../assets/images/premium.png";
import documentationImage from "../../../assets/images/documentation.png";
import supportImage from "../../../assets/images/end_to_end.png";
import assistanceImage from "../../../assets/images/personalized_assistance.png";

const features = [
  {
    title: "Competitive premium pricing",
    description: "and set powerful intentions for your personal development.",
    image: premiumImage,
    icon: premium,
  },
  {
    title: "Seamless documentation",
    description: "and set powerful intentions for your personal development.",
    image: documentationImage,
    icon: documentation,
  },
  {
    title: "End-to-end claims support",
    description: "and set powerful intentions for your personal development.",
    image: supportImage,
    icon: support,
  },
  {
    title: "Personalized assistance",
    description: "and set powerful intentions for your personal development.",
    image: assistanceImage,
    icon: assistance,
  },
];

const FeatureCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-3xl border border-[#DBAFA6] p-8 flex flex-col justify-center transition-transform duration-300 hover:scale-105 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[var(--color-primary)]">
        <img
          src={icon}
          alt="icon"
          className={`w-8 h-8 object-contain transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Text */}
      <h3 className="text-xl font-semibold text-[--color-primary] mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesAndHowItWorks = () => {
  return (
    <div className="font-montserrat">
      {/* Features Section */}
      <section className="sticky top-0 w-full h-screen max-w-[1320px] mx-auto px-6   -mt-8 py-10  grid grid-cols-1 md:grid-cols-3 gap-2 z-10">
        {/* Row 1 */}
        <div className="flex flex-col gap-6 md:col-span-3 md:grid md:grid-cols-4">
          <FeatureCard
            title={features[0].title}
            description={features[0].description}
            icon={features[0].icon}
          />
          <img
            src={features[0].image}
            alt="Feature"
            className="rounded-3xl object-cover w-full h-full"
          />
          <FeatureCard
            title={features[1].title}
            description={features[1].description}
            icon={features[1].icon}
          />
          <img
            src={features[1].image}
            alt="Feature"
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-6 md:col-span-3 md:grid md:grid-cols-4 mt-6">
          <img
            src={features[2].image}
            alt="Feature"
            className="rounded-3xl object-cover w-full h-full "
          />
          <FeatureCard
            title={features[2].title}
            description={features[2].description}
            icon={features[2].icon}
          />
          <img
            src={features[3].image}
            alt="Feature"
            className="rounded-3xl object-cover w-full h-full"
          />
          <FeatureCard
            title={features[3].title}
            description={features[3].description}
            icon={features[3].icon}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full z-10 bg-[#E2D0CC] py-32 px-6 md:px-16 lg:px-24 text-center relative overflow-hidden rounded-t-3xl">
        {/* Section Tag */}
        <div className="inline-block bg-white text-[var(--color-primary)] text-xs font-semibold px-4 py-1 rounded-full mb-4">
          HOW IT WORKS
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-16">
          Simple, Convenient, Effective
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-4 flex-1">
            <h3 className="text-[50px] font-medium text-[var(--color-primary)] mb-4">
              1
            </h3>
            <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
              Choose Your Service
            </h4>
            <p className="text-gray-500 leading-relaxed text-[16px] md:text-base">
              Select the insurance type that fits your needs — life, health,
              motor, travel, or business coverage.
            </p>

            {/* Arrow */}
            <div className="hidden md:block absolute top-1/3 -right-20 transform -translate-y-2/3 w-32 h-16 rotate-12 z-50 rotate-45">
              <img
                src={Arrow}
                alt="Arrow"
                className="w-full h-full object-contain "
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1">
            <h3 className="text-[60px] font-medium text-[var(--color-primary)] mb-4">
              2
            </h3>
            <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
              Pick Your Plan
            </h4>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Compare options and choose a plan tailored to your budget and
              goals, with clear terms and no hidden costs.
            </p>

            {/* Arrow */}
            <div className="hidden md:block absolute top-1/3 -right-20 transform -translate-y-2/3 w-32 h-16 z-50 rotate-45">
              <img
                src={Arrow}
                alt="Arrow"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1 relative">
            <h3 className="text-[60px] font-medium text-[var(--color-primary)] mb-4">
              3
            </h3>
            <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
              Enjoy a Secured Life
            </h4>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Relax with complete peace of mind, knowing you and your loved ones
              are protected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAndHowItWorks;
