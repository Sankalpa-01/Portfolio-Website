import { motion } from "framer-motion";
import Card from "../components/Card";

const projects = [
  {
    title: "Sales Management System",
    description: "A fully functional website where you can manage your sales.",
    imageSrc: "/download (10).jpeg",
    link: "https://github.com/Sankalpa-01/Sales-Management-System/tree/master",
  },
  {
    title: "Feedback Management System",
    description:
      "A fully functional website where you can make Forms and send to user to fill it and see the response.",
    imageSrc: "/Feedback Management.jpeg",
    link: "https://feedback-management-frontend.vercel.app/login",
  },
  {
    title: "MusicListerner",
    description:
      "A fully functional website where you can listen to music and create your own playlist.",
    imageSrc: "/Music_Listener.jpeg",
    link: "https://music-listener.onrender.com/",
  },
  {
    title: "Distributed Job Scheduler",
    description:
      "Fully functional website where you can create jobs and schedule it .",
    imageSrc: "/Distributed Job Scheduler.jpeg",
    link: "https://distributed-job-scheduler-v764.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Fully functional website where you can see the weather of any city.",
    imageSrc: "/Weather Image.jpeg",
    link: "https://future-fs-02-weather-app-f9ql.vercel.app/",
  },
  {
    title: "SoftSell",
    description:
      "FrontEnd of a e-commerce website where you can sell your licenses.",
    imageSrc:
      "/conceptual-business-illustration-words-soft-260nw-1035160903.webp",
    link: "https://github.com/Sankalpa-01/SoftSell-Landing",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 bg-gray-800 dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Card {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
