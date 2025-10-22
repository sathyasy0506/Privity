import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function TestimonialCarousel() {
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
    <div className="w-full min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[52px] sm:text-[52px] font-[500] leading-[52px] text-gray-900 mb-16 font-montserrat">
          Hear it from our users
        </h1>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-14 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-black/30 flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-100" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`rounded-3xl overflow-hidden ${
                  testimonial.id === 1
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                    : "border-[1px] border-red-300"
                }`}
                style={
                  testimonial.id !== 1
                    ? {
                        background:
                          "linear-gradient(to bottom right, #ffffff 50%, #FFE7E6 100%)",
                      }
                    : {}
                }
              >
                {testimonial.id === 1 ? (
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

          <button
            onClick={handleNext}
            className="absolute right-14 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-black/30 shadow-lg flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-100" />
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
    </div>
  );
}
