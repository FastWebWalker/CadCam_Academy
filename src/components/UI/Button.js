// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Button.css";

// // // const ArrowIcon = ({ variant }) => {
// // //   const getIconColor = () => {
// // //     switch (variant) {
// // //       case "red-white":
// // //         return "arrow-icon-white-red";
// // //       case "white-white":
// // //         return "arrow-icon-black";
// // //       case "black-red":
// // //         return "arrow-icon-black-white";
// // //       default:
// // //         return "arrow-icon-black";
// // //     }
// // //   };

// // //   return (
// // //     <svg
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       className={`arrow-icon ${getIconColor()}`}>
// // //       <path
// // //         fillRule="evenodd"
// // //         clipRule="evenodd"
// // //         d="M17.4525 6.54748C17.7091 6.79082 17.7146 7.19067 17.4647 7.44059L7.46471 17.4406C7.21479 17.6905 6.80413 17.6958 6.54746 17.4525C6.29079 17.2092 6.28532 16.8093 6.53523 16.5594L16.5352 6.55939C16.7851 6.30947 17.1958 6.30414 17.4525 6.54748Z"
// // //       />
// // //       <path
// // //         fillRule="evenodd"
// // //         clipRule="evenodd"
// // //         d="M6.35132 6.99999C6.35132 6.65118 6.64173 6.36841 6.99997 6.36841H17C17.3582 6.36841 17.6486 6.65118 17.6486 6.99999V17C17.6486 17.3488 17.3582 17.6316 17 17.6316C16.6417 17.6316 16.3513 17.3488 16.3513 17V7.63157H6.99997C6.64173 7.63157 6.35132 7.3488 6.35132 6.99999Z"
// // //       />
// // //     </svg>
// // //   );
// // // };

// // // const Button = ({
// // //   useLink,
// // //   to,
// // //   href,
// // //   children,
// // //   className,
// // //   variant = "default", // 'default', 'red', 'black'
// // //   outlined = false,
// // //   withoutArrow = false,
// // // }) => {
// // //   const baseClasses =
// // //     "inline-flex justify-center text-white bg-red-800 items-center gap-[6px] rounded-[30px] px-[20px] py-[9px] font-normal cursor-pointer transition-all duration-300";

// // //   const getVariantClasses = () => {
// // //     if (outlined) {
// // //       return "bg-transparent border border-white text-white hover:bg-white hover:text-black";
// // //     }

// // //     switch (variant) {
// // //       case "red-white":
// // //         return "bg-red-800 border border-white text-white hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700";
// // //       case "white-white":
// // //         return "bg-white text-black border border-white hover:bg-transparent hover:text-white hover:border hover:border-white";
// // //       case "black-red":
// // //         return "bg-transparent text-black border border-black hover:bg-redCustom hover:text-white hover:border hover:border-redCustom";
// // //       default:
// // //         return "bg-white text-black border border-white hover:bg-transparent hover:text-white hover:border hover:border-white";
// // //     }
// // //   };

// // //   const combinedClasses = `${baseClasses} ${getVariantClasses()} ${
// // //     className || ""
// // //   }`;

// // //   if (useLink) {
// // //     return (
// // //       <Link to={to} className={combinedClasses}>
// // //         <span>{children}</span>
// // //         <ArrowIcon variant={variant} />
// // //       </Link>
// // //     );
// // //   }

// // //   return (
// // //     <a
// // //       href={href}
// // //       className="flex justify-between items-center border-[0.5px] border-white rounded-[30px] "
// // //       target="_blank"
// // //       rel="noopener noreferrer">
// // //       <div className={combinedClasses}>
// // //         <span>{children}</span>
// // //       </div>
// // //       {withoutArrow ? (
// // //         ""
// // //       ) : (
// // //         <div className="p-[8px] pl-0">
// // //           <ArrowIcon variant={variant} />
// // //         </div>
// // //       )}
// // //     </a>
// // //   );
// // // };

// // // export default Button;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const ArrowIcon = ({ variant }) => {
// //   const getIconColor = () => {
// //     switch (variant) {
// //       case "red-white":
// //         return "arrow-icon-white-red";
// //       case "white-white":
// //         return "arrow-icon-black";
// //       case "black-red":
// //         return "arrow-icon-black-white";
// //       default:
// //         return "arrow-icon-black";
// //     }
// //   };

// //   return (
// //     <svg
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       xmlns="http://www.w3.org/2000/svg"
// //       className={`arrow-icon ${getIconColor()}`}>
// //       <path
// //         fillRule="evenodd"
// //         clipRule="evenodd"
// //         d="M17.4525 6.54748C17.7091 6.79082 17.7146 7.19067 17.4647 7.44059L7.46471 17.4406C7.21479 17.6905 6.80413 17.6958 6.54746 17.4525C6.29079 17.2092 6.28532 16.8093 6.53523 16.5594L16.5352 6.55939C16.7851 6.30947 17.1958 6.30414 17.4525 6.54748Z"
// //       />
// //       <path
// //         fillRule="evenodd"
// //         clipRule="evenodd"
// //         d="M6.35132 6.99999C6.35132 6.65118 6.64173 6.36841 6.99997 6.36841H17C17.3582 6.36841 17.6486 6.65118 17.6486 6.99999V17C17.6486 17.3488 17.3582 17.6316 17 17.6316C16.6417 17.6316 16.3513 17.3488 16.3513 17V7.63157H6.99997C6.64173 7.63157 6.35132 7.3488 6.35132 6.99999Z"
// //       />
// //     </svg>
// //   );
// // };

// // const Button = ({
// //   useLink,
// //   to,
// //   href,
// //   children,
// //   className,
// //   variant = "default",
// //   outlined = false,
// //   withoutArrow = false,
// // }) => {
// //   const baseClasses =
// //     "inline-flex justify-center text-white bg-red-800 items-center gap-[6px] rounded-[30px] px-[20px] py-[9px] font-normal cursor-pointer transition-all duration-300";

// //   const getVariantClasses = () => {
// //     if (outlined) {
// //       return "bg-transparent border border-white text-white hover:bg-white hover:text-black";
// //     }

// //     switch (variant) {
// //       case "red-white":
// //         return "bg-red-800 border border-white text-white hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700";
// //       case "white-white":
// //         return "bg-white text-black border border-white hover:bg-transparent hover:text-white hover:border hover:border-white";
// //       case "black-red":
// //         return "bg-transparent text-black border border-black hover:bg-redCustom hover:text-white hover:border hover:border-redCustom";
// //       default:
// //         return "bg-white text-black border border-white hover:bg-transparent hover:text-white hover:border hover:border-white";
// //     }
// //   };

// //   const combinedClasses = `${baseClasses} ${getVariantClasses()} ${
// //     className || ""
// //   }`;

// //   if (useLink) {
// //     return (
// //       <Link to={to} className={combinedClasses}>
// //         <span>{children}</span>
// //         <ArrowIcon variant={variant} />
// //       </Link>
// //     );
// //   }

// //   return (
// //     <a
// //       href={href}
// //       className="w-[13.33vw] flex items-center border-[0.5px] border-white rounded-[30px] group transition-all duration-300 hover:justify-between"
// //       target="_blank"
// //       rel="noopener noreferrer">
// //       <div
// //         className={`${combinedClasses} w-[80%] group-hover:w-full group-hover:justify-start transition-all duration-300`}>
// //         <span>{children}</span>
// //       </div>
// //       {!withoutArrow && (
// //         <div className="absolute top-[20%] right-[20px] p-[8px] pl-0 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:w-0 group-hover:p-0">
// //           <ArrowIcon variant={variant} />
// //         </div>
// //       )}
// //     </a>
// //   );
// // };

// // export default Button;

// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// const Button = ({
//   useLink = false,
//   to,
//   href,
//   children,
//   className,
//   variant = "default",
//   onClick,
// }) => {
//   // Base classes for consistent button styling
//   const baseClasses =
//     "inline-flex items-center justify-between rounded-full px-6 py-3 font-medium transition-all duration-300 gap-2";

//   const getVariantClasses = () => {
//     switch (variant) {
//       case "make-order":
//         return `bg-black text-white hover:bg-white hover:text-black border border-black
//           ${className || ""}`;
//       case "get-in-touch":
//         return `bg-red-600 text-white hover:bg-white hover:text-red-600 border border-red-600
//           ${className || ""}`;
//       case "get-price":
//         return `bg-black text-white hover:bg-red-600 border border-black hover:border-red-600
//           ${className || ""}`;
//       default:
//         return `bg-black text-white hover:bg-white hover:text-black border border-black
//           ${className || ""}`;
//     }
//   };

//   const combinedClasses = `${baseClasses} ${getVariantClasses()}`;

//   const renderArrowIcon = () => <ArrowUpRight className="w-5 h-5" />;

//   if (useLink && to) {
//     return (
//       <Link to={to} className={combinedClasses}>
//         <span>{children}</span>
//         {renderArrowIcon()}
//       </Link>
//     );
//   }

//   if (href) {
//     return (
//       <a
//         href={href}
//         className={combinedClasses}
//         target="_blank"
//         rel="noopener noreferrer">
//         <span>{children}</span>
//         {renderArrowIcon()}
//       </a>
//     );
//   }

//   return (
//     <button onClick={onClick} className={combinedClasses}>
//       <span>{children}</span>
//       {renderArrowIcon()}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const SplitButton = ({
  useLink = false,
  to,
  href,
  children,
  className,
  onClick,
}) => {
  const containerClasses = `
    inline-flex items-stretch rounded-full bg-transparent border-[0.5px] border-[#979797]
    transition-all duration-300 ease-in-out
    ${className || ""}
  `;

  const contentClasses = `
    flex-1 bg-red-600 text-white px-8 py-3
    font-medium text-xl rounded-full
    flex items-center justify-center
    transition-all duration-300 ease-in-out
  `;

  const arrowClasses = `
    bg-transparent text-white px-4
    rounded-r-full
    flex items-center justify-center
    transition-all duration-300 ease-in-out
  `;

  const renderContent = () => (
    <>
      <div className={contentClasses}>{children}</div>
      <div className={arrowClasses}>
        <ArrowUpRight className="w-6 h-6" />
      </div>
    </>
  );

  if (useLink && to) {
    return (
      <Link to={to} className={containerClasses}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={containerClasses}
        target="_blank"
        rel="noopener noreferrer">
        {renderContent()}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={containerClasses}>
      {renderContent()}
    </button>
  );
};

export default SplitButton;
