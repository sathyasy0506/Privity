import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const StickyEstimateBar = ({ onOpenEstimate, onOpenLocations }) => {
  return (
    <div className="fixed right-0 top-2/4 z-50 flex flex-col gap-[1px] items-center block md:hidden">
      {/* Free Estimate vertical bar */}
      <button
        onClick={onOpenEstimate}
        className="
          bg-[--color-primary] text-white font-medium px-2 py-2
          shadow-md cursor-pointer writing-vertical-rl rotate-180
          flex items-center justify-center
        "
        style={{ borderRadius: "9px", borderBottomLeftRadius: "9px" }}
        aria-label="Open Free Estimate"
      >
        Free Estimate
      </button>

      {/* Phone button */}
      <button
        onClick={onOpenLocations}
        className="bg-gray-100 shadow-md p-2.5 flex items-center rotate-90 justify-center rounded-l-lg mt-1"
        aria-label="Open Locations"
        title="Our Locations"
      >
        <FaPhone size={16} color="var(--color-primary)" />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+919507332211"
        className="bg-green-500 shadow-md p-2.5 flex items-center justify-center rounded-l-lg mt-1"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={16} color="#fff" />
      </a>
    </div>
  );
};

export default StickyEstimateBar;
