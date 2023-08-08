import React, { useEffect, useState } from "react";

const TypewriterEffect = ({ texts, speed, repeatInterval }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = texts[currentTextIndex] || "";

  useEffect(() => {
    let typingTimeout;
    let repetitionInterval;

    function typeNextCharacter() {
      const currentCharacter = currentText[displayText.length];
      if (currentCharacter) {
        setDisplayText((prevText) => prevText + currentCharacter);
      } else {
        clearInterval(typingTimeout);
        repetitionInterval = setInterval(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayText("");
        }, repeatInterval);
      }
    }

    typingTimeout = setInterval(typeNextCharacter, speed);

    return () => {
      clearInterval(typingTimeout);
      clearInterval(repetitionInterval);
    };
  }, [texts, speed, repeatInterval, currentText, currentTextIndex]);

  return <div>{displayText}</div>;
};

export default TypewriterEffect;
