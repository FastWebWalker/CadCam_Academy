import arrowDown from "../../../images/sections/hero/arrow-down.svg";

export default function ArrowDown() {
  return (
    <div className="absolute lg:bottom-0 bottom-[-15%] right-0 md:bottom-[-15%] md:w-[13.88vw] md:h-[13.88vw] w-[30vw] h-[30vw] bg-transparent border-[1px] border-[#C7C7C7] flex items-center justify-center rounded-full">
      <img src={arrowDown} alt="arrow-down" />
    </div>
  );
}
