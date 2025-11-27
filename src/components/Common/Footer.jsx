import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaDribbble,
} from "react-icons/fa";
import favicon from "../../assets/images/favicon.png";

const Footer = () => {
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
          <form className="flex flex-col sm:flex-row items-center max-w-sm rounded-2xl overflow-hidden border border-gray-200">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 bg-[#d72600] hover:bg-[#b91c00] text-white px-6 py-3 font-medium rounded-2xl w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col sm:flex-row sm:justify-between gap-10">
          {/* Main Pages */}
          <div>
            <h3 className="text-[20px] font-medium leading-[30px] mb-4">
              Main Pages
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-[20px] font-medium leading-[30px] mb-4">
              Other Pages
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="text-[20px] font-medium leading-[30px] mb-4">
              Utility Pages
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Faq's
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Terms & Co
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[--color-primary]">
                  Coming soon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" mt-12 pt-6 text-center text-gray-500">
        © Privity 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
