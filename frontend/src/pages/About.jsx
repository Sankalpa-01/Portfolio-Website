import ProfilePic from "../assets/Second Image.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-16 sm:py-20 bg-transparent text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-10 sm:mb-12 text-center"
      >
        About Me
      </motion.h2>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
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
            I’m{" "}
            <span className="font-semibold text-cyan-400">Sankalpa Panda</span>,
            a design-driven full-stack developer and a 3rd-year undergraduate at{" "}
            <span className="font-semibold text-cyan-400">NIT Rourkela</span>,
            where Industrial Design meets Computer Science.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I specialize in building{" "}
            <span className="font-medium text-cyan-400">
              responsive, scalable, and intuitive web applications
            </span>
            — combining clean UI design with robust backend systems. From
            AI-powered platforms to production-grade dashboards, I love turning
            complex ideas into elegant digital experiences.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            My toolkit includes{" "}
            <span className="font-medium text-cyan-400">
              React, Tailwind CSS, Node.js, MongoDB, MySQL, and AI integrations
            </span>
            . Curious by nature and driven by impact, I’m constantly exploring
            how design, technology, and intelligence can come together to solve
            real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
