import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);
  function toggleHandler() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div>
      <button onClick={toggleHandler}>Toggle</button>
      {show ? <p>Show Hide</p> : ""}
    </div>
  );
}

export default Toggle;
