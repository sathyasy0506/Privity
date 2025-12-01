import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import Home from "./components/Pages/Home/Home";
import "./index.css";
import Footer from "./components/Common/Footer";
import FeaturesAndHowItWorks from "./components/Pages/Home/FeaturesAndHowItWorks";
import Toaster from "./components/Common/Toaster";
import TestimonialsAndWhyChooseUs from "./components/Pages/Home/TestimonialsAndWhyChooseUs";
import ContactPage from "./components/Pages/Contact/Contact";

// new imports
import StickyEstimateBar from "./components/Common/StickyEstimateBar";
import EstimateModal from "./components/Common/EstimateModal";
import LocationModal from "./components/Common/LocationModal";

function App() {
  const [isEstimateOpen, setEstimateOpen] = useState(false);
  const [isLocationsOpen, setLocationsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        {/* Sticky bar (mobile) */}
        <StickyEstimateBar
          onOpenEstimate={() => setEstimateOpen(true)}
          onOpenLocations={() => setLocationsOpen(true)}
        />

        {/* Modals (mobile-only inside components) */}
        <EstimateModal
          isOpen={isEstimateOpen}
          onClose={() => setEstimateOpen(false)}
        />
        <LocationModal
          isOpen={isLocationsOpen}
          onClose={() => setLocationsOpen(false)}
        />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestimonialsAndWhyChooseUs />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
