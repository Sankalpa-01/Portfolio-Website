// import { motion } from "framer-motion";
// import Card from "../components/Card";

// const projects = [
//   {
//     title: "Sales Management System",
//     description: "A fully functional website where you can manage your sales.",
//     imageSrc: "/download (10).jpeg",
//     link: "https://github.com/Sankalpa-01/Sales-Management-System/tree/master",
//   },
//   {
//     title: "Feedback Management System",
//     description:
//       "A fully functional website where you can make Forms and send to user to fill it and see the response.",
//     imageSrc: "/Feedback Management.jpeg",
//     link: "https://feedback-management-frontend.vercel.app/login",
//   },
//   {
//     title: "MusicListerner",
//     description:
//       "A fully functional website where you can listen to music and create your own playlist.",
//     imageSrc: "/Music_Listener.jpeg",
//     link: "https://music-listener.onrender.com/",
//   },
//   {
//     title: "Distributed Job Scheduler",
//     description:
//       "Fully functional website where you can create jobs and schedule it .",
//     imageSrc: "/Distributed Job Scheduler.jpeg",
//     link: "https://distributed-job-scheduler-v764.vercel.app/",
//   },
//   {
//     title: "Weather App",
//     description:
//       "Fully functional website where you can see the weather of any city.",
//     imageSrc: "/Weather Image.jpeg",
//     link: "https://future-fs-02-weather-app-f9ql.vercel.app/",
//   },
//   {
//     title: "SoftSell",
//     description:
//       "FrontEnd of a e-commerce website where you can sell your licenses.",
//     imageSrc:
//       "/conceptual-business-illustration-words-soft-260nw-1035160903.webp",
//     link: "https://github.com/Sankalpa-01/SoftSell-Landing",
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const stagger = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen px-4 py-20 bg-gray-800 dark:bg-gray-900 scroll-mt-20"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Projects
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={stagger}
//           initial="hidden"
//           animate="show"
//         >
//           {projects.map((project, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//             >
//               <Card {...project} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
// 1. Import Icons
import { FiGrid } from "react-icons/fi";
import { FaLayerGroup, FaLaptopCode, FaBrain } from "react-icons/fa";

const projectsData = [
  {
    title: "NerveConnect",
    description:
      "AI Assisted Clinic-Management platform for doctors to manage their patients.",
    imageSrc: "/NerveConnect_logo.png",
    link: "https://nerve-connect-frontend.vercel.app/",
    category: "Full-Stack",
  },
  {
    title: "Sales Management System",
    description: "A fully functional website where you can manage your sales.",
    imageSrc: "/download (10).jpeg",
    link: "https://github.com/Sankalpa-01/Sales-Management-System/tree/master",
    category: "Full-Stack",
  },
  {
    title: "AI Enhanced Assessment",
    description:
      "AI Agent which helps teachers to avoid long process of manual grading.",
    imageSrc: "/AI_Enhanced_Assessment_Logo.jpg",
    link: "https://github.com/Sankalpa-01/AI_Enhanced_Assessment",
    category: "AIML",
  },
  {
    title: "Feedback Management System",
    description: "Create forms and send to users to fill and see responses.",
    imageSrc: "/Feedback Management.jpeg",
    link: "https://feedback-management-frontend.vercel.app/login",
    category: "Full-Stack",
  },
  {
    title: "MusicListerner",
    description: "Listen to music and create your own playlist.",
    imageSrc: "/Music_Listener.jpeg",
    link: "https://music-listener.onrender.com/",
    category: "Full-Stack",
  },
  {
    title: "Distributed Job Scheduler",
    description: "Create jobs and schedule them efficiently.",
    imageSrc: "/Distributed Job Scheduler.jpeg",
    link: "https://distributed-job-scheduler-v764.vercel.app/",
    category: "Full-Stack",
  },
  {
    title: "Weather App",
    description: "See the weather of any city in real-time.",
    imageSrc: "/Weather Image.jpeg",
    link: "https://future-fs-02-weather-app-f9ql.vercel.app/",
    category: "Frontend",
  },
  {
    title: "Leave Management System",
    description: "Fullstack platform where you can manage leaves.",
    imageSrc: "/LeaveManagement.jpeg",
    link: "https://github.com/Sankalpa-01/Leave-Management",
    category: "Full-Stack",
  },
  {
    title: "SoftSell",
    description: "Frontend of an e-commerce website for licenses.",
    imageSrc:
      "/conceptual-business-illustration-words-soft-260nw-1035160903.webp",
    link: "https://github.com/Sankalpa-01/SoftSell-Landing",
    category: "Frontend",
  },
  {
    title: "Fakturera",
    description:
      "Website where you can see various Pricelist and Terms of Fakturera Main Website.",
    imageSrc: "/Fakturera_Logo.jpg",
    link: "https://fakturera-clone.vercel.app",
    category: "Full-Stack",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Full-Stack", "Frontend", "AIML"];

  // 2. Map categories to icons
  const categoryIcons = {
    All: <FiGrid />,
    "Full-Stack": <FaLayerGroup />,
    Frontend: <FaLaptopCode />,
    AIML: <FaBrain />,
  };

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 bg-transparent scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              // 3. Updated classes for flex alignment and gap
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                  : "bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400/10"
              }`}
            >
              {/* Render Icon */}
              <span className="text-xl">{categoryIcons[cat]}</span>
              {/* Render Text */}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
