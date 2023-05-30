import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import InteriorDesign from "./components/InteriorDesign";
import Architecture from "./components/Architecture";
import Planning from "./components/Planning";
import OurServisAll from "./components/OurServisAll";

function App() {
  // setTimeout(function () {
  //   alert(
  //     "CLICK on the switch in the upper right corner of the page and select the required viewing mode: -clock, -day or -night."
  //     // "ТИЦЬКНИ на перемикач в правому верхньому куточку сторінки, та обери необхідний режим перегляду: -годинник, -денний або -нічний."
  //   );
  // }, 2000);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/design_project" element={<MainPage />} />
        <Route>
          <Route path="/interiordesign" element={<InteriorDesign />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/ourservis" element={<OurServisAll />} />
        </Route>

        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
