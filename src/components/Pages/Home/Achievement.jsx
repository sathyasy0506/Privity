import React from "react";
import image from "../../../assets/images/guide.png";

function Achievement() {
  return (
    <section className="w-full bg-white  px-8 lg:px-24 font-montserrat">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <h2 className="md:text-[52px] text-[32px] font-[600] text-gray-900 md:leading-[72.8px]">
          We’re Here to <br />
          <span className="text-[var(--color-primary)] ">Guide You</span>
        </h2>
        <p className="max-w-[450px] text-gray-600 text-base mt-6 lg:mt-0 text-[15px] font-[400] leading-[28.8px]">
          Our service is designed exclusively to support humans on their journey
          to self-discovery, empowerment, and goal achievement.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Left Side Cards */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          {/* Claim Settle Card */}
          <div className="bg-[var(--color-primary)] text-white rounded-[40px] p-6 text-center shadow-md flex flex-col justify-center items-center flex-1">
            <h3 className="text-[48px] font-[500] mb-2">99%</h3>
            <p className="text-[18px] font-[500] mb-3">Claim Settle</p>
            <p className="text-[14px] font-[300] opacity-90 leading-relaxed">
              Fast and hassle-free claim processing — we make sure your claims
              are settled quickly and reliably.
            </p>
          </div>

          {/* 24/7 Contact Support Card */}
          <div className="bg-[#3D2F2F] text-white rounded-[40px] p-6 text-center shadow-md flex flex-col justify-center items-center flex-1">
            <h3 className="text-[48px] font-[500] mb-2">24/7</h3>
            <p className="text-[18px] font-[500] mb-3">Support</p>
            <p className="text-[14px] font-[300] opacity-90 leading-relaxed">
              Round-the-clock assistance for all your insurance needs, so help
              is always just a call or click away.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-3/4 rounded-3xl overflow-hidden flex">
          <img
            src={image}
            alt="People shaking hands"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Achievement;
