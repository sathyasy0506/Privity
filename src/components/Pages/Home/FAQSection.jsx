import React, { useState } from "react";
import { Plus } from "lucide-react"; // We'll animate the Plus icon into X

const faqs = [
  {
    question: "What is Insurance?",
    answer:
      "Insurance allows individuals and businesses to transfer the financial burden of potential losses to an insurance company.",
  },
  {
    question: "Why is Insurance Important?",
    answer:
      "Insurance can help prevent financial ruin in the face of unexpected events.",
  },
  {
    question: "What are the forms of Health Insurance available?",
    answer:
      "Key sales metrics to track include conversion rates, average deal size, customer acquisition cost, sales cycle length, and customer lifetime value.",
  },
  {
    question: "Why is Health Insurance important?",
    answer:
      "Insurance can help prevent financial ruin in the face of unexpected events.",
  },
  {
    question: "What kinds of Health Insurance plans are available?",
    answer:
      "Insurance can help prevent financial ruin in the face of unexpected events.",
  },
  {
    question: "What is cashless facility?",
    answer:
      "Insurance can help prevent financial ruin in the face of unexpected events.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white md:py-0 py-10 px-6 md:px-20 font-montserrat">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block border border-red-300 text-[--color-primary] px-5 py-1 rounded-full text-sm font-medium mb-6">
          FAQ's
        </div>

        <h2 className="md:text-[50px] text-[34px]  font-[500] text-[#000001] leading-tight mb-12">
          Find answers to the <br className="hidden md:block" /> most asked
          questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] border border-1 rounded-2xl p-6 flex flex-col shadow-sm transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg md:text-xl text-gray-900 font-medium">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ease-in-out ${
                    openIndex === index
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                >
                  <Plus className="w-6 h-6 text-gray-800 border border-gray-300 rounded-full p-1" />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base leading-relaxed text-left mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
