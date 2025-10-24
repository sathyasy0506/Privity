import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ICONS
import network from "../../../assets/icons/network.png";
import endtoend from "../../../assets/icons/endtoend.png";
import hidden from "../../../assets/icons/hidden.png";
import loyal from "../../../assets/icons/loyal.png";

// TESTIMONIALS DATA
const testimonials = [
  {
    id: 1,
    name: "Makayla Johnson",
    text: '"Privity has transformed the way I think about my life. Highly recommend!"',
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: true,
  },
  {
    id: 2,
    name: "Stephanie Jackson",
    text: "Dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown source.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: false,
  },
  {
    id: 3,
    name: "Samantha Vier",
    text: '"Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."',
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: false,
  },
  {
    id: 4,
    name: "Liam Carter",
    text: '"This platform has completely changed my workflow. Incredible!"',
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: false,
  },
  {
    id: 5,
    name: "Olivia Brown",
    text: '"Amazing service and excellent support. I feel more productive than ever!"',
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: false,
  },
];

// WHY CHOOSE US DATA
const features = [
  {
    title: "A strong network of 300+ Point of Sales (POS) agent",
    desc: "Protect your biggest investment with our reliable, comprehensive, and trusted home insurance policies.",
    icon: network,
  },
  {
    title: "Seamless end-to-end claims support",
    desc: "Get your designs done quickly without delays in 24 hours",
    icon: endtoend,
  },
  {
    title:
      "Operate solely on statutory brokerage — absolutely no hidden charges",
    desc: "Get your designs done quickly without delays in 24 hours",
    icon: hidden,
  },
  {
    title: "Thousands of happy and loyal clients across the state",
    desc: "Get your designs done quickly without delays in 24 hours",
    icon: loyal,
  },
];

export default function TestimonialsAndWhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="font-montserrat">
      {/* SECTION 1: Testimonials (Sticky Parallax Section) */}
      <section className="sticky top-0 h-screen bg-white flex items-center justify-center  overflow-hidden z-10">
        <div className="max-w-7xl ">
          <h1 className="text-[52px] font-[500] leading-[52px] text-gray-900 mb-16 font-montserrat">
            Hear it from our users
          </h1>

          <div className="relative">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-14 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-black/30 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-100" />
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`rounded-3xl overflow-hidden ${
                    testimonial.hasBackground
                      ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                      : "border-[1px] border-red-300"
                  }`}
                  style={
                    !testimonial.hasBackground
                      ? {
                          background:
                            "linear-gradient(to bottom right, #ffffff 50%, #FFE7E6 100%)",
                        }
                      : {}
                  }
                >
                  {testimonial.hasBackground ? (
                    <div
                      className="relative h-full min-h-[450px] flex flex-col justify-between p-8"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${testimonial.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <p className="text-xl sm:text-2xl leading-relaxed font-light font-montserrat">
                        {testimonial.text}
                      </p>
                      <div className="mt-auto">
                        <p className="text-lg font-medium font-montserrat">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 flex flex-col h-full min-h-[450px]">
                      <div className="mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <p className="text-gray-800 text-base leading-relaxed flex-grow mb-6 font-montserrat">
                        {testimonial.text}
                      </p>
                      <div className="mt-auto">
                        <p className="text-gray-900 text-lg font-semibold font-montserrat">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-14 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-black/30 shadow-lg flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-100" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Choose Us (Sticky Parallax Section) */}
      <section
        className="sticky top-0 h-screen bg-[#341C1E] text-white px-6 md:px-20 py-16 overflow-hidden z-20 flex flex-col md:flex-row items-start justify-between gap-10"
        style={{ borderTopLeftRadius: "80px", borderTopRightRadius: "80px" }}
      >
        {/* Background circles */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#392221] rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-40 right-0 w-[40rem] h-[40rem] bg-[#3F2628] rounded-full translate-x-[25%] translate-y-[25%] pointer-events-none"></div>

        {/* Left Section */}
        <div className="md:w-3/7 flex flex-col justify-between h-full space-y-6 relative z-10">
          <div>
            <p className="text-gray-300 text-[18px] font-[400] mb-2">
              Why Choose Us?
            </p>
            <div className="w-44 border-t border-gray-400 mb-6"></div>
            <h2 className="text-[44px] font-medium leading-[57.2px]">
              Extensive presence across Kerala, including <br />
              Trivandrum, Kollam, Alappuzha, Ernakulam, <br />
              Kasaragod, and more
            </h2>
          </div>
          <div className="pt-10">
            <button className="bg-white text-[#c73c2f] font-medium rounded-3xl px-6 py-2 mt-4 hover:bg-[#ffeaea] transition-all">
              Book Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-4/7 mt-10 md:mt-0 space-y-6 relative z-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[rgba(78,70,69,0.5)] backdrop-blur-[2px] rounded-[36px] p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#c73c2f] rounded-xl flex-shrink-0">
                <img
                  src={item.icon}
                  alt="feature icon"
                  className="w-[40px] h-[40px] object-contain"
                />
              </div>
              <div className="w-px bg-gray-400 h-[90px]"></div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-[24px] font-medium leading-[33.6px] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[16px] font-normal leading-[24px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
