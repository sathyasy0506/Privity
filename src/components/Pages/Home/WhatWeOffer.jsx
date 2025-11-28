import { useState } from "react";

// Icons
import health from "../../../assets/icons/health.png";
import healthR from "../../../assets/icons/health_r.png";
import life from "../../../assets/icons/life.png";
import lifeR from "../../../assets/icons/life_r.png";
import travel from "../../../assets/icons/travel.png";
import travelR from "../../../assets/icons/travel_r.png";
import car from "../../../assets/icons/car.png";
import carR from "../../../assets/icons/car_r.png";
import home from "../../../assets/icons/home.png";
import homeR from "../../../assets/icons/home_r.png";
import pet from "../../../assets/icons/pet.png";
import petR from "../../../assets/icons/pet_r.png";
import business from "../../../assets/icons/business.png";
import businessR from "../../../assets/icons/business_r.png";
import gadget from "../../../assets/icons/gadget.png";
import gadgetR from "../../../assets/icons/gadget_r.png";

import lifeImage from "../../../assets/images/life.png";
import healthImage from "../../../assets/images/health.png";
import motorImage from "../../../assets/images/motor.png";
import travelImage from "../../../assets/images/travel.png";
import fireImage from "../../../assets/images/fire.png";
import marineImage from "../../../assets/images/marine.png";
import liabilityImage from "../../../assets/images/liability.png";
import corporateImage from "../../../assets/images/corp.png";

const cardsData = [
  {
    id: 1,
    title: "Life Insurance",
    description:
      "Protect your loved ones’ future with tailored life coverage that ensures financial security and peace of mind.",
    img: lifeImage,
    icon: life,
    iconHover: lifeR,
  },
  {
    id: 2,
    title: "Health Insurance",
    description:
      "Comprehensive medical coverage for individuals and families, keeping you financially secure against unexpected health expenses.",
    img: healthImage,
    icon: health,
    iconHover: healthR,
  },
  {
    id: 3,
    title: "Motor Insurance",
    description:
      "Complete protection for your vehicles against accidents, theft, and damages, ensuring worry-free driving.",
    img: motorImage,
    icon: car,
    iconHover: carR,
  },
  {
    id: 4,
    title: "Travel Insurance",
    description:
      "Travel with confidence — coverage for medical emergencies, trip cancellations, and lost belongings, wherever you go.",
    img: travelImage,
    icon: travel,
    iconHover: travelR,
  },
  {
    id: 5,
    title: "Fire Insurance",
    description:
      "Safeguard your property and assets from fire-related risks, minimizing losses and ensuring quick recovery.",
    img: fireImage,
    icon: home,
    iconHover: homeR,
  },
  {
    id: 6,
    title: "Marine Insurance",
    description:
      "Protection for cargo, ships, and goods in transit, providing security against loss or damage during transport.",
    img: marineImage,
    icon: pet,
    iconHover: petR,
  },
  {
    id: 7,
    title: "Liability Insurance",
    description:
      "Coverage against legal and financial responsibilities arising from accidents, damages, or professional errors.",
    img: liabilityImage,
    icon: business,
    iconHover: businessR,
  },
  {
    id: 8,
    title: "Corporate / Group Insurance",
    description:
      "Tailored insurance solutions for businesses, covering employees, assets, and operations with comprehensive group plans.",
    img: corporateImage,
    icon: gadget,
    iconHover: gadgetR,
  },
];

const WhatWeOffer = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCards = showAll ? cardsData : cardsData.slice(0, 6);

  return (
    <div id="what-we-offer" className="min-h-screen px-6">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[var(--color-primary)]"></div>
            <h3
              className="text-[var(--color-primary)] text-lg font-montserrat"
              style={{ fontWeight: 400 }}
            >
              What we offer
            </h3>
          </div>

          <h1 className="font-montserrat mb-6 text-[#302D2D] text-3xl sm:text-[34px] md:text-5xl font-medium leading-tight">
            Your One-Stop Insurance
            <span className="text-gray-400"> Solution</span>
          </h1>

          <p
            className="font-montserrat text-[#838181] max-w-2xl mx-auto"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}
          >
            We provide single-window access to a comprehensive range of
            insurance products, ensuring:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedCards.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-3xl p-8 overflow-hidden shadow-lg transition-all duration-300 cursor-pointer pt-14 ${
                  isHovered
                    ? "bg-gray-800 text-white shadow-xl"
                    : "bg-white text-gray-900"
                }`}
              >
                {/* Background Image Overlay */}
                <div
                  className={`absolute inset-0 transform transition-all duration-500 ${
                    isHovered ? "scale-100 opacity-70" : "scale-110 opacity-0"
                  }`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-start">
                  {/* ICON + TITLE in same row only on mobile */}
                  <div className="flex items-center gap-4 md:block">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-0 md:mb-6 transition-all duration-300 ${
                        isHovered ? "bg-white" : "bg-[var(--color-primary)]"
                      }`}
                    >
                      <img
                        src={isHovered ? card.iconHover : card.icon}
                        alt={card.title}
                        className="w-8 h-8 object-contain transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`transition-colors duration-300 font-montserrat text-[20px] font-medium leading-[22px] ${
                        isHovered ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`mt-4 mb-6 transition-colors duration-300 font-montserrat text-[16px] font-normal leading-[25.6px] ${
                      isHovered ? "text-[#E3E3E3]" : "text-[#838181]"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* Button */}
                  <button className="relative font-semibold pb-1 overflow-hidden group">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white font-montserrat text-[16px] font-medium leading-[20.32px]">
                      Get started
                    </span>
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-200"></span>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Show Less */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2 bg-[var(--color-primary)] hover:bg-red-700 text-white text-lg font-normal rounded-full transition-colors font-poppins"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
