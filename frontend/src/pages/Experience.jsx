import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Future Interns",
    date: "May 2025 - June 2025",
    description:
      "Focused on building responsive web apps using React.js, Tailwind CSS, Node.js, and MongoDB. Worked on frontend UI, backend APIs, and user authentication. Gained hands-on experience in agile development, debugging, and deploying scalable applications.",
  },
  {
    title: "Software Developer Intern",
    company: "Airace Technologies Pvt Ltd",
    date: "June 2025 - Aug 2025",
    description:
      "Engineered a robust NTRIP Caster–Client system to stream real-time GNSS data, significantly enhancing positioning accuracy for geospatial applications. Designed and implemented a scalable, modular frontend for the Airace desktop application using modern UI frameworks, improving both usability and performance. Collaborated closely with backend and hardware teams to optimize system latency and throughput, ensuring seamless and high-speed GNSS data integration.",
  },
  {
    title: "Backend Developer Intern",
    company: "Teachbetter.ai",
    date: "August 2025 - September 2025",
    description:
      "Developed AI-driven educational tools, including an automated MCQ grading agent for efficient assessments and a real-time voice-to-voice pronunciation evaluator to improve speech fluency.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    // <section className="relative bg-gray-900 py-24 text-white" id="experience">
    <section
      id="experience"
      className="min-h-screen py-20 bg-transparent text-white scroll-mt-20 overflow-hidden"
    >
      {/* Header Section - Same style as Skills */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-cyan-400">Experience</h2>
        <p className="text-gray-300 mt-2 font-medium text-xl">
          My professional journey
        </p>
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Central Line - Placed inside content container so it doesn't touch header */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-cyan-500/40 z-0 rounded-full" />

        <div className="flex flex-col gap-12 relative z-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const direction = isLeft ? "left" : "right";

            return (
              <motion.div
                key={index}
                className={`relative w-full flex flex-col items-center md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
                custom={direction}
                variants={cardVariants}
              >
                {/* Card Container */}
                <div
                  className={`relative group bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/20 text-white px-6 py-6 rounded-xl shadow-xl w-full md:w-[45%] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.5)] hover:bg-cyan-300/10 ${
                    isLeft ? "md:text-left" : "md:text-left" // Kept text-left for readability
                  }`}
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-gray-300 font-semibold">
                    {exp.company}
                  </h4>
                  <span className="text-sm text-cyan-200/80 italic mb-4 block">
                    {exp.date}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Central Dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 border-4 border-white rounded-full z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2 * index,
                    type: "spring",
                    stiffness: 100,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
