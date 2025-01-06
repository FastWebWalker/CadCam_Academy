import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import Description from "../../UI/Description";
import Button from "../../UI/Button";
import EquipmentItem from "./EquipmentItem";
import image1 from "../../../images/sections/ourEquipment/1.png";
import image2 from "../../../images/sections/ourEquipment/2.png";
import image3 from "../../../images/sections/ourEquipment/3.png";
import image4 from "../../../images/sections/ourEquipment/4.png";
import image5 from "../../../images/sections/ourEquipment/5.png";
import image6 from "../../../images/sections/ourEquipment/6.png";
import image7 from "../../../images/sections/ourEquipment/7.png";
import background from "../../../images/sections/ourEquipment/backroung.png";

const DescriptionPart = () => {
  return (
    <div className="flex flex-col justify-between text-[#111111] items-end">
      <Description>
        Learn more about our equipment and make sure that we work with
        high-quality equipment that guarantees excellent results!
      </Description>
      <Button variant="black-red" className="mt-8">
        Buy a machine
      </Button>
    </div>
  );
};

export default function OurEquipment() {
  const equipmentData = [
    {
      title: "ARUM 5X-200",
      image: image1,
    },
    {
      title: "ARUM 5X-300D",
      image: image2,
    },
    {
      title: "ARUM 5X-400",
      image: image3,
    },
    {
      title: "ARUM 5X-300Pro",
      image: image4,
    },
    {
      title: "ARUM 5X-450",
      image: image5,
    },
    {
      title: "ARUM 5X-500",
      image: image6,
    },
    {
      title: "ARUM 5X-500L",
      image: image7,
    },
  ];
  return (
    <section className="bg-white py-[6.75vh] text-[#111111] relative z-[1]">
      <div className="absolute bottom-0 right-0 opacity-100 z-[0]">
        <img src={background} alt="background" />
      </div>

      <ContentContainer>
        <SectionHeader
          titleFirstPart={"OUR"}
          titleSecondPart={"Equipment"}
          isDescription={false}
          descriptionPart={<DescriptionPart />}
          textIsWhite={false}
          titlePl={40}
          inView={true}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-x-[5vw] gap-y-[6.4vh] justify-between mt-8 z-[1]">
          {equipmentData.map((service) => (
            <EquipmentItem
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
