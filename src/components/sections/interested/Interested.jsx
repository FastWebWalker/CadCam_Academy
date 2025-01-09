// import React from "react";
// import ContentContainer from "../../UI/ContentContainer";
// import "./interested.css";
// import background from "../../../images/sections/interested/background.png";
// import Button from "../../UI/Button";
// import { useTranslation } from "react-i18next";

// export default function Interested() {
//   const { t } = useTranslation();
//   const text = t("interested.text");

//   return (
//     <section className="bg-[#111111] text-white py-[6.75vh] relative overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute bottom-[-50%] right-0 w-[36.52vw] h-[36.52vw] pointer-events-none">
//         <img
//           src={background}
//           alt="background"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* ContentContainer with overflow-hidden */}
//       <ContentContainer>
//         <div className="interested-text overflow-hidden mb-[3.4vh] lg:text-[3.35vw] md:text-[4vw] text-[26px] uppercase">
//           {text.split("").map((letter, index) => (
//             <span
//               key={index}
//               className="letter"
//               style={{
//                 animationDelay: `${index * 0.1}s`, // Slight delay for each letter
//               }}>
//               {letter === " " ? "\u00A0" : letter}
//             </span>
//           ))}
//         </div>
//         <Button variant="secondary" href={"https://order.cadcam.energy/login"}>
//           {t("buttons.placeAnOrder")}
//         </Button>
//       </ContentContainer>
//     </section>
//   );
// }

import React from "react";
import ContentContainer from "../../UI/ContentContainer";
import "./interested.css";
import background from "../../../images/sections/interested/background.png";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";

export default function Interested() {
  const { t } = useTranslation();
  const text = t("interested.text");

  // Split text into words and then letters while preserving word boundaries
  const words = text.split(" ");

  return (
    <section className="bg-[#111111] text-white py-[6.75vh] relative overflow-hidden">
      <div className="absolute bottom-[-50%] right-0 w-[36.52vw] h-[36.52vw] pointer-events-none">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <ContentContainer>
        <div className="interested-text overflow-hidden mb-[3.4vh] lg:text-[3.35vw] md:text-[4vw] text-[26px] uppercase">
          {words.map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              <span className="inline-flex">
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className="letter inline-block"
                    style={{
                      animationDelay: `${
                        (wordIndex * word.length + letterIndex) * 0.1
                      }s`,
                    }}>
                    {letter}
                  </span>
                ))}
              </span>
              {wordIndex < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <Button variant="secondary" href={"https://order.cadcam.energy/login"}>
          {t("buttons.placeAnOrder")}
        </Button>
      </ContentContainer>
    </section>
  );
}
