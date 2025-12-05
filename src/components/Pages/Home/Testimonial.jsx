// File: Testimonials.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ICONS used only in WhyChooseUs are NOT imported here

// TESTIMONIALS DATA
const testimonials = [
  {
    id: 1,
    name: "verified client",
    text: "They explained every detail clearly, no hidden costs. I finally feel confident about my insurance decisions.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: true,
  },
  {
    id: 2,
    name: "verified client",
    text: "Quick response, honest advice, and smooth renewal process. This is how insurance should feel.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: false,
  },
  {
    id: 3,
    name: "verified client",
    text: "They told me exactly what I needed for my claim, and once submitted, the reimbursement was processed without any stress. Their support made a tough time much easier.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasBackground: false,
  },
  // {
  //   id: 4,
  //   name: "Liam Carter",
  //   text: '"This platform has completely changed my workflow. Incredible!"',
  //   image:
  //     "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   hasBackground: false,
  // },
  // {
  //   id: 5,
  //   name: "Olivia Brown",
  //   text: '"Amazing service and excellent support. I feel more productive than ever!"',
  //   image:
  //     "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   hasBackground: false,
  // },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // responsive number of visible cards (1 on small screens, 3 on md+)
  const [visibleCount, setVisibleCount] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => {
      setVisibleCount(e.matches ? 1 : 3);
    };
    setVisibleCount(mq.matches ? 1 : 3);
    mq.addEventListener
      ? mq.addEventListener("change", handleChange)
      : mq.addListener(handleChange);

    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", handleChange)
        : mq.removeListener(handleChange);
    };
  }, []);

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
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="sticky top-0 h-screen bg-white flex items-center justify-center overflow-hidden z-10 font-montserrat">
      <div className="max-w-[1320px]">
        <h1 className="text-[52px] font-[500] leading-[52px] text-gray-900 mb-16">
          Hear it from our users
        </h1>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-10 md:left-14 top-1/2 -translate-y-1/2 -translate-x-4 z-10
             w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30
             flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-100" />
          </button>

          <div
            className={`grid grid-cols-1 md:grid-cols-${visibleCount} gap-6`}
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`rounded-3xl overflow-hidden mx-4 md:mx-0 ${
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
                    className="relative h-full min-h-[420px] flex flex-col justify-between p-8"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${testimonial.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <p className="text-xl sm:text-2xl leading-relaxed font-light">
                      {testimonial.text}
                    </p>
                    <div className="mt-auto">
                      <p className="text-lg font-medium">{testimonial.name}</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 flex flex-col h-full min-h-[420px]">
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <p className="text-gray-800 text-base leading-relaxed flex-grow mb-6">
                      {testimonial.text}
                    </p>
                    <div className="mt-auto">
                      <p className="text-gray-900 text-lg font-semibold">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-10 md:right-14 top-1/2 -translate-y-1/2 translate-x-4 z-10
             w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30
             shadow-lg flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-100" />
          </button>
        </div>

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
  );
}
