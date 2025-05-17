import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Card = ({ title, description, imageSrc, link }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-sm mx-auto bg-gray-800 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,255,255,0.1)] hover:shadow-[0_8px_40px_rgba(0,255,255,0.5)] transform transition-transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
          >
            Learn more →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
