import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  const icons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Sankalpa-01",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sankalpa-panda-807b78274/",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/Sankalpa_01",
    }
  ];

  return (
    <div className="flex gap-6 text-3xl h-12 w-auto">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transform hover:scale-125 transition duration-300 ease-in-out"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
