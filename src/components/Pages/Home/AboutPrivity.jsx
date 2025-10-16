import React, { useState, useEffect } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// Smooth Counter component with fixed width
const Counter = ({ target, duration, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = (duration / end) * 1000; // milliseconds per increment

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

const InfoCards = () => {
  const cards = [
    {
      title: "Uncover your true potential",
      description: "Powerful intentions for your personal development.",
    },
    {
      title: "Uncover your true potential",
      description: "Powerful intentions for your personal development.",
    },
    {
      title: "Uncover your true potential",
      description: "Powerful intentions for your personal development.",
    },
    {
      title: "Uncover your true potential",
      description: "Powerful intentions for your personal development.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 bg-white font-montserrat">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-start border border-red-200 rounded-[24px] p-4 w-full transition-all"
        >
          <div className="m-[20px] pb-2">
            <VerifiedUserIcon
              className="text-red-600"
              style={{ fontSize: 25 }}
            />
          </div>

          <h3 className="text-[#E33E1F] font-[600] text-[18px] leading-[28.8px] mb-2 text-start">
            {card.title}
          </h3>

          <p className="text-gray-700 text-[15px] font-[400] leading-[24px] text-start">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const AboutPrivity = () => {
  return (
    <section className="w-full bg-white py-16 px-8 md:px-20 lg:px-28 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h2 className="text-[54px] font-[500] text-gray-900">
            About Privity
          </h2>
          <h3 className="text-[54px] font-[500] text-[#BFC0BF]">
            Insurance Brokers
          </h3>

          <hr className="my-8 border-gray-200" />

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex flex-col items-start gap-3">
              {/* Counter with fixed width */}
              <Counter
                target={12}
                duration={2}
                className="text-red-600 font-bold text-[110px] leading-[100px]"
              />
              <div>
                <p className="text-[25px] font-[600] text-gray-900">
                  Years <br /> experience.
                </p>
              </div>
            </div>

            <div className="flex-1 px-8">
              <p className="text-[14px] font-[500] text-gray-800 mb-4">
                Your Trusted Insurance Partner.
              </p>

              <p className="text-gray-500 text-[15px] font-[400] leading-relaxed mb-4 ">
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

        {/* Right Image + Badge */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center w-[95%]">
            <div
              className="relative w-full h-[560px] rounded-3xl bg-cover bg-center translate-x-[-30px] -mt-12"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/34213954/pexels-photo-34213954.jpeg')",
              }}
            ></div>

            <div className="absolute bottom-20 -right-10 bg-[#FEFFFF] shadow-lg rounded-2xl px-8 py-6 w-56">
              <p className="text-gray-800 text-[20px] font-normal leading-[36px] mb-[70px]">
                Certified Batch
              </p>
              <p className="text-red-600 text-[28px] font-semibold leading-[35.84px] mt-1">
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
      <InfoCards />
    </section>
  );
};

export default AboutPrivity;
