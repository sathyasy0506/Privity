import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ICONS
import network from "../../../assets/icons/network.png";
import endtoend from "../../../assets/icons/endtoend.png";
import hidden from "../../../assets/icons/hidden.png";
import loyal from "../../../assets/icons/loyal.png";

// TESTIMONIALS DATA (same as before)
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

export default function TestimonialsAndWhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // initial visibleCount
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return 3;
    return window.innerWidth < 768 ? 2 : 3;
  });

  // ref for mobile scroll container
  const scrollRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => {
      setVisibleCount(e.matches ? 2 : 3);
      setCurrentIndex(
        (prev) =>
          ((prev % testimonials.length) + testimonials.length) %
          testimonials.length
      );
    };

    setVisibleCount(mq.matches ? 2 : 3);

    if (mq.addEventListener) mq.addEventListener("change", handleChange);
    else mq.addListener(handleChange);

    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", handleChange);
      else mq.removeListener(handleChange);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    // For desktop grid we don't scroll, desktop uses currentIndex to decide visible cards
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

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
  const isMobile = visibleCount === 2;

  // IntersectionObserver for mobile to update currentIndex when user scrolls/swipes
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const container = scrollRef.current;

    const options = {
      root: container,
      threshold: 0.6, // require ~60% visibility to consider it the active card
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idxAttr = entry.target.getAttribute("data-index");
          const idx = idxAttr ? Number(idxAttr) : 0;
          // ensure within bounds
          if (!Number.isNaN(idx)) setCurrentIndex(idx);
        }
      });
    }, options);

    // observe all testimonial-card children
    const cards = container.querySelectorAll(".testimonial-card");
    cards.forEach((card) => observer.observe(card));

    // Ensure currentIndex matches first visible card on mount
    // find any card currently intersecting
    // (optional: set to first intersecting if any)
    // cleanup
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, testimonials.length]);

  return (
    // OUTER WRAPPER provides scrollable space for parallax: > 100vh
    <div className="font-montserrat relative min-h-[40vh]">
      {/* SECTION 1: Testimonials — sticky but not full viewport height */}
      <section className="sticky top-0 h-[60vh] flex items-center justify-center overflow-visible z-20">
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

            <div
              ref={isMobile ? scrollRef : null}
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
                ? testimonials.map((testimonial, idx) => (
                    <div
                      key={testimonial.id}
                      data-index={idx} // 0-based index used by observer
                      className={`testimonial-card rounded-3xl overflow-hidden flex-shrink-0 snap-start ${
                        testimonial.hasBackground
                          ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                          : "border-[1px] border-red-300 bg-white"
                      }`}
                      style={{
                        flex: "0 0 80%",
                        aspectRatio: "1 / 1",
                        maxHeight: 420,
                      }}
                    >
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
                : visibleTestimonials.map((testimonial) => (
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
                      {/* Desktop card body — keep it simple here so layout stable */}
                      <div className="p-6 md:p-8 flex flex-col h-full">
                        <p className="text-sm md:text-base leading-relaxed flex-grow">
                          {testimonial.text}
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <p className="text-base md:text-lg font-semibold">
                            {testimonial.name}
                          </p>
                        </div>
                      </div>
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
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  // On desktop clicking dot should change visible testimonials (works via currentIndex)
                  // On mobile clicking should also scroll to that card if possible
                  setCurrentIndex(index);
                  if (isMobile && scrollRef.current) {
                    const container = scrollRef.current;
                    const card = container.querySelector(
                      `.testimonial-card[data-index='${index}']`
                    );
                    if (card) {
                      // smooth scroll the card into view in the container
                      // use scrollLeft calculation for consistent behavior
                      const left =
                        card.offsetLeft -
                        (container.clientWidth - card.clientWidth) / 2;
                      container.scrollTo({ left, behavior: "smooth" });
                    }
                  }
                }}
                className={`w-[10px] h-[10px] rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-[--color-primary]"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Choose Us — sticky too but different top so both can coexist */}
      <section
        className="sticky top-0 bg-[#341C1E] text-white px-6 md:px-20 pt-12 py-6 mt-2 overflow-hidden z-40 flex flex-col md:flex-row items-start justify-between gap-10"
        style={{ borderTopLeftRadius: "80px", borderTopRightRadius: "80px" }}
        aria-label="Why choose us sticky area"
      >
        {/* Background circles */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#392221] rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-40 right-0 w-[40rem] h-[40rem] bg-[#3F2628] rounded-full translate-x-[25%] translate-y-[25%] pointer-events-none" />

        {/* Left Section */}
        <div className="md:w-3/7 flex flex-col justify-between h-full space-y-6 relative z-10">
          <div>
            <p className="text-gray-300 text-[18px] font-[400] mb-2">
              Why Choose Us?
            </p>
            <div className="w-44 border-t border-gray-400 mb-6" />
            <h2 className="md:text-[44px] text-[26px] font-small md:leading-[57.2px]">
              Extensive presence across Kerala, including <br />
              Trivandrum, Kozhikode, Kollam, Alappuzha, Ernakulam, <br />
              Kasaragod, and more
            </h2>
          </div>
        </div>

        {/* Right Section (placeholder to fill visual balance)
        <div className="md:w-4/7 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/5">
              <div className="flex items-start gap-4">
                <img src={network} alt="network" className="w-10 h-10" />
                <div>
                  <h3 className="font-semibold">300+ POS agents</h3>
                  <p className="text-sm text-gray-200">
                    A strong on-ground network to support claims and assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5">
              <div className="flex items-start gap-4">
                <img src={endtoend} alt="endtoend" className="w-10 h-10" />
                <div>
                  <h3 className="font-semibold">End-to-end Claims</h3>
                  <p className="text-sm text-gray-200">
                    Seamless support through every step of your claim.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5">
              <div className="flex items-start gap-4">
                <img src={hidden} alt="no hidden" className="w-10 h-10" />
                <div>
                  <h3 className="font-semibold">No hidden charges</h3>
                  <p className="text-sm text-gray-200">
                    Transparent brokerage and pricing.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5">
              <div className="flex items-start gap-4">
                <img src={loyal} alt="loyal clients" className="w-10 h-10" />
                <div>
                  <h3 className="font-semibold">Loyal clients</h3>
                  <p className="text-sm text-gray-200">
                    Thousands of happy customers across the state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Spacer area after the sticky sections so content below flows naturally */}
      <div className="h-0" />
    </div>
  );
}
