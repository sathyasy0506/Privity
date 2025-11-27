import React from "react";
import { Star } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center py-16 bg-white font-montserrat">
      <div className="flex flex-col md:flex-row justify-between items-center border border-[var(--color-primary)] md:rounded-full rounded-[154px] px-8 md:px-16 py-10 w-full max-w-[1320px] gap-10 md:gap-0">
        {/* Happy Customers */}
        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-[64px] font-light text-[var(--color-primary)]">17.8 M +</h2>
          <p className="text-gray-800 text-[18px] mt-2">Happy customers</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-24 w-px bg-[var(--color-primary)]" />
        <div className="block md:hidden w-60 h-px bg-[var(--color-primary)]" />

        {/* Years of Experience */}
        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-[64px] font-light text-[var(--color-primary)]">16+</h2>
          <p className="text-gray-800 text-[18px] mt-2 leading-snug">
            Years of Experience. Privity started
            <br />
            in 2008
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-24 w-px bg-[var(--color-primary)]" />
        <div className="block md:hidden w-60 h-px bg-[var(--color-primary)]" />

        {/* Star Rating */}
        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-[64px] font-light text-[var(--color-primary)] flex items-center gap-2">
            4.8
            <Star fill="var(--color-primary)" stroke="var(--color-primary)" className="w-8 h-8" />
          </h2>
          <p className="text-gray-800 text-[18px] mt-2">Star Rating</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
