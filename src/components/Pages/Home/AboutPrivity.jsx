import React, { useState, useEffect } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ChevronLeft, ChevronRight } from "lucide-react";

import network from "../../../assets/icons/network.png";
import endtoend from "../../../assets/icons/endtoend.png";
import hidden from "../../../assets/icons/hidden.png";
import loyal from "../../../assets/icons/loyal.png";

import about from "../../../assets/images/about.png";

// Smooth Counter component with fixed width
const Counter = ({ target, duration, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = (duration / Math.max(end, 1)) * 1000; // milliseconds per increment

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(interval);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <span
      className={className}
      style={{ display: "inline-block", width: "110px", textAlign: "right" }}
    >
      {count}+
    </span>
  );
};

/**
 * Updated InfoCards:
 * - Desktop / md+: shows the 4-card grid (original look)
 * - Mobile (<=767px): shows a single main card with prev/next arrows
 *   - icon above the title (centered)
 *   - consistent min-height so cards remain the same height
 */
const InfoCards = () => {
  const cards = [
    {
      icon: network,
      title: "A strong network of 300+ Point of Sales (POS) agent",
      description:
        "Protect your biggest investment with our reliable, comprehensive, and trusted home insurance policies.",
    },
    {
      icon: endtoend,
      title: "Seamless end-to-end claims support",
      description: "Get your designs done quickly without delays in 24 hours",
    },
    {
      icon: hidden,
      title:
        "Operate solely on statutory brokerage — absolutely no hidden charges",
      description: "Get your designs done quickly without delays in 24 hours",
    },
    {
      icon: loyal,
      title: "Thousands of happy and loyal clients across the state",
      description: "Get your designs done quickly without delays in 24 hours",
    },
  ];

  // index of card currently shown on mobile
  const [current, setCurrent] = useState(0);

  // isMobile state using matchMedia
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 767 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener
      ? mq.addEventListener("change", handler)
      : mq.addListener(handler);
    setIsMobile(mq.matches);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", handler)
        : mq.removeListener(handler);
    };
  }, []);

  const prev = () => {
    setCurrent((c) => (c === 0 ? cards.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === cards.length - 1 ? 0 : c + 1));
  };

  // MOBILE LAYOUT
  if (isMobile) {
    const main = cards[current];

    return (
      <div className="w-full max-w-[1320px] mx-auto py-6 px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Main Card */}
          <div className="rounded-[24px] p-6 w-full bg-white border border-red-200 shadow-sm">
            <div className="flex flex-col items-center gap-4 min-h-[200px] justify-center">
              {/* Icon (above title) */}
              <div className="w-14 h-14 rounded-full bg-[#ea1f04] flex items-center justify-center">
                <img
                  src={main.icon}
                  alt={main.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#E33E1F] font-[600] text-[16px] leading-[22px] text-center">
                {main.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-[15px] font-[400] leading-[24px] px-1 text-center">
                {main.description}
              </p>
            </div>
          </div>

          {/* Buttons + indicators below the card, centered */}
          <div className="w-full flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous card"
                className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>

              <button
                onClick={next}
                aria-label="Next card"
                className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-1">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to card ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "scale-110 bg-[#ea1f04]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DESKTOP / TABLET LAYOUT: original grid (4 cards)
  return (
    <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 bg-white font-montserrat">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-start border border-red-200 rounded-[24px] p-6 w-full transition-all"
        >
          {/* Icon on Top - Centered */}
          <div className="mb-4 flex items-start">
            <div className="w-12 h-12 rounded-full bg-[#ea1f04] flex items-center justify-center">
              <img
                src={card.icon}
                alt={card.title}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[#E33E1F] font-[600] text-[16px] leading-[28.8px] mb-2">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-[15px] font-[400] leading-[24px] text-justify">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const AboutPrivity = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 px-2 md:px-20 lg:px-28 font-montserrat"
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Second (duplicated) Right Image + Badge — MOBILE ONLY */}
        <div className="lg:col-span-5 relative flex lg:hidden justify-center lg:justify-end">
          <div className="relative flex items-center justify-center w-full">
            {/* Image container keeps overflow-hidden to preserve rounded corners */}
            <div
              className="relative w-full h-[350px] rounded-[35px] bg-cover bg-center overflow-hidden -mt-12"
              style={{
                backgroundImage: `url(${about})`,
              }}
            ></div>

            {/* Badge OUTSIDE image */}
            <div
              className="absolute -bottom-4  flex flex-col gap-6 right-1 z-50 bg-[#FEFFFF] shadow-md rounded-[30px]
                px-4 py-6 w-42
                min-h-[170px]   /* mobile: taller */
                lg:min-h-[auto] "
            >
              <p className="text-gray-900 text-[16px] font-[400] leading-5 mb-2">
                Certified Batch
              </p>
              <p className="text-[var(--color-primary)] text-[24px] font-[600] leading-5">
                Privity
              </p>
              <p className="text-gray-800 text-[16px] font-[500] leading-6 mt-1">
                Certified
                <br />
                Professional 2025
              </p>
            </div>
          </div>
        </div>
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h2 className="md:text-[54px] text-[32px] font-[500] text-gray-900">
            About Privity
          </h2>
          <h3 className="md:text-[54px] text-[32px] font-[500] text-[#BFC0BF]">
            Insurance Brokers
          </h3>

          <hr className="my-8 border-gray-200" />

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="hidden md:flex flex-col items-start gap-3">
              {/* Counter with fixed width */}
              <Counter
                target={12}
                duration={2}
                className="text-[var(--color-primary)] font-bold text-[110px] leading-[100px]"
              />

              <div>
                <p className="text-[25px] font-[600] text-gray-900">
                  Years <br /> experience.
                </p>
              </div>
            </div>

            <div className="lg:hidden flex flex-row lg:flex-col items-start gap-3 w-full">
              <Counter
                target={12}
                duration={2}
                className="
    text-[var(--color-primary)] font-bold
    text-[60px] leading-[60px]     /* Mobile size */
    md:text-[90px] md:leading-[80px]
    lg:text-[110px] lg:leading-[100px]  /* Desktop size */
  "
              />

              <div>
                <p className="text-[25px] font-[600] text-gray-900 leading-[28px]">
                  Years <br /> experience.
                </p>
              </div>
            </div>

            <div className="flex-1 px-4">
              <p className="text-[14px] font-[500] text-gray-800 mb-4">
                Your Trusted Insurance Partner.
              </p>

              <p className="text-gray-500 text-[15px] font-[400] leading-relaxed mb-4 text-justify">
                Privity Insurance Brokers, based in Kochi, Kerala, is a licensed
                and IRDAI approved direct insurance broker offering a complete
                spectrum of insurance services. Integrity Our team comprises
                experienced and qualified insurance professionals committed to
                safeguarding your interests from policy acquisition to post sale
                support and claims management. <br />
                We are more than brokers, we are your insurance advocates,
                ensuring you receive the most competitive rates, appropriate
                coverage, and seamless service.
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />
        </div>

        {/* Right Image + Badge (DESKTOP ONLY) */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center w-[95%]">
            <div
              className="relative w-full h-[560px] rounded-3xl bg-cover bg-center translate-x-[-30px] -mt-12"
              style={{
                backgroundImage: `url(${about})`,
              }}
            ></div>

            <div className="absolute bottom-20 -right-10 bg-[#FEFFFF] shadow-lg rounded-2xl px-8 py-6 w-56">
              <p className="text-gray-800 text-[20px] font-normal leading-[36px] mb-[70px]">
                Certified Batch
              </p>
              <p className="text-[var(--color-primary)] text-[28px] font-semibold leading-[35.84px] mt-1">
                Privity
              </p>
              <p className="text-gray-800 text-[18px] font-medium leading-[32.4px] mt-1">
                Certified
                <br />
                Professional 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Updated InfoCards usage */}
      <InfoCards />
    </section>
  );
};

export default AboutPrivity;
