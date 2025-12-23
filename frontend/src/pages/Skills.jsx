// import {
//   FaHtml5,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaCss3,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const skills = [
//   { name: "React.js", icon: <FaReact /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "Express.js", icon: <FaNodeJs /> },
//   { name: "MongoDB", icon: <FaDatabase /> },
//   { name: "SQL", icon: <FaDatabase /> },
//   {
//     name: "Next.js",
//     icon: (
//       <img
//         src="./Next-JS_logo.jpeg"
//         alt="Next.js"
//         className="w-6 h-6 object-contain"
//       />
//     ),
//   },
//   { name: "Tailwind CSS", icon: <FaCss3 /> },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: (direction) => ({
//     opacity: 0,
//     x: direction === "left" ? -100 : 100,
//   }),
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Skills = () => {
//   return (
//     <section className="relative bg-gray-900 py-24 text-white" id="skills">
//       <div className="max-w-4xl mx-auto text-center mb-16 px-4">
//         <h2 className="text-4xl font-bold text-cyan-400">Skills</h2>
//         <p className="text-gray-300 mt-2 font-medium text-xl">
//           Tech stack I work with
//         </p>
//       </div>

//       <motion.div
//         className="relative max-w-5xl mx-auto px-4"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className=" hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-cyan-500/40 z-0 rounded-full" />

//         <div className="flex flex-col gap-20 relative z-10">
//           {skills.map((skill, index) => {
//             const isLeft = index % 2 === 0;
//             const direction = isLeft ? "left" : "right";

//             return (
//               <motion.div
//                 key={index}
//                 className={`relative w-full flex flex-col items-center md:flex-row ${
//                   isLeft ? "md:justify-start" : "md:justify-end"
//                 }`}
//                 custom={direction}
//                 variants={cardVariants}
//               >
//                 <div
//                   className={`relative group bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/20 text-white px-6 py-4 rounded-xl shadow-xl max-w-[75%]  transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.5)] hover:bg-cyan-300/10 ${
//                     isLeft
//                       ? "md:ml-6 md:text-left text-center"
//                       : "md:mr-6 md:text-right text-center"
//                   }`}
//                 >
//                   <div
//                     className={`flex items-center gap-3 text-xl text-cyan-400 justify-center md:justify-start ${
//                       isLeft ? "" : "flex-row-reverse"
//                     }`}
//                   >
//                     {skill.icon}
//                     <span className="font-semibold">{skill.name}</span>
//                   </div>
//                 </div>

//                 <motion.div
//                   className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 border-4 border-white rounded-full z-20"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{
//                     delay: 0.2 * index,
//                     type: "spring",
//                     stiffness: 100,
//                   }}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaPython, // Added Python icon
} from "react-icons/fa";
import { SiPostgresql, SiRedis, SiMongodb } from "react-icons/si"; // Added specific DB icons
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: (
      <img
        src="./Next-JS_logo.jpeg"
        alt="Next.js"
        className="w-10 h-10 object-contain rounded-full"
      />
    ),
  },
  { name: "Tailwind CSS", icon: <FaCss3 className="text-teal-400" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-gray-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> }, // Added

  // Database
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> }, // Swapped to specific Mongo icon
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> }, // Added
  { name: "Redis", icon: <SiRedis className="text-red-500" /> }, // Added
];

// Animation for the container to stagger the appearance of cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation for individual cards popping up
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    // <section className="bg-gray-900 py-24 text-white" id="skills">
    <section className="bg-transparent py-24 text-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-cyan-400"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-300 mt-4 text-lg"
          >
            Technologies I use to build high-performance applications
          </motion.p>
        </div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.4)",
              }}
              className="w-full max-w-[200px] h-40 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl flex flex-col items-center justify-center gap-4 transition-colors duration-300 hover:bg-gray-800 hover:border-cyan-400 cursor-pointer group"
            >
              {/* Icon Container */}
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="font-semibold text-lg text-gray-300 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
