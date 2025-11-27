import React from "react";
import Arrow from "../../../assets/images/Arrow.svg";

const HowItWorksSection = () => {
  return (
    <section className="w-full z-10 bg-[#E2D0CC] mt-2 py-20 px-6 md:px-16 lg:px-24 text-center relative overflow-hidden rounded-t-3xl">
      <div className="inline-block bg-white text-[var(--color-primary)] text-xs font-semibold px-4 py-1 rounded-full mb-4">
        HOW IT WORKS
      </div>

      <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-16">
        Simple, Convenient, Effective
      </h2>

      {/* Make this the positioning context for mobile arrows */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto relative">
        {/* Step 1 */}
        <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-4 flex-1">
          <h3 className="text-[30px] font-[400] text-[var(--color-primary)] mb-4">
            1
          </h3>
          <h4 className="text-[18px] font-[500] text-gray-800 mb-3">
            Choose Your Service
          </h4>
          <p className="text-gray-500 leading-relaxed text-[16px] md:text-base">
            Select the insurance type that fits your needs — life, health,
            motor, travel, or business coverage.
          </p>

          {/* Desktop Arrow */}
          <div className="hidden md:block absolute top-1/3 -right-20 w-32 h-16 rotate-45">
            <img
              src={Arrow}
              alt="Arrow"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1">
          <h3 className="text-[30px] font-[400] text-[var(--color-primary)] mb-4">
            2
          </h3>
          <h4 className="text-[18px] font-[500] text-gray-800 mb-3">
            Pick Your Plan
          </h4>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            Compare options and choose a plan tailored to your budget and goals,
            with clear terms and no hidden costs.
          </p>

          {/* Desktop Arrow */}
          <div className="hidden md:block absolute top-1/3 -right-20 w-32 h-16 rotate-45">
            <img
              src={Arrow}
              alt="Arrow"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1">
          <h3 className="text-[30px] font-[400] text-[var(--color-primary)] mb-4">
            3
          </h3>
          <h4 className="text-[18px] font-[500] text-gray-800 mb-3">
            Enjoy a Secured Life
          </h4>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            Relax with complete peace of mind, knowing you and your loved ones
            are protected.
          </p>
        </div>

        {/* ------------------------------------------------------- */}
        {/* MOBILE ARROWS (outside cards, positioned between steps) */}
        {/* ------------------------------------------------------- */}

        {/* Arrow 1: Step 1 → Step 2 */}
        <div
          className="md:hidden absolute z-50 w-14 h-14"
          style={{
            top: "27%", // tweak if needed
            left: "75%", // tweak if needed
            transform: "rotate(-210deg)",
          }}
        >
          <img
            src={Arrow}
            alt="arrow"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Arrow 2: Step 2 → Step 3 */}
        <div
          className="md:hidden absolute z-50 w-14 h-14"
          style={{
            top: "64%", // tweak if needed
            left: "12%", // tweak if needed
            transform: "rotate(-240deg)",
          }}
        >
          <img
            src={Arrow}
            alt="arrow"
            className="w-full h-full object-contain"
          />
        </div>

        {/* ------------------------------------------------------- */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
