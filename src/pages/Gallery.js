import { useEffect } from "react";
import Interested from "../components/sections/interested/Interested";
import ReviewsSection from "../components/sections/reviews/ReviewsSection";
import GallerySection from "../components/sections/gallery/GallerySection";
import HeroSection from "../components/sections/hero/HeroSection";
import backgroundImage from "../images/sections/gallery/b444316fd9a45a6ead1332b248406d6a.png";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs only once on component mount

  return (
    <>
      <HeroSection image={backgroundImage} />
      <GallerySection />
      <ReviewsSection />
      <Interested />
    </>
  );
}
