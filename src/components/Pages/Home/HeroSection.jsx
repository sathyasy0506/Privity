import { useState, useEffect } from "react";
import banner1 from "../../../assets/images/banner_1.jpeg";
import banner2 from "../../../assets/images/banner_2.jpeg";

const banners = [banner1, banner2];

export default function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 0 ? 1 : 0));
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentBanner ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        >
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
