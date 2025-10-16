import React from "react";
import { Star, ArrowUpRight } from "lucide-react";
import image from "../../../assets/images/hero_r.avif"; // main red circle + family
import float from "../../../assets/images/hero_float.avif"; // overlay tag image

export default function InsuranceHero() {
  return (
    <section className="min-h-screen bg-white px-8 pt-16 py-12 lg:px-16">
      <div className="max-w-7xl mx-auto p-[12px]">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Rating */}
            <div className="flex items-center gap-2 text-[#787878] text-[18px] font-light mb-6 leading-[27px] font-montserrat">
              <Star className="w-4 h-4 fill-[#E6A500] text-[#E6A500]" />
              <span>4.7</span>
              <span>|</span>
              <span>3,460 Reviews</span>
            </div>

            {/* Heading */}
            <h1 className="font-montserrat text-[60px] font-medium leading-[70px] text-[#302D2D] mb-8">
              Welcome{" "}
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#EB575C]">
                <ArrowUpRight
                  className="w-6 h-6 text-white"
                  strokeWidth={2.5}
                />
              </span>{" "}
              to Privity Insurance{" "}
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#EB575C]">
                <Star className="w-6 h-6 fill-white text-white" />
              </span>{" "}
              Brokers Pvt. Ltd.
            </h1>

            {/* Paragraph */}
            <p className="font-montserrat text-[15px] font-light leading-[22.5px] text-[#787878] mb-8 max-w-2xl">
              At Privity, we are dedicated professionals who serve as true
              advocates for insurance buyers. Our mission is to simplify the
              insurance journey by offering transparent, efficient, and
              personalized insurance solutions tailored to individual and
              corporate needs. Whether you're an individual seeking the right
              protection or a business looking for comprehensive group policies,
              Privity ensures that your coverage is aligned with your goals —
              with no hidden costs, full clarity, and continuous support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 ml-2">
              <button className="px-8 py-2 bg-red-600 hover:bg-red-700 text-white text-lg font-normal rounded-full transition-colors font-poppins">
                Book Now
              </button>
              <button className="px-8 py-2 bg-white hover:bg-gray-50 text-red-600 text-lg font-normal rounded-full border-[1px] border-red-600 transition-colors font-poppins">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Column - Image + Floating image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[90%] max-w-[550px]">
              {/* Main hero image */}
              <img
                src={image}
                alt="Hero"
                className="w-full h-auto object-contain"
              />

              {/* Floating overlay image with animation */}
              <img
                src={float}
                alt="Float Tag"
                className="absolute bottom-6 left-0 w-[150px] lg:w-[180px] object-contain drop-shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
