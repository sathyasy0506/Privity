import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { showToast } from "../../Common/Toaster"; // adjust the path
import { API_URL } from "../../../config/api"; // adjust the path

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid JSON response from server");
      }

      const toastType = data.status === "success" ? "success" : "error";
      setStatus({ message: data.message, type: toastType });
      showToast(data.message, toastType, 4000);

      if (data.status === "success") {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        message: error.message || "Something went wrong.",
        type: "error",
      });
      showToast(error.message || "Something went wrong.", "error", 4000);
    } finally {
      setTimeout(() => setStatus((prev) => ({ ...prev, message: "" })), 4000);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="relative min-h-screen">
     

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left info section */}
            <div className="text-slate-900">
              <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6 border border-red-300">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <span className="text-sm font-medium text-red-900">
                  Let's Connect
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Ready to{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  connect?
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Get in touch with us. We'd love to hear from you and help with
                your inquiry.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100 border border-red-300">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email us</p>
                    <p className="text-lg font-semibold text-slate-900">
                      hello@example.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100 border border-green-300">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call us</p>
                    <p className="text-lg font-semibold text-slate-900">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-100 border border-orange-300">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Visit us</p>
                    <p className="text-lg font-semibold text-slate-900">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-900 mb-3"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-900 mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-900 mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-900 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 disabled:opacity-50 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-red-600/30`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {status.message && (
                  <p
                    className={`text-center text-sm mt-3 ${
                      status.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>

              <p className="text-xs text-slate-500 text-center mt-6">
                We respect your privacy. Your information is secure with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
