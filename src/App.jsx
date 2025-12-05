// App.jsx
import React, { useState } from "react";
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
import { BlogPost } from "./components/Pages/blog/BlogPost";

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

// App.jsx
function App() {
  const [isEstimateOpen, setEstimateOpen] = useState(false);
  const [isLocationsOpen, setLocationsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        <StickyEstimateBar
          onOpenEstimate={() => setEstimateOpen(true)}
          onOpenLocations={() => setLocationsOpen(true)}
        />

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

            {/* ✅ Use the wrapper components here */}
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
