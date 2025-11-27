import React, { useState } from "react";

import premium from "../../../assets/icons/premium.png";
import documentation from "../../../assets/icons/documentation.png";
import support from "../../../assets/icons/support.png";
import assistance from "../../../assets/icons/assistance.png";

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

export const FeatureCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-3xl border border-[#DBAFA6] p-6 flex items-center gap-4 transition-transform duration-300 hover:scale-105 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon on the LEFT */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--color-primary)] flex-shrink-0">
        <img
          src={icon}
          alt="icon"
          className={`w-7 h-7 object-contain transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Text on the RIGHT */}
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-[#CD2200] mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-6 ">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Pair 1 */}
        <div className="flex flex-col gap-2">
                    <FeatureCard {...features[0]} />

          <img
            src={features[0].image}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>

        {/* Pair 2 */}
        <div className="flex flex-col gap-2">
          <FeatureCard {...features[1]} />
          <img
            src={features[1].image}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>

        {/* Pair 3 */}
        <div className="flex flex-col gap-2">
          <FeatureCard {...features[2]} />
          <img
            src={features[2].image}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>

        {/* Pair 4 */}
        <div className="flex flex-col gap-2">
          <FeatureCard {...features[3]} />
          <img
            src={features[3].image}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
