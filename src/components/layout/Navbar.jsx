import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen, closeMenu }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomePage = currentPath === "/" || currentPath === "/home";
  
  const [isDark, setIsDark] = useState(false);

  const getLinkClass = (path) => {
    const isActive = currentPath === path || (path === '/home' && currentPath === '/');
    if (isActive) {
      return "bg-gradient-to-r from-blue-600 to-[#0091ff] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-blue-500/30";
    }
    return "text-gray-500 hover:text-gray-900 px-6 py-2.5 rounded-full font-medium transition-colors";
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "glass py-4 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/home" onClick={closeMenu} className="flex items-center">
          <span className="font-extrabold text-2xl text-[#1d7af0] tracking-tight">
            MedCare
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-white/60 backdrop-blur-md rounded-full p-1.5 border border-gray-100 shadow-sm">
          <Link to="/home" className={getLinkClass('/home')}>Trang chủ</Link>
          <Link to="/feature" className={getLinkClass('/feature')}>Tính năng</Link>
          <Link to="/about" className={getLinkClass('/about')}>Đội ngũ</Link>
          <Link to="/waitlist" className={getLinkClass('/waitlist')}>Tham gia chờ</Link>
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4 text-gray-700">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 hover:text-[#1d7af0] transition-colors"
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-[#1d7af0] transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4">
          <Link to="/home" onClick={closeMenu} className="font-medium text-lg text-[#1d7af0]">Trang chủ</Link>
          <Link to="/feature" onClick={closeMenu} className="font-medium text-lg text-gray-600 hover:text-gray-900">Tính năng</Link>
          <Link to="/about" onClick={closeMenu} className="font-medium text-lg text-gray-600 hover:text-gray-900">Đội ngũ</Link>
          <Link to="/waitlist" onClick={closeMenu} className="font-medium text-lg text-gray-600 hover:text-gray-900">Tham gia chờ</Link>
          <div className="h-px bg-gray-100 my-2"></div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { setIsDark(!isDark); closeMenu(); }}
              className="flex items-center gap-2 text-gray-600 font-medium"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />} {isDark ? "Giao diện sáng" : "Giao diện tối"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
