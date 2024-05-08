import React, { useState } from "react";

const CensoredText = ({ children, badWords }) => {
  const [censoredText, setCensoredText] = useState(children);

  const censorWord = (word) => {
    const censoredWord = "*".repeat(word.length);
    return censoredWord;
  };

  const censorText = (text) => {
    let censoredText = text;
    badWords.forEach((word) => {
      const regex = new RegExp("\\b" + word + "\\b", "gi");
      censoredText = censoredText.replace(regex, censorWord(word));
    });
    return censoredText;
  };

  const handleWordClick = (originalWord) => {
    setCensoredText((prevText) =>
      prevText.replace(
        new RegExp("\\b" + censorWord(originalWord) + "\\b", "gi"),
        originalWord
      )
    );
  };

  return (
    <span>
      {censorText(children)
        .split(" ")
        .map((word, index) => (
          <span key={index} onClick={() => handleWordClick(word)}>
            {word}&nbsp;
          </span>
        ))}
    </span>
  );
};

export default CensoredText;
