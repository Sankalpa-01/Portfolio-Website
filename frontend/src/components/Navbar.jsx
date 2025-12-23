import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle navigation and ensure menu closes properly
  const handleNavigation = (href) => {
    setMenuOpen(false);
    // Scroll to element with a slight delay to allow menu to close
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-400 md:ml-32 ml-0 text-center w-full md:w-auto">
          MyPortfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg mr-30">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-cyan-400 group-hover:text-cyan-200 transition-all duration-300 ease-in-out"
              >
                <span className="inline-block transform group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-400 focus:outline-none fixed top-3 right-4 z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 z-40">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl text-cyan-400 hover:text-teal-400 transition duration-300"
              onClick={() => handleNavigation(link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
