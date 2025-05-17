const Footer = () => {
  return (
    <footer className="bg-gray-900 text-cyan-400 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Sankalpa-01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sankalpa-panda-807b78274/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="hover:text-teal-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
