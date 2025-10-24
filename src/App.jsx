import React from "react";
import ComingSoon from "./components/Pages/Home/ComingSoon";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Common/Header";
// import Home from "./components/Pages/Home/Home";
// import "./index.css";
// import Footer from "./components/Common/Footer";
// import FeaturesAndHowItWorks from "./components/Pages/Home/FeaturesAndHowItWorks";
// import Toaster from "./components/Common/Toaster";
// import TestimonialsAndWhyChooseUs from "./components/Pages/Home/TestimonialsAndWhyChooseUs";

function App() {
  return (
    // <Router>
    //   <div className="min-h-screen">
    //     <Header />
    //     <div className="pt-16">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/test" element={<TestimonialsAndWhyChooseUs />} />
    //       </Routes>
    //     </div>
    //     <Footer />
    //     <Toaster /> {/* <-- add this here */}
    //   </div>
    // </Router>

    // Show only Coming Soon page
    <ComingSoon />
  );
}

export default App;
