import React from "react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Christine Davis",
      role: "CBO of Privity",
      description:
        "Christine empowers individuals to create balance by blending mindfulness practices with goal-setting techniques.",
      imageUrl:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Emily Martin",
      role: "CEO of Privity",
      description:
        "With over 10 years of experience, Emily helps clients achieve focus and self-assurance through actionable strategies.",
      imageUrl:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-8 font-montserrat">
      <div className="w-full max-w-10xl bg-[#F3E1E1] rounded-[50px] p-10">
        <h1 className="text-[40px] leading-[56px] font-medium text-center mb-16 font-montserrat">
          Meet <span className="text-red-600">Our Team</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-1 text-left">
                <h2 className="text-[30px] font-[500] text-gray-800 mb-2">
                  {member.name}
                </h2>
                <p className="text-gray-500 text-[14px] font-[400] mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-[16px] font-[400] leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="flex-shrink-0">
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
