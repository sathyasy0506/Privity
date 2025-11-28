// FeaturesAndHowItWorksMobile.jsx
import React from "react";
import Arrow from "../../../assets/images/Arrow.svg";

// icons/images (adjust paths if needed)
import premium from "../../../assets/icons/premium.png";
import documentation from "../../../assets/icons/documentation.png";
import support from "../../../assets/icons/support.png";
import assistance from "../../../assets/icons/assistance.png";

import premiumImage from "../../../assets/images/premium.png";
import documentationImage from "../../../assets/images/documentation.png";
import supportImage from "../../../assets/images/end_to_end.png";
import assistanceImage from "../../../assets/images/personalized_assistance.png";

/* Simple FeatureCard */
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-3xl border border-[#DBAFA6] p-4 flex items-center gap-4 bg-white">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-primary)] flex-shrink-0">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-7 h-7 object-contain"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#CD2200]">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Competitive premium pricing",
    description: "and set powerful intentions for your personal development.",
    image: premiumImage,
    icon: premium,
  },
  {
    title: "Seamless documentation",
    description: "and set powerful intentions for your personal development.",
    image: documentationImage,
    icon: documentation,
  },
  {
    title: "End-to-end claims support",
    description: "and set powerful intentions for your personal development.",
    image: supportImage,
    icon: support,
  },
  {
    title: "Personalized assistance",
    description: "and set powerful intentions for your personal development.",
    image: assistanceImage,
    icon: assistance,
  },
];

export default function FeaturesAndHowItWorksMobile() {
  return (
    <div className="md:hidden font-montserrat">
      {/* -----------------------------
          SECTION 1: Features (sticky, full screen)
          - overflow-auto so user can scroll inside the pinned area
         ----------------------------- */}
      <section className="sticky top-0 h-screen w-full bg-white z-10 overflow-auto">
        <div className="max-w-[980px] mx-auto px-6 py-8">


          {/* Render features in order: card then image */}
          <div className="flex flex-col gap-6 pb-8">
            {features.map((f, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <FeatureCard
                  title={f.title}
                  description={f.description}
                  icon={f.icon}
                />
                <img
                  src={f.image}
                  alt={f.title}
                  className="rounded-3xl object-cover w-full h-48"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* A small footer inside the sticky area so user can scroll to bottom easily */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Scroll up/down to view all features. Continue scrolling to see how
            it works.
          </div>
        </div>
      </section>

      {/* small spacer (optional) */}
      <div className="h-2" />

      {/* -----------------------------
          SECTION 2: How It Works (sticky top-0 with higher z so it overlaps)
         ----------------------------- */}
      <section
        className="sticky top-0 w-full bg-[#E2D0CC] py-10 px-6 z-20 overflow-visible"
        style={{
          borderTopLeftRadius: "28px",
          borderTopRightRadius: "28px",
          marginTop: "-2px", // tiny visual nudge so overlapping looks seamless
        }}
      >
        <div className="max-w-[980px] mx-auto text-center">
          <div className="inline-block bg-white text-[var(--color-primary)] text-xs font-semibold px-4 py-1 rounded-full mb-4">
            HOW IT WORKS
          </div>

          <h2 className="text-2xl font-medium text-gray-800 mb-6">
            Simple, Convenient, Effective
          </h2>

          {/* Make this the positioning context for the mobile arrows */}
          <div className="flex flex-col gap-6 relative">
            {/* Step 1 */}
            <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-6">
              <h3 className="text-[28px] font-[400] text-[var(--color-primary)] mb-3">
                1
              </h3>
              <h4 className="text-[16px] font-[500] text-gray-800 mb-2">
                Choose Your Service
              </h4>
              <p className="text-gray-500 text-[15px]">
                Select the insurance type that fits your needs — life, health,
                motor, travel, or business coverage.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-6">
              <h3 className="text-[28px] font-[400] text-[var(--color-primary)] mb-3">
                2
              </h3>
              <h4 className="text-[16px] font-[500] text-gray-800 mb-2">
                Pick Your Plan
              </h4>
              <p className="text-gray-500 text-[15px]">
                Compare options and choose a plan tailored to your budget and
                goals, with clear terms and no hidden costs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-[#EFE3E1] shadow-sm rounded-3xl p-6 mb-6">
              <h3 className="text-[28px] font-[400] text-[var(--color-primary)] mb-3">
                3
              </h3>
              <h4 className="text-[16px] font-[500] text-gray-800 mb-2">
                Enjoy a Secured Life
              </h4>
              <p className="text-gray-500 text-[15px]">
                Relax with complete peace of mind, knowing you and your loved
                ones are protected.
              </p>
            </div>

            {/* -------------------------------------------------------
                MOBILE ARROWS (positioned relative to this container)
               ------------------------------------------------------- */}

            {/* Arrow 1: near bottom-right of Step 1 (Step 1 → Step 2) */}
            <div
              className="md:hidden absolute z-50 w-12 h-12"
              style={{
                top: "28%", // tweak to nudge vertically
                right: "5%", // distance from right edge
                transform: "rotate(-210deg)",
              }}
            >
              <img
                src={Arrow}
                alt="arrow"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Arrow 2: near bottom-left of Step 2 (Step 2 → Step 3) */}
            <div
              className="md:hidden absolute z-50 w-12 h-12"
              style={{
                top: "60%", // tweak to nudge vertically
                left: "6%", // distance from left edge
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
        </div>
      </section>

      {/* extra content so the page continues below the overlap */}
      <div className="bg-white px-6 py-12">
        <div className="max-w-[980px] mx-auto">
          <p className="text-gray-600">
            More content below — keep scrolling to observe the overlap behavior.
          </p>
        </div>
      </div>
    </div>
  );
}
