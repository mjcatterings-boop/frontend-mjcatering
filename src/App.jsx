import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Locations from "./pages/Locations.jsx";
import QuoteBuilder from "./pages/QuoteBuilder.jsx";
import Contact from "./pages/Contact.jsx";
import TermsAndConditions from "./pages/TermsandCondition.jsx";


function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/get-quote" element={<QuoteBuilder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
