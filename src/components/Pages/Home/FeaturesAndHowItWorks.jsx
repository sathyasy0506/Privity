import React, { useState } from "react";

import premium from "../../../assets/icons/premium.png";
import documentation from "../../../assets/icons/documentation.png";
import support from "../../../assets/icons/support.png";
import assistance from "../../../assets/icons/assistance.png";

const features = [
  {
    title: "Competitive premium pricing",
    description: "and set powerful intentions for your personal development.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: premium,
  },
  {
    title: "Seamless documentation",
    description: "and set powerful intentions for your personal development.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: documentation,
  },
  {
    title: "End-to-end claims support",
    description: "and set powerful intentions for your personal development.",
    image:
      "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: support,
  },
  {
    title: "Personalized assistance",
    description: "and set powerful intentions for your personal development.",
    image:
      "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: assistance,
  },
];

const FeatureCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-3xl border border-[#CD2200] p-8 flex flex-col justify-center transition-transform duration-300 hover:scale-105 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red-600">
        <img
          src={icon}
          alt="icon"
          className={`w-8 h-8 object-contain transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Text */}
      <h3 className="text-xl font-semibold text-[#CD2200] mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesAndHowItWorks = () => {
  return (
    <div className="font-montserrat">
      {/* Features Section */}
      <section className="sticky top-0 w-full h-screen max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
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
            className="rounded-3xl object-cover w-full h-full"
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
      <section className="w-full z-10 bg-[#E2D0CC] py-40 px-6 md:px-16 lg:px-24 text-center relative overflow-hidden rounded-t-3xl">
        {/* Section Tag */}
        <div className="inline-block bg-white text-[#b43b27] text-xs font-semibold px-4 py-1 rounded-full mb-4">
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
            <h3 className="text-[60px] font-medium text-[#b43b27] mb-4">1</h3>
            <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
              Choose Desired Services
            </h4>
            <p className="text-gray-500 leading-relaxed text-[16px] md:text-base">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. No pressure - just
              a conversation.
            </p>

            {/* Arrow */}
            <div className="hidden z-10 md:block absolute top-1/4 -right-14 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 50"
                className="w-20 h-8 text-[#b43b27]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M0 25 C30 10, 70 10, 100 25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M90 15 L100 25 L90 35"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1">
            <h3 className="text-[60px] font-medium text-[#b43b27] mb-4">2</h3>
            <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
              Choose Your Plan
            </h4>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. No pressure - just
              a conversation.
            </p>

            {/* Arrow */}
            <div className="hidden md:block absolute top-1/4 -right-14 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 50"
                className="w-20 h-8 text-[#b43b27]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M0 25 C30 10, 70 10, 100 25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M90 15 L100 25 L90 35"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1">
            <h3 className="text-[60px] font-medium text-[#b43b27] mb-4">3</h3>
            <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
              Enjoy Secure Life
            </h4>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. No pressure - just
              a conversation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAndHowItWorks;
