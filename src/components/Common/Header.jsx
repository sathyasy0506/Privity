import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "About", path: "/test" },
    { name: "Services", path: "/" },
    { name: "Blogs", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const isActive = (path) =>
    path === "/" && (location.pathname === "/" || location.pathname === "/home")
      ? true
      : location.pathname === path;

  return (
    <header className="backdrop-blur-md bg-white/70 fixed left-0 top-0 w-full z-50 transition">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-9 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 mx-auto font-montserrat">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-black font-light text-[18px] tracking-wide transition-all group hover:text-red-600 ${
                  isActive(item.path) ? "text-black" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="w-full px-5 py-2 bg-red-600 text-white text-lg font-normal rounded-full border-[1px] border-red-600 transition-all duration-300 ease-in-out transform  hover:bg-white hover:text-red-600 hover:opacity-90 font-montserrat">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-red-600 transition"
            >
              <svg
                className="w-7 h-7"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg border border-gray-200 bg-white shadow-md py-4 px-5 space-y-4 animate-fade-in-up font-montserrat">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-2 rounded-md font-medium text-black hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-red-600 text-white text-lg font-montserrat font-normal rounded-full border-2 border-red-600 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-red-600">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
