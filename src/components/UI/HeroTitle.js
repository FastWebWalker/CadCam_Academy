export default function HeroTitle({ children }) {
  return (
    <h1 className="xl:text-[96px] lg:text-[70px] md:text-[8vw] md:leading-[1.2] sm:text-[8vw] text-[40px] uppercase tracking-wide lg:leading-[1.0] text-white">
      {children}
    </h1>
  );
}
