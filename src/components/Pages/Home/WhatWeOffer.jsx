// WhatWeOffer.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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

// Images
import lifeImage from "../../../assets/images/life.png";
import healthImage from "../../../assets/images/health.png";
import motorImage from "../../../assets/images/motor.jpg";
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
      "Secure your family’s future with life cover designed to provide long-term financial protection and peace of mind.",
    img: lifeImage,
    icon: life,
    iconHover: lifeR,
  },
  {
    id: 2,
    title: "Health Insurance",
    description:
      "Medical coverage for individuals and families that helps manage healthcare costs and protects you from unexpected expenses.",
    img: healthImage,
    icon: health,
    iconHover: healthR,
  },
  {
    id: 3,
    title: "Motor Insurance",
    description:
      "Reliable coverage for your vehicles against accidents, theft, and damage, so you can drive with confidence.",
    img: motorImage,
    icon: car,
    iconHover: carR,
  },
  {
    id: 4,
    title: "Travel Insurance",
    description:
      "Stay protected wherever you travel, with coverage for medical emergencies, trip disruptions, and loss of belongings.",
    img: travelImage,
    icon: travel,
    iconHover: travelR,
  },
  {
    id: 5,
    title: "Fire Insurance",
    description:
      "Protect your property and assets from fire-related risks, ensuring financial stability and faster recovery.",
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
      "Protection against legal and financial obligations arising from accidents, property damage, or professional liabilities.",
    img: liabilityImage,
    icon: business,
    iconHover: businessR,
  },
  {
    id: 8,
    title: "Corporate / Group Insurance",
    description:
      "Customized insurance solutions for businesses, offering comprehensive coverage for employees, assets, and operational risks through structured group plans.",
    img: corporateImage,
    icon: gadget,
    iconHover: gadgetR,
  },
];

const WhatWeOffer = ({ onOpenEstimate }) => {
  const navigate = useNavigate();

  const [activeCard, setActiveCard] = useState(cardsData[0].id);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const intervalRef = useRef(null);

  /* Auto rotation */
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setActiveCard((prev) => {
        const index = cardsData.findIndex((c) => c.id === prev);
        return cardsData[(index + 1) % cardsData.length].id;
      });
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const displayedCards = showAll ? cardsData : cardsData.slice(0, 6);

  const handleGetStarted = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      onOpenEstimate?.();
    } else {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div id="what-we-offer" className="min-h-screen px-6">
      <div className="max-w-[1320px] mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedCards.map((card) => {
            const isActive = hoveredCard === card.id || activeCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => {
                  stopAutoPlay();
                  setHoveredCard(card.id);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  startAutoPlay();
                }}
                className={`relative rounded-3xl p-8 pt-14 overflow-hidden transition-all duration-500 shadow-lg cursor-pointer ${
                  isActive
                    ? "bg-gray-800 text-white shadow-xl"
                    : "bg-white text-gray-900"
                }`}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive ? "opacity-70 scale-100" : "opacity-0 scale-110"
                  }`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* ICON with BG */}
                  <div
                    className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-white" : "bg-[var(--color-primary)]"
                    }`}
                  >
                    <img
                      src={isActive ? card.iconHover : card.icon}
                      alt={card.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-medium mb-4">{card.title}</h3>

                  <p
                    className={`mb-6 transition-colors ${
                      isActive ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {card.description}
                  </p>

                  <button
                    onClick={handleGetStarted}
                    className="font-medium underline underline-offset-8"
                  >
                    Get started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2 bg-[var(--color-primary)] text-white rounded-full"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
