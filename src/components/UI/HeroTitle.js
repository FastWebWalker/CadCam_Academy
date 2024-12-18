export default function HeroTitle({ children }) {
  return (
    <h1 className="xl:text-[90px] lg:text-[70px] md:text-[50px] md:leading-[1.2] text-[40px] uppercase tracking-wide lg:leading-[1.0] text-white">
      {children}
    </h1>
  );
}
