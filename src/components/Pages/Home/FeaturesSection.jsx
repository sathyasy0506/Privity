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

const FeaturesSection = () => {
  return (
    <section className="sticky top-0 w-full h-screen max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6 font-montserrat z-10">
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
  );
};

export default FeaturesSection;
