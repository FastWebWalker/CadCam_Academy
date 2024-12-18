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
      link: "tel:+0683853535",
    },
    {
      name: "Messenger",
      icon: <img src={image2} alt="phone" />,
      color: "bg-blue-600",
      link: "https://www.facebook.com/messages/t/191383417921128",
    },
    {
      name: "WhatsApp",
      icon: <img src={image1} alt="phone" />,
      color: "bg-purple-600",
      link: "tel:+0683853535",
    },
    {
      name: "Telegram",
      icon: <img src={image3} alt="phone" />,
      color: "bg-sky-500",
      link: "https://t.me/SmileEnergyGroup",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}>
        {/* Main toggle button */}
        <motion.button
          onClick={toggleMessenger}
          className={`bg-transparent m-1 rounded-full border-[0.5px] lg:w-[91px] lg:h-[91px] w-[71px] h-[71px] flex justify-center items-center ${
            isOpen ? "border-white" : "border-redCustom"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <button
            className={`lg:w-[67px] lg:h-[67px] w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors duration-200 ${
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
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotate: 360 }}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.9702 2.02977C27.1839 2.24345 27.1839 2.5899 26.9702 2.80358L13.6786 16.0952C13.4649 16.3089 13.1185 16.3089 12.9048 16.0952C12.6911 15.8816 12.6911 15.5351 12.9048 15.3214L26.1964 2.02977C26.4101 1.81609 26.7566 1.81609 26.9702 2.02977Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.9703 2.02978C27.1189 2.17842 27.1692 2.39905 27.0998 2.59745L18.6415 26.7641C18.5674 26.9759 18.3715 27.1209 18.1473 27.1301C17.9232 27.1392 17.7161 27.0106 17.625 26.8056L12.8771 16.1229L2.19445 11.375C1.98944 11.2839 1.86082 11.0769 1.86996 10.8527C1.87911 10.6286 2.02417 10.4327 2.23592 10.3586L26.4026 1.90024C26.601 1.8308 26.8216 1.88115 26.9703 2.02978ZM3.9001 10.9355L13.5139 15.2084C13.6377 15.2634 13.7367 15.3623 13.7917 15.4861L18.0645 25.0999L25.6915 3.30856L3.9001 10.9355Z"
                  fill="white"
                />
              </motion.svg>
            )}
          </button>
        </motion.button>

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
              className={` items-center gap-2`}
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
