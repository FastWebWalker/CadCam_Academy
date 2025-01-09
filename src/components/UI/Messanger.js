import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../images/sections/messanger/Social Icons.svg";
import image2 from "../../images/sections/messanger/Vector.svg";
import image3 from "../../images/sections/messanger/Vector1.svg";
import image4 from "../../images/sections/messanger/phone.svg";

const MessengerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMessenger = () => {
    setIsOpen(!isOpen);
  };

  const messengerApps = [
    {
      name: "Phone",
      icon: <img src={image4} alt="phone" />,
      color: "bg-emerald-500",
      link: "tel:+380 67 611 66 77",
    },
    {
      name: "Messenger",
      icon: <img src={image2} alt="phone" />,
      color: "bg-blue-600",
      link: "https://www.messenger.com/t/1909464225772588/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0",
    },
    {
      name: "Viber",
      icon: <img src={image1} alt="phone" />,
      color: "bg-purple-600",
      link: "viber://chat?number=+380676116677",
    },
    {
      name: "Telegram",
      icon: <img src={image3} alt="phone" />,
      color: "bg-sky-500",
      link: "https://t.me/CadCamEnergy",
    },
  ];

  return (
    <div className="fixed bottom-4 right-0 z-50">
      <motion.div
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}>
        {/* Main toggle button */}

        <button
          onClick={toggleMessenger}
          className={`lg:w-[68px] lg:h-[45px] w-[58px] h-[35px] py-[6.5px] pl-[21px] pr-[15px] rounded-l-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? "bg-white" : "bg-red-600 pr-1 pt-1"
          }`}>
          {isOpen ? (
            <motion.svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              whileHover={{ rotate: 180 }}>
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ rotate: 360 }}>
              <path
                d="M5.33333 8.50002L13.4768 14.6497L13.4796 14.652C14.3838 15.3151 14.8362 15.6468 15.3317 15.775C15.7696 15.8883 16.23 15.8883 16.668 15.775C17.1639 15.6467 17.6176 15.314 18.5234 14.6497C18.5234 14.6497 23.7468 10.6413 26.6667 8.50002M4 21.5669V11.4336C4 9.94014 4 9.19285 4.29065 8.62242C4.54631 8.12065 4.95396 7.713 5.45573 7.45734C6.02616 7.16669 6.77345 7.16669 8.26693 7.16669H23.7336C25.2271 7.16669 25.9728 7.16669 26.5432 7.45734C27.045 7.713 27.454 8.12065 27.7096 8.62242C28 9.19229 28 9.93868 28 11.4292V21.5715C28 23.062 28 23.8073 27.7096 24.3772C27.454 24.879 27.045 25.2873 26.5432 25.543C25.9733 25.8334 25.228 25.8334 23.7375 25.8334H8.26255C6.77199 25.8334 6.0256 25.8334 5.45573 25.543C4.95396 25.2873 4.54631 24.879 4.29065 24.3772C4 23.8068 4 23.0604 4 21.5669Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </button>

        {/* Messenger apps */}
        <motion.div
          className="absolute bottom-full lg:right-5 right-[14px] mb-4 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isOpen
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20, display: "none" }
          }
          transition={{ duration: 0.3 }}>
          {messengerApps.map((app, index) => (
            <motion.div
              key={index}
              className={`items-center gap-2`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}>
              <a
                href={app.link}
                className={`lg:w-[58px] lg:h-[58px] w-[48px] h-[48px] ${app.color} rounded-full flex items-center justify-center text-white transition-transform`}
                target="_blank"
                rel="noopener noreferrer">
                {app.icon}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MessengerComponent;
