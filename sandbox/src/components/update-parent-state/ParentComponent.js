import { useState } from "react";
import Child from "./ChildComponent";
function ParentComponent() {
  const [value, setValue] = useState("I need to be updated from my child");

  function exclimationHandler() {
    setValue(value + "!");
  }

  return (
    <>
      <h3>Update Parent State Challenge </h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onPress={exclimationHandler} />
      </div>
    </>
  );
}

export default ParentComponent;
