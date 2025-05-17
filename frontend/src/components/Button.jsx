const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  const baseStyle = "px-6 py-2 rounded-md font-medium transition duration-300";

  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-200",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
    outline: "bg-transparent text-teal-500 border border-teal-500 hover:bg-teal-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;
