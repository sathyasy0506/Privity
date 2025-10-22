import React, { useState } from "react";
import insuranceLady from "../../../assets/images/insurance-lady.avif"; // adjust path
import { ArrowRight, ChevronDown } from "lucide-react";

export default function InsuranceQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insurance: "Car Insurance",
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "info" });

    try {
      const response = await fetch("http://localhost/backend/sendMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus({
        message: data.message,
        type: data.status === "success" ? "success" : "error",
      });
    } catch (error) {
      setStatus({ message: "Something went wrong.", type: "error" });
    }
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-[#341C1E] text-white px-8 lg:px-20 py-16 lg:py-24 overflow-hidden font-montserrat gap-20">
      {/* Circles */}
      <div className="absolute top-44 left-0 w-[40rem] h-[40rem] bg-[#392221] rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#3F2628] rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      {/* Left Content */}
      <div className="w-full lg:w-1/2 space-y-6 relative z-10">
        <p className="text-[16px] text-gray-300 font-[400] leading-[24px]">
          ● Contact us
        </p>

        <h2 className="text-[45px] font-[500] leading-[60.75px]">
          Get an insurance
          <br />
          quote to get started!
        </h2>

        <p className="text-[16px] font-[400] leading-[28.8px] text-gray-300 max-w-md">
          Contact us today to experience the difference of working with a
          trusted insurance provider.
        </p>

        <form
          className="mt-6 space-y-4 flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[rgba(74,42,38,0.5)] border border-[#705e5f] focus:border-[#ff4d2a] text-white placeholder-gray-300 rounded-xl px-4 py-3 outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[rgba(74,42,38,0.5)] border border-[#705e5f] focus:border-[#ff4d2a] text-white placeholder-gray-300 rounded-xl px-4 py-3 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[rgba(74,42,38,0.5)] border border-[#705e5f] focus:border-[#ff4d2a] text-white placeholder-gray-300 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div className="relative w-full">
            <select
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              className="w-full bg-[rgba(74,42,38,0.5)] border border-[#705e5f] focus:border-[#ff4d2a] text-white placeholder-gray-300 rounded-xl px-4 py-3 outline-none appearance-none"
            >
              <option>Car Insurance</option>
              <option>Life Insurance</option>
              <option>Health Insurance</option>
              <option>Motor Insurance</option>
              <option>Travel Insurance</option>
              <option>Fire Insurance</option>
              <option>Marine Insurance</option>
              <option>Home Insurance</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
          </div>

          <button
            type="submit"
            className="group relative inline-flex items-center bg-white text-[#BC2209] rounded-full pl-8 sm:pl-12 pr-4 py-3  w-56 sm:w-64 hover:bg-gray-100 transition-colors duration-300 overflow-hidden"
          >
            <span className="transform transition-transform duration-500 group-hover:translate-x-2 sm:group-hover:translate-x-4 text-sm sm:text-base">
              Submit Your Form
            </span>
            <span className="absolute top-1/2 transform -translate-y-1/2 right-4 transition-transform duration-500 group-hover:translate-x-[-8.75rem] sm:group-hover:translate-x-[-11.75rem] w-6 h-6 sm:w-8 sm:h-8 bg-[#BC2207] rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </span>
          </button>

          {status.message && (
            <p
              className={`mt-2 text-sm ${
                status.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative z-10">
        <div className="relative">
          <img
            src={insuranceLady}
            alt="Insurance representative"
            className="relative z-10 rounded-full object-contain max-h-[850px]"
          />
        </div>
      </div>
    </section>
  );
}
