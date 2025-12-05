import React, { useState, useEffect, useRef } from "react";
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
 * - Mobile (<=767px): horizontal scroll container with snap + dots (no buttons)
 */
const InfoCards = () => {
  const cards = [
    {
      icon: network,
      title: "A strong network of 1100+ Point of Sales (POS) agent",
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

  // isMobile state using matchMedia (safe check for SSR)
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 767 : false
  );

  // ref to the scroll container on mobile
  const scrollRef = useRef(null);

  // width of each card in the scroll container (updated on resize)
  const [cardWidth, setCardWidth] = useState(0);

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

  // update cardWidth when mobile changes or on resize
  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setCardWidth(scrollRef.current.clientWidth);
      } else {
        // fallback to viewport width
        setCardWidth(typeof window !== "undefined" ? window.innerWidth : 0);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isMobile]);

  // scroll handler to update current dot based on scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId = null;
    const onScroll = () => {
      // throttle via requestAnimationFrame
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const left = el.scrollLeft;
        const width = cardWidth || el.clientWidth || 1;
        const idx = Math.round(left / width);
        setCurrent(Math.max(0, Math.min(cards.length - 1, idx)));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // initialize
    onScroll();

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cardWidth, cards.length]);

  // scroll to a given card index (used by dots)
  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const left = index * (cardWidth || el.clientWidth);
    el.scrollTo({ left, behavior: "smooth" });
    setCurrent(index);
  };

  // MOBILE LAYOUT: horizontal scroll with snap + dots (no prev/next buttons)
  if (isMobile) {
    return (
      <div className="w-full max-w-[1320px] mx-auto py-6 px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
            role="region"
            aria-label="Features carousel"
          >
            <div className="flex w-full">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="snap-center flex-none w-full px-2"
                  aria-hidden={current !== i}
                >
                  <div className="rounded-[24px] p-6 w-full bg-white border border-red-200 shadow-sm h-[260px] flex flex-col items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                      style={{
                        backgroundColor: "var(--color-primary, #ea1f04)",
                      }}
                    >
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-8 h-8 object-contain z-10"
                        draggable={false}
                      />
                    </div>

                    <h3 className="text-[--color-primary] font-[600] text-[16px] leading-[22px] text-center px-2">
                      {card.title}
                    </h3>

                    <p className="text-gray-700 text-[15px] font-[400] leading-[24px] px-1 text-center mt-3">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-1">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to card ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "scale-110 bg-[#ea1f04]" : "bg-gray-300"
                }`}
              />
            ))}
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
            <div className="w-12 h-12 rounded-full bg-[--color-primary] flex items-center justify-center">
              <img
                src={card.icon}
                alt={card.title}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[--color-primary] font-[600] text-[16px] leading-[28.8px] mb-2">
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
      className="w-full bg-white py-16 px-2 md:px-20 lg:px-28  mt-4 font-montserrat"
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

          </div>
        </div>
        {/* Left Content */}
        <div className="lg:col-span-7 -mt-2">
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
                target={17}
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
                target={17}
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


          </div>
        </div>
      </div>

      {/* Updated InfoCards usage */}
      <InfoCards />
    </section>
  );
};

export default AboutPrivity;
