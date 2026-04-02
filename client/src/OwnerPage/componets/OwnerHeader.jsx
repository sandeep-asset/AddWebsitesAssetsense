import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <FaBuilding className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Asset Sense
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Log In
            </button>
            <button className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900"
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
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-col gap-2 mt-4 px-4">
                <a href="https://assetsense.in/login" target="_blank" rel="noopener noreferrer">
                <button className="w-full text-sm px-4 py-2 cursor-pointer border rounded-md hover:bg-gray-100 transition">
                    Log In
                </button>
                </a>

                <a href="https://assetsense.in/register" target="_blank" rel="noopener noreferrer">
                <button className="w-full text-sm px-4 py-2 cursor-pointer rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
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
