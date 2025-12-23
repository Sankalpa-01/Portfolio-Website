// import AnimatedText from "../components/AnimatedText";
// import SocialIcons from "../components/SocialIcons";
// import ProfilePic from "../assets/WhatsApp Image 2025-05-14 at 23.12.59_213c4250.jpg";
// import Navbar from "../components/Navbar";
// import { motion } from "framer-motion";

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     y: 30,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: { duration: 0.5, ease: "easeIn" },
//   },
// };

// const Home = () => {
//   return (
//     <>
//       <Navbar />

//       <motion.div
//         id="home"
//         variants={pageVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         key="home"
//         className="min-h-screen pt-24 flex flex-col-reverse md:flex-row items-center bg-[#0f172a] text-white px-6 md:pl-22"
//       >
//         {/* Left Section */}
//         <div className="z-10 md:w-1/2 space-y-6 md:space-y-8 px-6 md:pl-18 flex flex-col items-center md:items-start text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-left">
//             Hello, I'm <br />
//             <span className="text-cyan-400">Sankalpa Panda</span> <br />
//             <span className="text-gray-100">
//               And I'm a{" "}
//               <AnimatedText
//                 className="text-cyan-400 font-semibold text-3xl inline-block"
//                 texts={["Web Developer", "C++ Coder", "BackEnd Engineer"]}
//                 typingSpeed={100}
//                 deletingSpeed={50}
//                 pauseTime={2000}
//               />
//             </span>
//           </h1>

//           <p className="text-gray-300 text-lg max-w-xl">
//             I'm a developer with experience in frontend and backend engineering.
//             I love building responsive, fast, and functional web experiences.
//           </p>

//           <div className="flex space-x-6 h-12">
//             <SocialIcons />
//           </div>

//           <div>
//             <motion.a
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               href="/Sankalpa_Panda_CV.pdf"
//               download
//               className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-300 to-cyan-400 text-black font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition duration-300"
//             >
//               Download CV
//             </motion.a>
//           </div>

//           <div className="pt-2 text-center md:text-left">
//             <p className="text-gray-300 text-md">
//               📧 Email:{" "}
//               <a
//                 href="mailto:sankalpanda@example.com"
//                 className="text-cyan-400 hover:underline"
//               >
//                 sankalpaanda@gmail.com
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center items-center"
//         >
//           <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-[0_0_60px_rgba(0,255,255,0.5)] flex items-center justify-center p-1">
//             <img
//               src={ProfilePic}
//               alt="Sankalpa Panda"
//               className="w-full h-full object-cover rounded-full border-4 border-cyan-400"
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default Home;
import AnimatedText from "../components/AnimatedText";
import SocialIcons from "../components/SocialIcons";
import ProfilePic from "../assets/WhatsApp Image 2025-05-14 at 23.12.59_213c4250.jpg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

const Home = () => {
  return (
    <>
      <Navbar />

      <motion.div
        id="home"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key="home"
        // CHANGED: bg-[#0f172a] -> bg-transparent (so global stars show through)
        className="relative min-h-screen pt-24 flex flex-col-reverse md:flex-row items-center bg-transparent text-white px-6 md:pl-22 overflow-hidden"
      >
        {/* REMOVED: <StarBackground /> is no longer needed here */}

        {/* Left Section - z-10 ensures text is above the background */}
        <div className="relative z-10 md:w-1/2 space-y-6 md:space-y-8 px-6 md:pl-18 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-left">
            Hello, I'm <br />
            <span className="text-cyan-400">Sankalpa Panda</span> <br />
            <span className="text-gray-100">
              And I'm a{" "}
              <AnimatedText
                className="text-cyan-400 font-semibold text-3xl inline-block"
                texts={["Web Developer", "C++ Coder", "BackEnd Engineer"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={2000}
              />
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            I'm a developer with experience in frontend and backend engineering.
            I love building responsive, fast, and functional web experiences.
          </p>

          <div className="flex space-x-6 h-12">
            <SocialIcons />
          </div>

          <div>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/Sankalpa_Panda_CV.pdf"
              download
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-300 to-cyan-400 text-black font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition duration-300"
            >
              Download CV
            </motion.a>
          </div>

          <div className="pt-2 text-center md:text-left">
            <p className="text-gray-300 text-md">
              📧 Email:{" "}
              <a
                href="mailto:sankalpaanda@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                sankalpaanda@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center items-center"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-[0_0_60px_rgba(0,255,255,0.5)] flex items-center justify-center p-1">
            <img
              src={ProfilePic}
              alt="Sankalpa Panda"
              className="w-full h-full object-cover rounded-full border-4 border-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
