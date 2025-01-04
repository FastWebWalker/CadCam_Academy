import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";

export default function OurTeam() {
  return (
    <section className="bg-[#111111] py-[80px]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={"our team of"}
          titleSecondPart={"professionals"}
          isDescription={false}
          inView={true}
          textIsWhite={true}
          titlePl={40}
        />
      </ContentContainer>
    </section>
  );
}
