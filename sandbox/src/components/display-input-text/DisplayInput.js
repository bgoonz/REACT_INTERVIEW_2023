import { useState } from "react";

function DisplayInput() {
  const [inputText, setInputText] = useState("");

  function textHandler(event) {
    setInputText(event.target.value);
  }
  return (
    <>
      <input type="text" placeholder="Enter Text" onChange={textHandler} />
      <p>{inputText}</p>
    </>
  );
}

export default DisplayInput;
