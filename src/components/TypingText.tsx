import React, { useState, useEffect } from "react";

interface props {
  text: string;
  delay: number;
}

const TypingText = ({ text, delay }: props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: number;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (currentIndex == text.length) {
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, Infinity, text]);

  return <span>{currentText}</span>;
};

export default TypingText;
