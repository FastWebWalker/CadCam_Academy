import React, { useState } from "react";
import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import QuestionItem from "./QuestionsItem";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsData = [
    {
      question: "What materials can be used for milling?",
      answer:
        "We work with zirconium (ZrO2), plastic (PMMA), wax (WAX), titanium (Ti), cobalt-chrome (CoCr), and also create individual titanium abutments (Premill). We use modern CAD/CAM software solutions that allow us to create the most accurate 3D models and perform complex engineering calculations.",
    },
    {
      question: "What services does the CADCAM Energy milling center provide?",
      answer:
        "Our CADCAM Energy milling center provides comprehensive milling services for various materials and industrial applications.",
    },
    {
      question: "Do you work 24/7?",
      answer:
        "Please contact us for our current operating hours and availability.",
    },
    {
      question: "Is there a warranty on the products?",
      answer:
        "Yes, we offer warranty coverage on our products. Please contact us for specific warranty terms and conditions.",
    },
    {
      question: "How quickly is the order fulfilled?",
      answer:
        "Order fulfillment times vary based on complexity and material requirements. Contact us for a specific timeline for your project.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-white text-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={"frequently"}
          titleSecondPart={"asked questions"}
          titlePl={20}
          isDescription={true}
          description={
            "Check out the most frequently asked questions from our customers and maybe you can find the answer for yourself!"
          }
          inView={true}
        />
        <div className="w-full mx-auto mt-10">
          {questionsData.map((item, index) => (
            <QuestionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
