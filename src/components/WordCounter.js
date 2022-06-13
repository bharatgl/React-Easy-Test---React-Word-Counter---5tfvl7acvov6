import React, { useState } from "react";

function WordCounter() {
  const [countString, setcountString] = useState("");
  const [countArray, setCountArray] = useState([]);
  const [wordLimit, setWordLimit] = useState(50);
  const [fontSizeManage, setFontSizeManage] = useState(16);

  const onChangeHandler = (e) => {
    setcountString(e.target.value);
    setCountArray([...countString]);
  };
  // console.log(countArray)
  let count = 0;
  let countWord = 0;
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] !== " ") {
      count++;
    }
  }
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] === " ") {
      countWord++;
    }
  }
  // console.log(count, countWord)
  const wordLimitHandler = (e) => {
    for (let i = 0; i < countArray.length; i++) {
      if (countArray[i] !== " ") {
        setWordLimit(e.target.value);
      }
    }
  };

  const fontSizeHandler = (e) => {
    setFontSizeManage(e.target.value);
  };
  console.log(fontSizeManage);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 60,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label class="font-size">Font size picker</label>
      <input
        type="range"
        id="fontSize-input"
        min={16}
        max={32}
        onChange={fontSizeHandler}
      />
      <label class="Word-limit">Word limit input</label>
      <input
        type="number"
        id="char-limit-input"
        value={wordLimit}
        min={50}
        onChange={wordLimitHandler}
      />
      <textarea
        class="textarea"
        type="textarea"
        maxLength={wordLimit}
        onChange={onChangeHandler}
        style={{ fontSize: `${fontSizeManage}px` }}
      />

      <div id="word-counter">
        <p>Total number of words written {countWord ? countWord + 1 : 0} </p>
      </div>
      <div id="char-counter">
        <p>Total number of characters used {countString ? count + 1 : 0} </p>
      </div>
    </div>
  );
}

export default WordCounter;
