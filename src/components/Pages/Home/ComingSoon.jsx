// ComingSoon.jsx
import React from "react";
import heroImage from "../../../assets/images/logo.png";

// Import all logos
import logo1 from "../../../assets/images/insurance_company_logos_01.png";
import logo2 from "../../../assets/images/insurance_company_logos_02.png";
import logo3 from "../../../assets/images/insurance_company_logos_03.png";
import logo4 from "../../../assets/images/insurance_company_logos_04.png";
import logo5 from "../../../assets/images/insurance_company_logos_05.png";
import logo6 from "../../../assets/images/insurance_company_logos_06.png";
import logo7 from "../../../assets/images/insurance_company_logos_07.png";
import logo8 from "../../../assets/images/insurance_company_logos_08.png";
import logo9 from "../../../assets/images/insurance_company_logos_09.png";
import logo10 from "../../../assets/images/insurance_company_logos_10.png";
import logo11 from "../../../assets/images/insurance_company_logos_11.png";
import logo12 from "../../../assets/images/insurance_company_logos_12.png";
import logo13 from "../../../assets/images/insurance_company_logos_13.png";
import logo14 from "../../../assets/images/insurance_company_logos_14.png";
import logo15 from "../../../assets/images/insurance_company_logos_15.png";
import logo16 from "../../../assets/images/insurance_company_logos_16.png";
import logo17 from "../../../assets/images/insurance_company_logos_17.png";
import logo18 from "../../../assets/images/insurance_company_logos_18.png";
import logo19 from "../../../assets/images/insurance_company_logos_19.png";
import logo20 from "../../../assets/images/insurance_company_logos_20.png";
import logo21 from "../../../assets/images/insurance_company_logos_21.png";
import logo22 from "../../../assets/images/insurance_company_logos_22.png";
import logo23 from "../../../assets/images/insurance_company_logos_23.png";
import logo24 from "../../../assets/images/insurance_company_logos_24.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
];

// Generate random positions, rotation, and size for logos
const randomStyles = () => ({
  top: `${Math.random() * 90}vh`,
  left: `${Math.random() * 90}vw`,
  transform: `rotate(${Math.random() * 360}deg)`,
  width: `${50 + Math.random() * 80}px`,
  opacity: 0.1 + Math.random() * 0.4,
  position: "absolute",
});

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tr from-indigo-50 via-blue-50 to-white text-gray-800">
      {/* Floating logos */}
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Partner ${index + 1}`}
          style={randomStyles()}
          className="transition-transform duration-1000 hover:scale-110 hover:opacity-40"
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 md:px-20">
        <img
          src={heroImage}
          alt="Insurance Hero"
          className="mx-auto mb-8 w-36 md:w-48 shadow-xl"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-indigo-700">
          Coming Soon
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-700">
          We’re building a next-gen insurance platform connecting top agencies.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
