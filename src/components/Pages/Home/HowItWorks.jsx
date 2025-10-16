import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#E2D0CC] py-40 px-6 md:px-16 lg:px-24 text-center relative overflow-hidden font-montserrat rounded-t-3xl">
      {/* Section Tag */}
      <div className="inline-block bg-white text-[#b43b27] text-xs font-semibold px-4 py-1 rounded-full mb-4">
        HOW IT WORKS
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-16">
        Simple, Convenient, Effective
      </h2>

      {/* Steps Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-4 flex-1">
          <h3 className="text-[60px] font-medium text-[#b43b27] mb-4">1</h3>
          <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
            Choose Desired Services
          </h4>
          <p className="text-gray-500 leading-relaxed text-[16px] md:text-base">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator. No pressure - just a
            conversation.
          </p>

          {/* Arrow */}
          <div className="hidden z-10 md:block absolute top-1/4 -right-14 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-20 h-8 text-[#b43b27]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M0 25 C30 10, 70 10, 100 25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M90 15 L100 25 L90 35"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1">
          <h3 className="text-[60px] font-medium text-[#b43b27] mb-4">2</h3>
          <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
            Choose Your Plan
          </h4>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator. No pressure - just a
            conversation.
          </p>

          {/* Arrow */}
          <div className="hidden md:block absolute top-1/4 -right-14 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-20 h-8 text-[#b43b27]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M0 25 C30 10, 70 10, 100 25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M90 15 L100 25 L90 35"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#EFE3E1] shadow-sm rounded-3xl p-8 flex-1">
          <h3 className="text-[60px] font-medium text-[#b43b27] mb-4">3</h3>
          <h4 className="text-[24px] font-[500] text-gray-800 mb-3">
            Enjoy Secure Life
          </h4>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator. No pressure - just a
            conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
