import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { ENDPOINTS } from "../../../config/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState("success"); // success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setResponseType("success");

    try {
      const res = await fetch(ENDPOINTS.CONTACT(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();

      if (data.status === "success") {
        setResponseType("success");
        setResponseMsg("Your message has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setResponseType("error");
        setResponseMsg(data.message || "Something went wrong!");
      }
    } catch (err) {
      setResponseType("error");
      setResponseMsg("Network error. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1950&q=80"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#FF2703]/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-2">
            Contact Us
          </h1>
          <p className="text-white text-lg">
            <span className="opacity-90">Home</span> / Contact Us
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-12 grid md:grid-cols-2 gap-12 -mt-20 relative z-20">
            {/* Left Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connect with our experienced insurance advisors for reliable
                solutions, professional service, and peace of mind.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF2703] rounded-full p-3 flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FF2703] rounded-full p-3 flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@privityinsurance.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FF2703] rounded-full p-3 flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      68/1878 Ist floor JMV Towers, Market road north end,
                      Kombara, Ernakulam, Kerala, India, 682018
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">
                  Follow our social media
                </h3>
                <div className="flex gap-3">
                  <button className="bg-[#FF2703] rounded-full p-3">
                    <Facebook className="text-white" size={20} />
                  </button>
                  <button className="bg-[#FF2703] rounded-full p-3">
                    <Instagram className="text-white" size={20} />
                  </button>
                  <button className="bg-[#FF2703] rounded-full p-3">
                    <Twitter className="text-white" size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FF2703] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2703]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FF2703] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2703]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FF2703] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2703]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message Here
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FF2703] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2703] resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FF2703] hover:bg-[#e42202] transition-colors text-white font-semibold py-4 rounded-lg text-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {responseMsg && (
                  <p
                    className={`text-center mt-3 ${
                      responseType === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {responseMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
