import React, { useState } from "react";

const FeatureCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-3xl border border-[#DBAFA6] p-6 flex items-center gap-4 transition-transform duration-300 hover:scale-105 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--color-primary)] flex-shrink-0">
        <img
          src={icon}
          alt="icon"
          className={`w-7 h-7 object-contain transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-[#CD2200] mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
