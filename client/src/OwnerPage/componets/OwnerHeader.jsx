import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1C2735] ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
         <Link to="/property-owners" className="flex items-center space-x-2">
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-gray-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* <a href="https://assetsense.in/login" target="_blank" rel="noopener noreferrer">
            <button className="text-sm px-4 py-2 bg-white cursor-pointer rounded-md hover:bg-gray-100 transition">
              Log In
            </button>
            </a> */}
            <a href="#contact">
            <button className="text-sm px-4 py-2 cursor-pointer rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Start Free Trial
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden h-screen py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-500 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-col gap-2 mt-4 px-4">
                {/* <a href="https://assetsense.in/login" target="_blank" rel="noopener noreferrer">
                <button className="w-full cursor-pointer text-gray-100 text-sm px-4 py-2 cursor-pointer border rounded-md hover:bg-gray-100 transition">
                    Log In
                </button>
                </a> */}

                <a href="#contact">
                <button
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-full text-sm px-4 py-2 cursor-pointer cursor-pointer rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                    Start Free Trial
                </button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
