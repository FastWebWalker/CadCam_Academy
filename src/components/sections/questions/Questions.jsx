import React, { useState } from "react";
import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import QuestionItem from "./QuestionsItem";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const questionsData = [
    {
      question: t("faq.questions.materials.question"),
      answer: t("faq.questions.materials.answer"),
    },
    {
      question: t("faq.questions.services.question"),
      answer: t("faq.questions.services.answer"),
    },
    {
      question: t("faq.questions.workingHours.question"),
      answer: t("faq.questions.workingHours.answer"),
    },
    {
      question: t("faq.questions.warranty.question"),
      answer: t("faq.questions.warranty.answer"),
    },
    {
      question: t("faq.questions.orderFulfillment.question"),
      answer: t("faq.questions.orderFulfillment.answer"),
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faqs" className="bg-white text-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("faq.title1")}
          titleSecondPart={t("faq.title2")}
          titlePl={"lg:pl-[20%]"}
          isDescription={true}
          description={t("faq.subtitle")}
          inView={true}
        />
        <div className="w-full mx-auto mt-10">
          {questionsData.map((item, index, arr) => {
            if (index === arr.length - 1) {
              return (
                <QuestionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isBorder={false}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              );
            } else {
              return (
                <QuestionItem
                  key={index}
                  isBorder={true}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              );
            }
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
