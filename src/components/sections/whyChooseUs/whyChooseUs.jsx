import React from "react";
import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import { useInView } from "react-intersection-observer";
import WhyChooseUsItem from "./whyChooseUsItem";
import image1 from "../../../images/sections/whyChooseUs/1.svg";
import image2 from "../../../images/sections/whyChooseUs/2.svg";
import image3 from "../../../images/sections/whyChooseUs/3.svg";
import image4 from "../../../images/sections/whyChooseUs/4.svg";
import image5 from "../../../images/sections/whyChooseUs/5.svg";
import image6 from "../../../images/sections/whyChooseUs/6.svg";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative bg-[#111111] text-white py-[6.75vh]" ref={ref}>
      <ContentContainer>
        <SectionHeader
          titleFirstPart={"why"}
          titleSecondPart={"choose us?"}
          description={
            "We provide an individual approach to each client, guaranteeing high-quality service and effective solutions. By choosing us, you will get a reliable partner who will help you achieve your goals."
          }
          isDescription={true}
          inView={inView}
          titlePl={"lg:pl-[25%]"}
          textIsWhite={true}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-x-[10vw] gap-y-[6.4vh] justify-between mt-8">
          <WhyChooseUsItem
            icon={image1}
            title={<>Innovative Dental Solutions</>}
            description="We use modern CAD/CAM software solutions that allow us to create the most accurate 3D models and perform complex engineering calculations. Thanks to innovative approaches, we provide high-quality design that meets modern energy industry standards."
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image2}
            title={
              <>
                Experienced<br></br>Team
              </>
            }
            description="Our engineers and designers have many years of experience in the energy sector. We are constantly improving our skills to offer the best solutions. Every project we undertake is carried out by a team of professionals who understand the specifics of your industry."
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image3}
            title={
              <>
                Individual<br></br>Approach
              </>
            }
            description="We believe that every client is unique, so we offer personalized solutions that take into account all your needs, goals and constraints. Together with you, we develop the optimal strategy that will allow you to achieve maximum results."
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image4}
            title={
              <>
                Modern New<br></br>Equipment
              </>
            }
            description="Our milling center is equipped with the most modern equipment that meets leading standards of accuracy. Thanks to the use of innovative technologies and advanced solutions in the field of material processing, we ensure impeccable quality of each product."
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image5}
            title={
              <>
                Work with all Types<br></br>of Materials
              </>
            }
            description="Zirconium, plastic, wax, titanium, cobalt-chromium, lithium disilicate are just some of the materials we successfully work with. Our team has extensive experience working with a variety of materials, which allows us to find optimal solutions for each project."
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image6}
            title={
              <>
                Support at <br></br>Every Stage
              </>
            }
            description="We don't just complete a project and hand it over to the client. Our team stays with you throughout the entire implementation process: from the first sketch to implementation and technical support. You can be sure that you will receive help at any time."
            inView={inView}
          />
        </div>
      </ContentContainer>
    </section>
  );
}
