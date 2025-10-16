import React from "react";

const InsurancePartners = () => {
  const partners = Array(24).fill(""); // 18 placeholder boxes

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 text-center font-montserrat">
      {/* Section Label */}
      <p className="text-red-600  mb-3 text-[17px] font-[500] tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-red-600  rounded-sm"></span>
        Partners
      </p>

      {/* Heading */}
      <h2 className="text-[38px] font-[700] text-gray-900 mb-4">
        Our Insurance Partners
      </h2>

      {/* Subheading */}
      <p className="text-[#787878] text-[16px] font-[500] max-w-xl mx-auto mb-12">
        We have strong alliances with India’s leading insurers to provide the
        widest coverage options available in the market.
      </p>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-16 justify-items-center">
        {partners.map((_, index) => (
          <div
            key={index}
            className="w-[160px] h-[110px] bg-[#F1F2F2] border bottom-1 rounded-[30px] shadow-sm"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default InsurancePartners;
