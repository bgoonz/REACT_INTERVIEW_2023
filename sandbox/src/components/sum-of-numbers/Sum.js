import { useState } from "react";

function Sum() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  const numberOneHandler = (event) => {
    setNumber1(event.target.value);
  };
  const numberTwoHandler = (event) => {
    setNumber2(event.target.value);
  };
  const submitHandler = () => {
    const sum = +number1 + +number2;
    setTotal(sum);
  };
  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        onChange={numberOneHandler}
      />
      <input
        placeholder="Second Number"
        type="number"
        onChange={numberTwoHandler}
      />

      <button onClick={submitHandler}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </div>
  );
}
export default Sum;
