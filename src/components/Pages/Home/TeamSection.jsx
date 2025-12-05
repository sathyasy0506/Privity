import React from "react";
import chairman from "../../../assets/images/chairman.png";
import abhilash from "../../../assets/images/executive_director1.png";
import jacob from "../../../assets/images/executive_director2.png";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. J Retnakumar",
      role: "Chairman",
      description:
        "Dr. J Retnakumar, Chairman, brings over 25 years of experience in the insurance sector and is known for his positive demeanor and “can do” spirit. He served as Head of Oman Operations at New India Assurance Co. Ltd., leading it to become the top foreign insurance brand in Oman in 2009. An award-winning leader, he has designed innovative insurance covers and safety campaigns in India and Oman. He is an Associate of the Insurance Institute of India and holds a CTP from AIMS, London. His visionary leadership continues to drive growth, innovation, and client-focused excellence.",
      imageUrl: chairman,
    },
    {
      name: "Jacob Siby Madathil CMA",
      role: "Executive Director | Privity Insurance Brokers Pvt Ltd",
      description:
        "Jacob Siby Madathil, CMA and founder of Madathil Financial Services, has over a decade of experience in insurance sector. With a strong background from J.P. Morgan & Chase and family business leadership, he is recognized for ethical practices, transparency, and client-first insurance solutions.",
      imageUrl: jacob,
    },
    {
      name: "Abhilash Edayilliyam",
      role: "Executive Director | Privity Insurance Brokers Pvt Ltd",
      description:
        "With 18+ years of experience in the insurance industry and an MBA in Commerce, Abhilash Edayilliyam has earned nationwide recognition for service excellence. He is known for his strategic leadership, strong client relationships, and commitment to delivering reliable insurance support.",
      imageUrl: abhilash,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center md:p-8 md:-mt-10 pb-8 font-montserrat">
      <div className="w-full max-w-10xl bg-[#F3E1E1] md:rounded-[50px] md:p-10 p-4">
        <h1 className="text-[40px] leading-[56px] font-medium text-center mb-8 mt-8 font-montserrat">
          Our <span className="text-[--color-primary]">Key Persons</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {teamMembers.map((member, index) => {
            // First card → use the updated layout
            if (index === 0) {
              return (
                <div
                  key={index}
                  className={`
                    relative bg-white rounded-3xl shadow-lg
                    flex flex-col-reverse md:flex-row
                    items-center gap-6 w-full overflow-hidden
                    md:col-span-2 max-w-7xl
                  `}
                >
                  {/* Content */}
                  <div className="p-8 text-left flex-1">
                    <h2 className="text-[30px] font-[500] text-gray-800 mb-2">
                      {member.name}
                    </h2>

                    <p className="text-gray-500 text-[14px] font-[400] mb-4">
                      {member.role}
                    </p>

                    <p className="text-gray-600 text-[16px] font-[400] leading-relaxed text-justify">
                      {member.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 flex justify-center w-full md:w-auto">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="object-cover object-top  w-64 h-80"
                    />
                  </div>
                </div>
              );
            }

            // Other cards → keep original layout
            return (
              <div
                key={index}
                className={`
                  bg-white rounded-3xl shadow-lg
                  flex flex-col-reverse md:flex-row
                  w-full overflow-hidden
                  max-w-3xl
                `}
              >
                {/* Content */}
                <div className="p-8 text-left md:flex-[7]">
                  <h2 className="text-[30px] font-[500] text-gray-800 mb-2">
                    {member.name}
                  </h2>

                  <p className="text-gray-500 text-[14px] font-[400] mb-4">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-[16px] font-[400] leading-relaxed text-justify">
                    {member.description}
                  </p>
                </div>

                {/* Image – 30%, bottom-right on desktop */}
                <div
                  className={`
    flex justify-center md:flex md:flex-[3]
    items-center md:items-end md:justify-end w-full
  `}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className={`
                      object-cover object-top
                      w-40 h-52 md:w-48 md:h-60
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
