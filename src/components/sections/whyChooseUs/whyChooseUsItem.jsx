import Description from "../../UI/Description";

export default function WhyChooseUsItem({ icon, title, description }) {
  return (
    <div className="text-white pt-[32px] flex flex-col items-start gap-4 md:max-w-[357px] border-t-[0.5px] border-[#979797]">
      <div className="flex items-center justify-center md:w-[90px] md:h-[90px] w-[50px] h-[50px] pb-[32px] pt-[25px]">
        <img src={icon} alt="icon-image" className="" />
      </div>
      <h2 className="text-[32px] font-light leading-10">{title}</h2>
      <Description>{description}</Description>
    </div>
  );
}
