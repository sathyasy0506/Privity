import { useState, useEffect } from "react";
import banner1 from "../../../assets/images/banner_1.jpeg";
import banner2 from "../../../assets/images/banner_2.jpeg";

import mbanner1 from "../../../assets/images/mbanner_1.jpeg";
import mbanner2 from "../../../assets/images/mbanner_2.jpeg";

export default function HeroBanner() {
  const desktopBanners = [banner1, banner2];
  const mobileBanners = [mbanner1, mbanner2];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const banners = isMobile ? mobileBanners : desktopBanners;

  // Auto switch banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full overflow-hidden md:mb-0 -mb-10">
      {banners.map((banner, index) => (  
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentBanner
              ? "opacity-100"
              : "opacity-0 absolute inset-0"
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
