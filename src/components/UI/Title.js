export default function Title({ children, className }) {
  return (
    <h2
      className={`font-normal lg:text-[54px] md:text-[44px] text-[32px] lg:leading-[65.35px] uppercase tracking-wide ${className}`}>
      {children}
    </h2>
  );
}
