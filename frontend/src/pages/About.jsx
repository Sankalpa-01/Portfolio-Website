import ProfilePic from "../assets/WhatsApp Image 2025-05-15 at 21.18.26_6ffb6bd4.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-16 sm:py-20 bg-gray-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-10 sm:mb-12 text-center"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={ProfilePic}
          alt="Profile"
          className="w-40 sm:w-48 md:w-72 lg:w-100 h-72 object-cover rounded-3xl border-4 border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] transition duration-500"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center md:text-left px-2"
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Hello! I'm{" "}
            <span className="font-semibold text-cyan-400">Sankalpa</span>, a 3rd
            year undergraduate student at{" "}
            <span className="font-semibold text-cyan-400">
              NIT Rourkela, Industrial Design Department
            </span>{" "}
            and a passionate Web Developer focused on building beautiful,
            responsive, and interactive websites. I enjoy turning complex
            problems into simple, user-friendly solutions.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I’m skilled in technologies like{" "}
            <span className="font-medium text-cyan-400">
              React, Tailwind CSS, Node.js, MongoDB, SQL and Next.js
            </span>
            . I’m constantly learning and exploring new ways to build modern web
            applications.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Beyond coding, I love design and sharing knowledge with others.
            Thanks for stopping by my portfolio!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
