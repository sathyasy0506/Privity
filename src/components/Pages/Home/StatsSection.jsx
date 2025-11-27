import React from "react";
import { Star } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center py-12 bg-white font-montserrat p-2">
      <div className="flex flex-row items-center justify-between border border-[var(--color-primary)] rounded-[80px] md:rounded-full px-4 md:px-16 py-8 w-full max-w-[1320px] gap-4 md:gap-0">
        {/* Happy Customers */}
        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-[20px] md:text-[64px] font-light text-[var(--color-primary)]">
            17.8 M +
          </h2>
          <p className="text-gray-800 text-[10px] md:text-[18px] mt-2">
            Happy customers
          </p>
        </div>

        {/* Divider */}
        <div className="h-16 md:h-24 w-px bg-[var(--color-primary)]" />

        {/* Years */}
        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-[20px] md:text-[64px] font-light text-[var(--color-primary)]">
            16+
          </h2>
          <p className="text-gray-800 text-[10px] md:text-[18px] mt-2 leading-snug">
            Years of Experience. Privity started
            <br className="hidden md:block" />
            in 2008
          </p>
        </div>

        {/* Divider */}
        <div className="h-16 md:h-24 w-px bg-[var(--color-primary)]" />

        {/* Star Rating */}
        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-[20px] md:text-[64px] font-light text-[var(--color-primary)] flex items-center gap-2">
            4.8
            <Star
              fill="var(--color-primary)"
              stroke="var(--color-primary)"
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </h2>
          <p className="text-gray-800 text-[10px] md:text-[18px] mt-2">
            Star Rating
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
