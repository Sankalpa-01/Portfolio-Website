import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900 bg-opacity-70 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-400">MyPortfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
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

        {/* Mobile Menu Toggle - Positioned properly */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 z-40">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl text-cyan-400 hover:text-teal-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
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