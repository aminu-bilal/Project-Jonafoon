import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactusPage";
import AboutUsPage from "./Pages/AboutusPage";
import ServicesPage from "./Pages/ServicesPage";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
