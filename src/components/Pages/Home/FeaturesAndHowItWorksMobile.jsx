// FeaturesAndHowItWorksMobile.jsx
import React, { useEffect, useRef } from "react";
import Arrow from "../../../assets/images/Arrow.svg";

// icons (adjust paths if needed)
import premium from "../../../assets/icons/premium.png";
import documentation from "../../../assets/icons/documentation.png";
import support from "../../../assets/icons/support.png";
import assistance from "../../../assets/icons/assistance.png";

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
    icon: premium,
  },
  {
    title: "Seamless documentation",
    description: "and set powerful intentions for your personal development.",
    icon: documentation,
  },
  {
    title: "End-to-end claims support",
    description: "and set powerful intentions for your personal development.",
    icon: support,
  },
  {
    title: "Personalized assistance",
    description: "and set powerful intentions for your personal development.",
    icon: assistance,
  },
];

export default function FeaturesAndHowItWorksMobile() {
  // ref to the HOW IT WORKS section container
  const howRef = useRef(null);

  useEffect(() => {
    const el = howRef.current;
    if (!el) return;

    // smaller factor => subtler lift. Adjust as needed (0.05 - 0.25)
    const PARALLAX_FACTOR = 0.09;
    let rafId = null;

    function onScroll() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        // we want to move the section slightly upward as user scrolls down
        // compute how far the section is from top of viewport; center around 0
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        // offset: negative when section moves up; normalise to [-1, 1]
        const offsetFromCenter =
          (rect.top - viewportHeight / 2) / (viewportHeight / 2);
        // translateY amount
        const translateY =
          Math.max(-1, Math.min(1, offsetFromCenter)) * PARALLAX_FACTOR * 100; // px-ish
        el.style.transform = `translateY(${translateY}px)`;
      });
    }

    // initial call to position correctly
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="md:hidden font-montserrat">
      {/* -----------------------------
          SECTION 1: Features (sticky, full screen)
          - overflow-auto so user can scroll inside the pinned area
         ----------------------------- */}
      <section className="sticky top-0 w-full bg-white z-10">
        <div className="max-w-[980px] mx-auto px-6 py-8 -mt-8">
          {/* Render features only (no image) */}
          <div className="flex flex-col gap-6 pb-8">
            {features.map((f, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <FeatureCard
                  title={f.title}
                  description={f.description}
                  icon={f.icon}
                />
                {/* removed image card as requested */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* small spacer (optional) */}
      <div className="h-2" />

      {/* -----------------------------
          SECTION 2: How It Works (sticky top-0 with higher z so it overlaps)
         ----------------------------- */}
      <section
        ref={howRef}
        className="sticky top-0 w-full bg-[#E2D0CC] py-10 px-6 z-20 overflow-visible transition-transform will-change-transform"
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
