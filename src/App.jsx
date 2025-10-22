import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import Home from "./components/Pages/Home/Home";
import "./index.css";
import Footer from "./components/Common/Footer";
import FeaturesAndHowItWorks from "./components/Pages/Home/FeaturesAndHowItWorks";
import Toaster from "./components/Common/Toaster";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <Toaster /> {/* <-- add this here */}
      </div>
    </Router>
  );
}

export default App;
