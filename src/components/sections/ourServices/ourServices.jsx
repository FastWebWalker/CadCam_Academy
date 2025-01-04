import React from "react";
import Button from "../../UI/Button";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import SectionHeader from "../../UI/SectionHeader";
import ServicesItem from "./ServicesItem";
import image1 from "../../../images/sections/ourServices/01.png";
import image2 from "../../../images/sections/ourServices/02.png";
import image3 from "../../../images/sections/ourServices/03.png";
import image4 from "../../../images/sections/ourServices/04.png";
import image5 from "../../../images/sections/ourServices/05.png";
import image6 from "../../../images/sections/ourServices/06.png";

const servicesData = [
  {
    id: "01",
    title: "CAD Modeling",
    description:
      "We model structures of any complexity. Modeling on stumps and structures on implants.",
    image: image1,
  },
  {
    id: "02",
    title: "Milling",
    description:
      "Zirconium (ZrO2), Plastic (PMMA), Wax (WAX), Titanium (Ti), Cobalt chromium (CoCr), Individual titanium abutment (PreMill).",
    image: image2,
  },
  {
    id: "03",
    title: "Grinding",
    description:
      "Lithium disilicate blocks, Feldspar blocks, Hybrid ceramic (composite) blocks.",
    image: image3,
  },
  {
    id: "04",
    title: "Pressing",
    description: "Lithium disilicate Li-si.",
    image: image4,
  },
  {
    id: "05",
    title: "3D Printing",
    description:
      "Models, Burn-out wax, Temporary, Artificial gums, Base, Caps / templates.",
    image: image5,
  },
  {
    id: "06",
    title: "Laser Sintering",
    description: "(SLM) Cobalt chrome CoCr (Bego).",
    image: image6,
  },
];

const DescriptionPart = () => {
  return (
    <div className="flex flex-col justify-between text-[#111111]">
      <Description>
        Learn more about our services to take full advantage of our
        capabilities!
      </Description>
      <div className="flex justify-end gap-4 mt-8">
        <Button variant="black-red">Get a price</Button>
        <Button variant="red-white">Make an order</Button>
      </div>
    </div>
  );
};

export default function OurServices() {
  return (
    <section className="bg-white text-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={"OUR"}
          titleSecondPart={"Services"}
          isDescription={false}
          descriptionPart={<DescriptionPart />}
          textIsWhite={false}
          titlePl={40}
          inView={true}
        />
        <div className="mt-12">
          {servicesData.map((service) => (
            <ServicesItem
              key={service.id}
              number={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
