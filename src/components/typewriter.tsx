import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, startDelay }: { text: string, delay: number, startDelay: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setStartTimer(true);
  //   }, startDelay);

  //   return () => clearTimeout(timeout);
  // }, [startDelay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div>
      <span
        style={{}} // font: 
      >
        {currentText}
      </span>
    </div>
  );
};
  
  export default Typewriter;