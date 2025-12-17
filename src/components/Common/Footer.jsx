import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaDribbble,
} from "react-icons/fa";
import favicon from "../../assets/images/favicon.png";

const Footer = ({ navigation = null }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  // default navigation if not passed as prop (keeps parity with Header)
  const defaultNav = [
    { name: "About", path: "/", sectionId: "about" },
    { name: "Services", path: "/", sectionId: "what-we-offer" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const navItems = navigation || defaultNav;

  // Determine active state: for non-root paths use pathname; for root with sections use viewport detection
  const isActive = (item) => {
    if (item.path !== "/") return location.pathname === item.path;
    // when on home, mark based on currently visible section (prevents both About & Services being active)
    if (location.pathname !== "/") return false;
    if (!item.sectionId) return false;
    return activeSection === item.sectionId;
  };

  // Smooth scroll with header offset
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // match header offset
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Handle click for nav items (works on all screen sizes)
  const handleNavClick = (e, item) => {
    // If sectionId -> smooth scroll to that section (if already on home) or navigate then scroll
    if (item.sectionId) {
      e.preventDefault();
      if (location.pathname === "/") {
        handleScrollToSection(item.sectionId);
      } else {
        navigate("/");
        // small delay to allow Home to mount
        setTimeout(() => handleScrollToSection(item.sectionId), 600);
      }
      return;
    }

    // For normal route links, navigate then scroll to top
    e.preventDefault();
    navigate(item.path);
    // ensure page goes to top after navigation
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  // Listen to scroll and set activeSection when on home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    let rafId = null;

    const sections = navItems
      .filter((i) => i.sectionId)
      .map((i) => ({
        id: i.sectionId,
        el: document.getElementById(i.sectionId),
      }))
      .filter((s) => s.el);

    const check = () => {
      let found = null;
      for (const s of sections) {
        const rect = s.el.getBoundingClientRect();
        // consider a section active when its top is within top 120px and bottom > 120px
        if (rect.top <= 120 && rect.bottom > 120) {
          found = s.id;
          break;
        }
        // alternatively if near top of viewport
        if (rect.top >= 0 && rect.top < 120) {
          found = s.id;
          break;
        }
      }
      if (found !== activeSection) setActiveSection(found);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(check);
    };

    // run initially
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname, navItems, activeSection]);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-12 px-6 md:px-20 lg:px-44 font-montserrat">
      {/* Left and Right Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col gap-3">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4">
            <img src={favicon} alt="Privity Logo" className="w-6 h-6" />
            <span className="text-2xl font-[500]">Privity</span>
          </div>

          {/* Tagline */}
          <p className="text-gray-500 mb-6 text-[18px] font-[400] leading-[27px]">
            Elevate your life with Privity insurances.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 text-[16px] mb-8">
            <a
              href="#"
              className="text-black hover:text-[--color-primary]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-black hover:text-[--color-primary]"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-black hover:text-[--color-primary]"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-black hover:text-[--color-primary]"
              aria-label="Dribbble"
            >
              <FaDribbble />
            </a>
          </div>

          {/* Email Subscription */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center max-w-sm rounded-2xl overflow-hidden border border-gray-200"
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 bg-[--color-primary] hover:bg-[#b91c00] text-white px-6 py-3 font-medium rounded-2xl w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-start sm:flex-row sm:justify-between gap-10">
          {/* Main Pages (now driven by the same nav config as Header) */}
          <div>
            <h3 className="text-[20px] font-medium leading-[30px] mb-4">
              Main Pages
            </h3>
            <ul className="space-y-3 text-gray-500">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={item.name === "Contact" ? "hidden sm:block" : ""}
                >
                  {item.sectionId ? (
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`hover:text-[--color-primary] cursor-pointer ${
                        isActive(item) ? "font-medium text-black" : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`hover:text-[--color-primary] ${
                        isActive(item) ? "font-medium text-black" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="
    mt-12 pt-6 text-gray-500
    text-center        /* mobile center, desktop left */
  "
      >
        <ul className="list-none  lg:pl-6">
          <li>
            Privity Insurance Brokers Pvt Ltd, CIN: <b>066000KL2008PTC022307</b>,
            Registered Office : Door No.68/1878, First Floor, JMV Towers, Deepam
            Lane, Market Road, Ernakulam-682018, Mobile No. <b>9507332211</b>, Email
            ID: <b>care@privityinsurance.com</b>
          </li>
          <li className="mt-2">
            Privity Insurance Brokers Pvt Ltd is registered as Direct Broker
            (Life & General) Registration No.442, Registration code No. IRDAI/DB
            442/2024, valid till 25/10/2027, License category – Direct Broker
            (Life & General)
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className=" mt-12 pt-6 text-center font-bold text-gray-500">
        © Privity {currentYear}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
