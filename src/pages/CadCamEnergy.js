// import ChooseSection from "../components/sections/choose/ChooseSection";

// import FounderSection from "../components/sections/founder/FounderSection";
// import GallerySection from "../components/sections/gallery/GallerySection";

import HeroSection from "../components/sections/hero/HeroSection";
import NumbersSection from "../components/sections/numbers/NumbersSection";
import OurEquipment from "../components/sections/ourEquipment/OurEquipment";
import OurGallery from "../components/sections/ourGallery/ourGallery";
import OurServices from "../components/sections/ourServices/ourServices";
import OurTeam from "../components/sections/ourTeam/OurTeam";
// import PopularSection from "../components/sections/popular/PopularSection";
import ReviewsSection from "../components/sections/reviews/ReviewsSection";
// import StoreSection from "../components/sections/store/StoreSection";
import TrustedSection from "../components/sections/trusted/TrustedSection";
import WhyChooseUs from "../components/sections/whyChooseUs/whyChooseUs";
import Questions from "../components/sections/questions/Questions";
import Interested from "../components/sections/interested/Interested";

export default function CadCamEnergy() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <NumbersSection />
      <WhyChooseUs />
      <OurServices />
      <OurTeam />
      <OurEquipment />
      <ReviewsSection />
      <OurGallery />
      <Questions />
      <Interested />
      {/* <ChooseSection />
      <TrustedSection />
      <ReviewsSection />
      <StoreSection />
      <PopularSection />
      <FounderSection />
      <GallerySection /> */}
    </>
  );
}
