// import NotFound from "./pages/not-found";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadCamEnergy from "./pages/CadCamEnergy";
import Layout from "./components/Layout";
import GalleryPage from "./pages/Gallery";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CadCamEnergy />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
