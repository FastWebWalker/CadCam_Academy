// import ContentContainer from "../../UI/ContentContainer";
// import SectionHeader from "../../UI/SectionHeader";
// import Description from "../../UI/Description"; // Add this line to import the Description component
// import Button from "../../UI/Button"; // Add this line to import the Button component
// import image1 from "../../../images/sections/ourGallery/1.png";
// import image2 from "../../../images/sections/ourGallery/2.png";
// import image3 from "../../../images/sections/ourGallery/3.png";
// import image4 from "../../../images/sections/ourGallery/4.png";
// import image5 from "../../../images/sections/ourGallery/5.png";

// import React, { useEffect, useState } from "react";

// const InfiniteImageSlider = () => {
//   const [position, setPosition] = useState(0);

//   const images = [image1, image2, image3, image4, image5];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full overflow-hidden bg-white relative">
//       <div
//         className="flex"
//         style={{
//           transform: `translateX(-${position * 100}%)`,
//           transition: "none",
//           width: `${images.length * 100}%`,
//         }}>
//         {images.map((image, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img
//               src={image}
//               alt={`CAD CAM Equipment ${index + 1}`}
//               className="w-[348px] h-[400px] object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const DescriptionPart = () => {
//   return (
//     <div className="flex flex-col justify-between text-[#111111] items-end">
//       <Description>
//         Learn more about our equipment and make sure that we work with
//         high-quality equipment that guarantees excellent results!
//       </Description>
//       <Button variant="black-red" className="mt-8">
//         Buy a machine
//       </Button>
//     </div>
//   );
// };

// export default function OurGallery() {
//   return (
//     <section className="bg-white text-[#111111] py-[6.75vh]">
//       <ContentContainer>
//         <SectionHeader
//           titleFirstPart={"gallery of"}
//           titleSecondPart={"our works"}
//           titlePl={40}
//           isDescription={false}
//           descriptionPart={<DescriptionPart />}
//           inView={true}
//         />
//       </ContentContainer>

//       <InfiniteImageSlider />
//     </section>
//   );
// }

import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import Description from "../../UI/Description";
import Button from "../../UI/Button";
import image1 from "../../../images/sections/ourGallery/1.png";
import image2 from "../../../images/sections/ourGallery/2.png";
import image3 from "../../../images/sections/ourGallery/3.png";
import image4 from "../../../images/sections/ourGallery/4.png";
import image5 from "../../../images/sections/ourGallery/5.png";
import React from "react";

const InfiniteImageSlider = () => {
  const images = [image1, image2, image3, image4, image5];
  // Duplicate the images array to create seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden bg-white relative mt-8">
      <div className="flex animate-scroll">
        {duplicatedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 px-4">
            <img
              src={image}
              alt={`CAD CAM Equipment ${index + 1}`}
              className="w-[348px] h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-348px * 5));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

const DescriptionPart = () => {
  return (
    <div className="flex flex-col justify-between text-[#111111] items-end">
      <Description>
        Learn more about our equipment and make sure that we work with
        high-quality equipment that guarantees excellent results!
      </Description>
      <Button variant="black-red" className="mt-8">
        Buy a machine
      </Button>
    </div>
  );
};

export default function OurGallery() {
  return (
    <section className="bg-white text-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={"gallery of"}
          titleSecondPart={"our works"}
          titlePl={40}
          isDescription={false}
          descriptionPart={<DescriptionPart />}
          inView={true}
        />
      </ContentContainer>

      <InfiniteImageSlider />
    </section>
  );
}
