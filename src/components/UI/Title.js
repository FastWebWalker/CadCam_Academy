

export default function Title({ firstPart, secondPart, className, pl }) {
  return (
    <div className="flex flex-col">
      <h2
        className={`font-normal lg:text-[64px] md:text-[44px] text-[32px] lg:leading-[65.35px] uppercase tracking-wide ${className}`}>
        {firstPart}
      </h2>
      <h2
        className={`pl-[${
          pl + "%"
        }] font-normal lg:text-[64px] md:text-[44px] text-[32px] lg:leading-[65.35px] uppercase tracking-wide whitespace-nowrap ${className}`}>
        {secondPart}
      </h2>
    </div>
  );
}
