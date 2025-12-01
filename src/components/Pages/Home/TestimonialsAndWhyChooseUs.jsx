import React, { useState, useEffect } from "react";
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
    description:
      "Protect your biggest investment with our reliable, comprehensive, and trusted home insurance policies.",
    icon: network,
  },
  {
    title: "Seamless end-to-end claims support",
    description: "Get your designs done quickly without delays in 24 hours",
    icon: endtoend,
  },
  {
    title:
      "Operate solely on statutory brokerage — absolutely no hidden charges",
    description: "Get your designs done quickly without delays in 24 hours",
    icon: hidden,
  },
  {
    title: "Thousands of happy and loyal clients across the state",
    description: "Get your designs done quickly without delays in 24 hours",
    icon: loyal,
  },
];

export default function TestimonialsAndWhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // initial state: 2 on small screens, 3 on md+
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return 3; // SSR fallback
    return window.innerWidth < 768 ? 2 : 3;
  });

  useEffect(() => {
    // listen for small screen changes (<=767px)
    const mq = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => {
      setVisibleCount(e.matches ? 2 : 3);
      // ensure currentIndex remains valid
      setCurrentIndex(
        (prev) =>
          ((prev % testimonials.length) + testimonials.length) %
          testimonials.length
      );
    };

    // set initial value
    setVisibleCount(mq.matches ? 2 : 3);

    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);
    } else {
      mq.addListener(handleChange);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleChange);
      } else {
        mq.removeListener(handleChange);
      }
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

  // compute visible testimonials for md+ (carousel behavior)
  const getVisibleTestimonials = () => {
    const count = Math.min(visibleCount, testimonials.length);
    const visible = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  const isMobile = visibleCount === 2; // used to select render mode

  return (
    <div className="font-montserrat">
      {/* SECTION 1: Testimonials (Sticky Parallax Section) */}
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10 -mt-40">
        <div className="max-w-[1320px] w-full px-6 md:px-0">
          <h1 className="md:text-[52px] text-[32px] md:font-[500] font-[600] leading-[52px] text-gray-900 mb-2 font-montserrat md:text-left text-center">
            Hear it from our users
          </h1>

          <div className="relative">
            {/* Prev Button - visible only on md+ */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-4 md:left-14 top-1/2 -translate-y-1/2 z-10
             w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30
             flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-100" />
            </button>

            {/* Testimonials Wrapper */}
            {/* Mobile: horizontal scroll (snap) to enable peek. md+: grid with 3 columns and carousel slice */}
            <div
              className={`w-full ${
                isMobile
                  ? "flex gap-6 overflow-x-auto md:hidden"
                  : "hidden md:grid md:grid-cols-3 md:gap-6"
              }`}
              style={
                isMobile
                  ? {
                      scrollSnapType: "x mandatory",
                      WebkitOverflowScrolling: "touch",
                    }
                  : {}
              }
            >
              {isMobile
                ? testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className={`rounded-3xl overflow-hidden flex-shrink-0 snap-start ${
                        testimonial.hasBackground
                          ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                          : "border-[1px] border-red-300 bg-white"
                      }`}
                      style={{
                        flex: "0 0 80%",
                        aspectRatio: "1 / 1", // SQUARE CARDS
                        maxHeight: 420,
                      }}
                    >
                      {/* SAME CARD CONTENT AS BEFORE */}
                      {testimonial.hasBackground ? (
                        <div
                          className="relative h-full flex flex-col justify-between p-6 md:p-8"
                          style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${testimonial.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <p className="text-lg sm:text-xl leading-relaxed font-light font-montserrat">
                            {testimonial.text}
                          </p>

                          <div className="mt-4 md:mt-0">
                            <div className="flex items-center gap-3">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <p className="text-base md:text-lg font-medium">
                                {testimonial.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-6 md:p-8 flex flex-col h-full bg-white">
                          <p className="text-gray-800 text-sm md:text-base leading-relaxed flex-grow mb-4 font-montserrat">
                            {testimonial.text}
                          </p>

                          <div className="mt-auto">
                            <div className="flex items-center gap-3">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <p className="text-gray-900 text-base md:text-lg font-semibold">
                                {testimonial.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                : // DESKTOP VERSION (unchanged)
                  visibleTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className={`rounded-3xl overflow-hidden ${
                        testimonial.hasBackground
                          ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                          : "border-[1px] border-red-300 bg-white"
                      }`}
                      style={{
                        aspectRatio: "1 / 1",
                        maxHeight: 420,
                      }}
                    >
                      {/* same desktop card content */}
                    </div>
                  ))}
            </div>

            {/* Next Button - visible only on md+ */}
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-4 md:right-14 top-1/2 -translate-y-1/2 z-10
             w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30
             shadow-lg flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-100" />
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
        className="sticky top-0 bg-[#341C1E] text-white px-6 md:px-20 py-6 overflow-hidden z-20 flex flex-col md:flex-row items-start justify-between gap-10"
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
            <h2 className="md:text-[44px] text-[26px] font-small md:leading-[57.2px]">
              Extensive presence across Kerala, including <br />
              Trivandrum, Kozhikode, Kollam, Alappuzha, Ernakulam, <br />
              Kasaragod, and more
            </h2>
          </div>
        </div>

        {/* Right Section */}
      </section>
    </div>
  );
}
