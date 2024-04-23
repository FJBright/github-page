import React, { useState } from 'react';

const HoverUnderlineText = (
    {text, uniqueKey, textStyle}: { text: string, uniqueKey: string, textStyle: object }
) => {
  const [isUnderlined, setIsUnderlined] = useState(false);

  const handleMouseEnter = () => {
    setIsUnderlined(true);
  };

  const handleMouseLeave = () => {
    setIsUnderlined(false);
  };

  return (
    <p
      style={{
        ...textStyle,
        textDecoration: isUnderlined ? 'underline' : 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={uniqueKey}
    >
      {text}
    </p>
  );
};

export default HoverUnderlineText;