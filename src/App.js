import "./App.css";
import HeroSection from "./components/sections/hero/HeroSection";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/sections/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeroSection />
    </BrowserRouter>
  );
}

export default App;
