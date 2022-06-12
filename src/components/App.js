mport React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [char, setChar] = useState(0);
  const [word, setWord] = useState(0);

  const count = (e) => {
    let newWord = word;
    if (e.terget.value === " ") {
      setWord(newWord++);
    }
  };

  return (
    <div id="main">
      <input type="range" min="16px" max="32px" id="fontSize-input" />
      <input type="number" id="char-limit-input" min="50" />
      <textarea
        onChange={(e) => {
          setChar(e.target.value.length);
        }}
      ></textarea>
      <div id="word-counter">{word}</div>
      <div id="char-counter">{char}</div>
    </div>
  );
};

export default App;
