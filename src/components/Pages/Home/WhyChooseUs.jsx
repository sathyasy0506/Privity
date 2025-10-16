import { FaRunning } from "react-icons/fa";

// Data JSON at the top
const features = [
  {
    title: "A strong network of 300+ Point of Sales (POS) agent",
    desc: "Protect your biggest investment with our reliable, comprehensive, and trusted home insurance policies.",
  },
  {
    title: "Seamless end-to-end claims support",
    desc: "Get your designs done quickly without delays in 24 hours",
  },
  {
    title:
      "Operate solely on statutory brokerage — absolutely no hidden charges",
    desc: "Get your designs done quickly without delays in 24 hours",
  },
  {
    title: "Thousands of happy and loyal clients across the state",
    desc: "Get your designs done quickly without delays in 24 hours",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative flex flex-col md:flex-row items-start justify-between bg-[#341C1E] text-white px-6 md:px-20 py-16 font-montserrat gap-10 overflow-hidden">
      {/* Top-left and bottom-right circles */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#392221] rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-[40rem] h-[40rem] bg-[#3F2628] rounded-full translate-x-[25%] translate-y-[25%] pointer-events-none"></div>

      {/* Left Section */}
      <div className="md:w-3/7 flex flex-col justify-between h-full space-y-6 relative z-10">
        <div>
          <p className="text-gray-300 text-[18px] font-[400] leading-[27px] mb-2">
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
            className="bg-[rgba(78,70,69,0.5)] backdrop-blur-[2px] rounded-[36px] p-6 flex items-center space-x-4 gap-4"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#c73c2f] rounded-xl flex-shrink-0">
              <FaRunning className="text-white text-[25px]" />
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-400 h-[90px]"></div>

            {/* Text */}
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
  );
}
