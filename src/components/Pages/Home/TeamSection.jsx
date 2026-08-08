import React from "react";
import chairman from "../../../assets/images/chairman.png";
import abhilash from "../../../assets/images/executive_director1.png";
import jacob from "../../../assets/images/executive_director2.png";
import bijo from "../../../assets/images/bijoBaby.png";

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
    {
      name: "Bijo Baby",
      role: "Executive Director | Privity Insurance Brokers Pvt Ltd",
      description:
        "With over 15 years of experience in the insurance industry, Bijo Baby served as Sales Manager at Star Health Insurance for 10 years. Recognized with 25 international awards and several domestic accolades, he is known for his leadership, client-focused approach, and expertise in delivering comprehensive insurance solutions.",
      imageUrl: bijo,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-[#faf0f0] to-[#f8e4e4] font-montserrat py-10 px-4 md:px-8">
      <div className="mx-auto w-full max-w-[1280px] rounded-[40px] bg-[#F3E1E1] p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-medium text-center mb-10 md:mb-12">
          Our <span className="text-[--color-primary]">Key Persons</span>
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {teamMembers.map((member, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="bg-white rounded-[32px] shadow-xl overflow-hidden flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-1 p-6 md:p-10">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3">
                      {member.name}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mb-5">
                      {member.role}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex justify-center items-center p-6 md:p-10">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full max-w-[320px] rounded-3xl object-cover"
                    />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-white rounded-[32px] shadow-xl overflow-hidden flex flex-col md:flex-row gap-5"
              >
                <div className="flex-1 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    {member.name}
                  </h2>
                  <p className="text-sm md:text-base text-gray-500 mb-5">
                    {member.role}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                    {member.description}
                  </p>
                </div>

                <div className="flex justify-center items-center p-6 md:p-8">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full max-w-[260px] md:max-w-[300px] rounded-3xl object-cover"
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
