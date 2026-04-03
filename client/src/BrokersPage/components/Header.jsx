import { useState } from "react";
import { FaBars, FaTimes, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0E3A6D] text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navbar */}
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/business-partner" className="flex items-center space-x-2">
            <div className="rounded-lg flex items-center justify-center">
              <img
                className="w-35 h-19 sm:w-28 sm:h-14 md:w-40 md:h-20 object-contain"
                src="/Assetsensefinallogo.webp"
                alt="Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-yellow-300 transition">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-yellow-300 transition">
              How It Works
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-yellow-300 transition">
              Benefits
            </a>

            <a
              href="https://assetsense.in/register"
              className="rounded-lg bg-blue-400 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-300"
            >
              Register as Business Partner
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 border-t border-white/20">
          <nav className="flex flex-col gap-4 px-4 py-6">
            
            <a
              href="#services"
              className="text-sm font-medium hover:text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>

            <a
              href="#benefits"
              className="text-sm font-medium hover:text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>

            <a
              href="https://assetsense.in/register"
              className="mt-2 w-full rounded-lg bg-yellow-400 px-5 py-3 text-center text-sm font-semibold text-black hover:bg-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Register as Business Partner
            </a>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;