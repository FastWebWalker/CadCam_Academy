// import NotFound from "./pages/not-found";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadCamEnergy from "./pages/CadCamEnergy";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CadCamEnergy />} />
          {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
