import React from "react";

import logo1 from "../../../assets/images/insurance_company_logos_01.png";
import logo2 from "../../../assets/images/insurance_company_logos_02.png";
import logo3 from "../../../assets/images/insurance_company_logos_03.png";
import logo4 from "../../../assets/images/insurance_company_logos_04.png";
import logo5 from "../../../assets/images/insurance_company_logos_05.png";
import logo6 from "../../../assets/images/insurance_company_logos_06.png";
import logo7 from "../../../assets/images/insurance_company_logos_07.png";
import logo8 from "../../../assets/images/insurance_company_logos_08.png";
import logo9 from "../../../assets/images/insurance_company_logos_09.png";
import logo10 from "../../../assets/images/insurance_company_logos_10.png";
import logo11 from "../../../assets/images/insurance_company_logos_11.png";
import logo12 from "../../../assets/images/insurance_company_logos_12.png";
import logo13 from "../../../assets/images/insurance_company_logos_13.png";
import logo14 from "../../../assets/images/insurance_company_logos_14.png";
import logo15 from "../../../assets/images/insurance_company_logos_15.png";
import logo16 from "../../../assets/images/insurance_company_logos_16.png";
import logo17 from "../../../assets/images/insurance_company_logos_17.png";
import logo18 from "../../../assets/images/insurance_company_logos_18.png";
import logo19 from "../../../assets/images/insurance_company_logos_19.png";
import logo20 from "../../../assets/images/insurance_company_logos_20.png";
import logo21 from "../../../assets/images/insurance_company_logos_21.png";
import logo22 from "../../../assets/images/insurance_company_logos_22.png";
import logo23 from "../../../assets/images/insurance_company_logos_23.png";
import logo24 from "../../../assets/images/insurance_company_logos_24.png";

const InsurancePartners = () => {
  const generalInsurance = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo18,
    logo14,
    logo19,
    logo23,
    logo13,
  ];

  const lifeInsurance = [logo22, logo24, logo16];

  const standaloneInsurance = [logo12, logo15, logo17, logo20, logo21];

  const categories = [
    { title: "General Insurance", logos: generalInsurance },
    { title: "Life Insurance", logos: lifeInsurance },
    { title: "Standalone Insurance", logos: standaloneInsurance },
  ];

  return (
    <section className="w-full bg-white  px-6 md:px-12 lg:px-24 text-center font-montserrat ">
      <p className="text-[var(--color-primary)] mb-3 text-[17px] font-[500] tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-[var(--color-primary)] rounded-sm"></span>
        Partners
      </p>

      <h2 className="text-[34px] font-[700] text-gray-900 mb-4">
        Our Insurance Partners
      </h2>

      <p className="text-[#787878] text-[16px] font-[400] max-w-xl mx-auto mb-12">
        We have strong alliances with India’s leading insurers to provide the
        widest coverage options available in the market.
      </p>

      {/* Categories */}
      {categories.map((cat, i) => (
        <div key={i} className="mb-16">
          <h3 className="text-[26px] font-[700] text-gray-800 mb-6 text-center">
            {cat.title}
          </h3>

          {/* MOBILE: row scroll | DESKTOP: wrap */}
          <div
            className="
              flex gap-6 justify-start
              overflow-x-auto no-scrollbar
              sm:flex-wrap sm:justify-center
            "
          >
            {cat.logos.map((logo, index) => (
              <div
                key={index}
                className="w-[160px] h-[110px] flex items-center justify-center transform transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`${cat.title} Logo ${index + 1}`}
                  className="max-w-[140px] max-h-[90px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default InsurancePartners;
