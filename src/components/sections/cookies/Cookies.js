import Button from "../../UI/Button";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import x from "../../../images/sections/gallery/x.svg";
import { useState } from "react";

export default function Cookies() {
  const isNeedToBeShown = localStorage.getItem("isUsingCookies") ? false : true;
  const handleCloseCookies = () => {
    localStorage.setItem("isUsingCookies", false);
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(isNeedToBeShown);

  const handleAcceptCookies = () => {
    localStorage.setItem("isUsingCookies", true);
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed w-[100vw] bottom-0 left-0 bg-[#111111] z-[60] text-white md:py-[33px] py-[20px]  md:px-[30px] px-[20px]">
          <button className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40">
            <img
              src={x}
              onClick={handleCloseCookies}
              className="w-[28px] h-[28px]"
              alt="close-button"
            />
          </button>
          <ContentContainer className="flex justify-between items-center gap-[20px] md:flex-nowrap flex-wrap md:gap-[57px]">
            <div>
              <h4 className="mb-[16px] font-normal md:text-[24px] text-[20px]">
                Cookies Notice
              </h4>
              <Description className="md:text-[18px] max-w-[987px] text-[16px]">
                We use cookies to improve your browsing experience, analyze site
                traffic, and personalize content. By continuing to use our site,
                you agree to our use of cookies.
              </Description>
            </div>
            <div className="flex gap-[12px]">
              <div className="flex-grow-0">
                <button onClick={handleAcceptCookies}>
                  <Button withoutArrow>Accept</Button>
                </button>
              </div>

              <div className="flex-grow-0">
                <button onClick={handleCloseCookies}>
                  <Button
                    withoutArrow
                    variant="red-white"
                    onClick={handleCloseCookies}>
                    Decline
                  </Button>
                </button>
              </div>
            </div>
          </ContentContainer>
        </div>
      )}
    </>
  );
}
