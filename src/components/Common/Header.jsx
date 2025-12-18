import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = ({ sticky = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items
  const navigation = [
    { name: "About", path: "/", sectionId: "about" },
    { name: "Services", path: "/", sectionId: "what-we-offer" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) =>
    path === "/" && (location.pathname === "/" || location.pathname === "/home")
      ? true
      : location.pathname === path;

  // Smooth scroll with header offset
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // header height
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Handle nav click
  const handleNavClick = (e, item) => {
    if (item.sectionId) {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      if (location.pathname === "/") {
        handleScrollToSection(item.sectionId);
      } else {
        navigate("/");
        setTimeout(() => handleScrollToSection(item.sectionId), 600);
      }
    }
  };

  // Header position
  const containerPositionClass = sticky
    ? "fixed top-0 left-0 w-full z-50"
    : "relative w-full z-50";

  return (
    <header
      className={`${containerPositionClass} backdrop-blur-md bg-white/70`}
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-9 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 mx-auto font-montserrat">
            {navigation.map((item) =>
              item.sectionId ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[18px] tracking-wide transition hover:text-[--color-primary] `}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[18px] tracking-wide transition hover:text-[--color-primary] `}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                if (location.pathname === "/") {
                  handleScrollToSection("quote");
                } else {
                  navigate("/");
                  setTimeout(() => handleScrollToSection("quote"), 600);
                }
              }}
              className="px-5 py-2 bg-[--color-primary] text-white text-lg rounded-full border border-[--color-primary] transition hover:bg-white hover:text-[--color-primary]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg border bg-white shadow-md py-4 px-5 space-y-4 font-montserrat">
            {navigation.map((item) =>
              item.sectionId ? (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block w-full text-center py-2 hover:text-[--color-primary]"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center py-2 hover:text-[--color-primary]"
                >
                  {item.name}
                </Link>
              )
            )}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (location.pathname === "/") {
                  handleScrollToSection("quote");
                } else {
                  navigate("/");
                  setTimeout(() => handleScrollToSection("quote"), 600);
                }
              }}
              className="w-full px-4 py-2 bg-[--color-primary] text-white rounded-full"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
