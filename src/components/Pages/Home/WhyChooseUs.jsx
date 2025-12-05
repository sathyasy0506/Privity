import React from "react";

// ICONS
import network from "../../../assets/icons/network.png";
import endtoend from "../../../assets/icons/endtoend.png";
import hidden from "../../../assets/icons/hidden.png";
import loyal from "../../../assets/icons/loyal.png";

// WHY CHOOSE US DATA
const features = [
  {
    title: "A strong network of 1100+ Point of Sales (POS) agent",
    description:
      "Protect your biggest investment with our reliable, comprehensive, and trusted home insurance policies.",
    icon: network,
  },
  {
    title: "Seamless end-to-end claims support",
    description: "Get your designs done quickly without delays in 24 hours",
    icon: endtoend,
  },
  {
    title:
      "Operate solely on statutory brokerage — absolutely no hidden charges",
    description: "Get your designs done quickly without delays in 24 hours",
    icon: hidden,
  },
  {
    title: "Thousands of happy and loyal clients across the state",
    description: "Get your designs done quickly without delays in 24 hours",
    icon: loyal,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="sticky top-0 bg-[#341C1E] text-white px-6 md:px-20 py-16 overflow-hidden z-20 flex flex-col md:flex-row items-start justify-between gap-10"
      style={{ borderTopLeftRadius: "80px", borderTopRightRadius: "80px" }}
    >
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#392221] rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-[40rem] h-[40rem] bg-[#3F2628] rounded-full translate-x-[25%] translate-y-[25%] pointer-events-none"></div>

      {/* Left Section */}
      <div className="md:w-3/7 flex flex-col justify-between h-full space-y-6 relative z-10">
        <div>
          <p className="text-gray-300 text-[18px] font-[400] mb-2">
            Why Choose Us?
          </p>
          <div className="w-44 border-t border-gray-400 mb-6"></div>
          <h2 className="md:text-[44px] text-[26px] font-small md:leading-[57.2px]">
            A trusted insurance support network available across India, wherever
            you need us.
          </h2>
        </div>
        <div className="pt-2">
          <button className="bg-white text-[var(--color-primary)] font-medium rounded-3xl px-6 py-2 mt-4 hover:bg-[#ffeaea] transition-all">
            Book Now
          </button>
        </div>
      </div>

      {/* Right Section: feature cards (optional placeholder) */}
      <div className="md:w-4/7 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-2xl p-6 flex gap-4 items-start"
          >
            <img
              src={f.icon}
              alt={f.title}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-200">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
