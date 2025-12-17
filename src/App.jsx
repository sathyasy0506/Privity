// App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

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

// blog imports
import { BlogListing } from "./components/Pages/blog/BlogListing";
import { BlogPost } from "./components/Pages/blog/BlogPost"; // uncommented - keep named import as in your codebase

// Wrapper to handle blog list route + navigation to slug
function BlogListingPage() {
  const navigate = useNavigate();

  const handleBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <BlogListing onBlogClick={handleBlogClick} />;
}

// Wrapper to handle single blog route + back button
function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/blogs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <BlogPost slug={slug} onBack={handleBack} />;
}

function App() {
  const [isEstimateOpen, setEstimateOpen] = useState(false);
  const [isLocationsOpen, setLocationsOpen] = useState(false);

  // Listen for fallback global event dispatched by components that can't/weren't wired with props
  // e.g. WhatWeOffer fallback: window.dispatchEvent(new CustomEvent('openEstimate'))
  useEffect(() => {
    const openHandler = () => setEstimateOpen(true);
    window.addEventListener("openEstimate", openHandler);
    return () => window.removeEventListener("openEstimate", openHandler);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        {/* Sticky bar (mobile) — pass handler */}
        <StickyEstimateBar
          onOpenEstimate={() => setEstimateOpen(true)}
          onOpenLocations={() => setLocationsOpen(true)}
        />

        {/* Modals (controlled at App level) */}
        <EstimateModal
          isOpen={isEstimateOpen}
          onClose={() => setEstimateOpen(false)}
        />
        <LocationModal
          isOpen={isLocationsOpen}
          onClose={() => setLocationsOpen(false)}
        />

        {/* Main content area - pass explicit openEstimate prop to Home so children (WhatWeOffer) can call directly */}
        <div className="pt-16">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenEstimate={() => setEstimateOpen(true)} />}
            />
            <Route path="/test" element={<TestimonialsAndWhyChooseUs />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Blog routes */}
            <Route path="/blogs" element={<BlogListingPage />} />
            <Route path="/blogs/:slug" element={<BlogPostPage />} />
          </Routes>
        </div>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
