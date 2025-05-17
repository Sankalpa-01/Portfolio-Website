import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import FloatingSpheres from "../canvas/FloatingSpheres";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit called");
    
    setSuccessMsg("");
    setErrorMsg("");

    try {
      console.log("Submitting data:", formData);
      const res = await fetch("https://portfolio-backend01.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errData = await res.json();
        setErrorMsg(errData.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 pt-24 pb-12 bg-[#0f172a] scroll-mt-20 overflow-hidden text-white flex items-center justify-center"
    >
      <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-16 bg-opacity-30">
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-4">
            Contact Me
          </h2>

          <AnimatedText
            className="text-xl md:text-2xl font-semibold text-cyan-500 text-center mb-8"
            texts={["Let's Connect!", "I'm Here to Help!"]}
            typingSpeed={100}
            deletingSpeed={50}
            pauseTime={2000}
          />

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl bg-gray-700 backdrop-blur-md text-cyan-300 shadow-2xl transition duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FormInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-100 text-black"
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-100 text-black"
            />
            <FormInput
              label="Message"
              name="message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-100 text-black"
            />
            <Button text="Send Message" type="submit"/>

            {successMsg && <p className="text-green-400">{successMsg}</p>}
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
          </form>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 h-[400px] flex justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <FloatingSpheres />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
