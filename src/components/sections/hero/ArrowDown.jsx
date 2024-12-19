import arrowDown from "../../../images/sections/hero/arrow-down.svg";

export default function ArrowDown() {
  return (
    <div className="absolute bottom-0 right-0 w-[13.88vw] h-[13.88vw] bg-transparent border-[1px] border-[#C7C7C7] flex items-center justify-center rounded-full">
      <img src={arrowDown} alt="arrow-down" />
    </div>
  );
}
