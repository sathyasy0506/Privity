import React, { useState } from "react";
import { X } from "lucide-react";
import { ENDPOINTS } from "../../config/api";
import { useEffect } from "react";

const EstimateModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Stop background scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState("success");

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
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
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 md:hidden"
      aria-modal="true"
      role="dialog"
    >
      {/* Popup Box */}
      <div
        className="
          bg-white rounded-2xl w-[90%] max-w-md p-6 shadow-xl
          animate-scaleIn
        "
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Free Estimate</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Share a few details and we'll get back with an estimate.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[--color-primary]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[--color-primary]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[--color-primary]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[--color-primary]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[--color-primary] text-white py-3 rounded-md text-lg"
          >
            {loading ? "Sending..." : "Request Estimate"}
          </button>

          {responseMsg && (
            <p
              className={`text-center text-sm mt-2 ${
                responseType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {responseMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EstimateModal;
