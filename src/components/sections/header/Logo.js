import logo from "../../../images/sections/header/logo.svg";
export default function Logo({ className }) {
  return (
    <div className="flex-shrink-0  mr-4 last:mr-0">
      <a href="/" className="flex">
        <img src={logo} alt="Logo" className={`h-9 w-auto ${className}`} />
      </a>
    </div>
  );
}
