import React, { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  texts?: string[]; // The array of texts to display, made optional
  speed?: number; // Optional typing speed in milliseconds
  className?: string; // Optional className for customization
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts = [], // Default to an empty array if texts is undefined
  speed = 100,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the typing interval

  useEffect(() => {
    if (texts.length === 0) return; // Prevent errors if texts is empty

    let index = 0; // Local variable to track the character index
    setDisplayedText(""); // Reset displayed text when currentIndex changes
    const currentText = texts[currentIndex];

    typingIntervalRef.current = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText((prev) =>
          currentText[index] !== undefined ? prev + currentText[index] : prev
        );
        index++; // Increment character index
      } else {
        clearInterval(typingIntervalRef.current!);
        // Move to the next paragraph after a delay
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Loop back to the first
          index = 0; // Reset index for the next text
          setDisplayedText(""); // Clear displayed text for the next text
        }, 3000); // Delay before showing the next paragraph
      }
    }, speed); // Use the provided speed

    return () => {
      clearInterval(typingIntervalRef.current!); // Clear the interval on cleanup
    };
  }, [currentIndex, texts, speed]); // Add only necessary dependencies

  return (
    <h3
      className={`font-mono overflow-hidden inline border-r-2 border-purple-700 whitespace-nowrap animate-typing ${className}`}
    >
      {displayedText}
    </h3>
  );
};

export default TypingEffect;
