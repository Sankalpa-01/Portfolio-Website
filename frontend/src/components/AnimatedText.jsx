import { useEffect, useState } from "react";

const AnimatedText = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText === texts[index]) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : texts[index].slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseTime]);

  return <span className={className}>{displayedText}|</span>;
};

export default AnimatedText;
