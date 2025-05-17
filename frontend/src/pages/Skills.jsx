import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "MySQL", icon: <FaDatabase /> },
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

const Skills = () => {
  return (
    <section className="relative bg-gray-900 py-24 text-white" id="skills">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Skills</h2>
        <p className="text-gray-300 mt-2 font-medium text-xl">Tech stack I work with</p>
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-cyan-500/40 z-0 rounded-full" />

        <div className="flex flex-col gap-16 relative z-10">
          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            const direction = isLeft ? "left" : "right";

            return (
              <motion.div
                key={index}
                className={`relative w-full flex ${isLeft ? "justify-start" : "justify-end"} items-center`}
                custom={direction}
                variants={cardVariants}
              >
                <div
                  className={`relative group bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/20 text-white px-6 py-4 rounded-xl shadow-xl max-w-[75%] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.5)] hover:bg-cyan-300/10 ${
                  isLeft ? "ml-6 text-left" : "mr-6 text-right"
                }`}

                >
                  <div className={`flex items-center gap-3 text-xl text-cyan-400 ${isLeft ? "" : "flex-row-reverse"}`}>
                    {skill.icon}
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                </div>

                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 border-4 border-white rounded-full z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
