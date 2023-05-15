import { useState } from "react";

function DisableButton() {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(true);

  function disableHandler(event) {
    const inputValue = event.target.value;
    setInput(inputValue);

    if (inputValue.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={disableHandler} />
      <button onClick={() => console.log(input)} disabled={disabled}>
        Submit
      </button>
    </>
  );
}

export default DisableButton;
