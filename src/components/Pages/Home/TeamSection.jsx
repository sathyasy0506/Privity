import React from "react";
import chairman from "../../../assets/images/chairman.png";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. J Retnakumar",
      role: "Chairman",
      description:
        "Dr. J Retnakumar, Chairman, brings over 25 years of experience in the insurance sector and is known for his positive demeanor and “can do” spirit. He served as Head of Oman Operations at New India Assurance Co. Ltd., leading it to become the top foreign insurance brand in Oman in 2009. An award-winning leader, he has designed innovative insurance covers and safety campaigns in India and Oman. He is an Associate of the Insurance Institute of India and holds a CTP from AIMS, London. His visionary leadership continues to drive growth, innovation, and client-focused excellence.",
      imageUrl: chairman,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center md:p-8 md:-mt-10  pb-8 font-montserrat">
      <div className="w-full max-w-10xl bg-[#F3E1E1] md:rounded-[50px] md:p-10 p-4">
        <h1 className="text-[40px] leading-[56px] font-medium text-center mb-8 mt-8 font-montserrat ">
          Our <span className="text-[--color-primary]">Key Persons</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
    bg-white rounded-3xl  shadow-lg
    flex flex-col-reverse md:flex-row
    items-center gap-6 w-full
    ${index === 0 ? "md:col-span-2 max-w-6xl" : "max-w-3xl"}
  `}
            >
              {/* Content - Left on web, below image on mobile */}
              <div className="flex-1 text-left p-8">
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

              {/* Image - Right on web, top on mobile */}
              <div className="flex-shrink-0 mb-4 md:mb-0 ">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-64 h-80 object-cover object-top rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
