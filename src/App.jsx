import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import WaitlistPage from "./pages/WaitlistPage";

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="font-sans text-gray-800 bg-[#faf8ff] min-h-screen">
      <Navbar 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        closeMenu={closeMenu} 
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/feature" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}