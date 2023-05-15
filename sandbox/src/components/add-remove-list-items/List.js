import React, { useState } from "react";

function List() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const submitHandler = () => {
    setList([...list, input]);
  };
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  const deleteHandler = (element) => {
    setList(list.filter((ele) => ele !== element));
  };

  return (
    <div>
      <input onChange={changeHandler}></input>
      <button onClick={submitHandler}>Submit</button>
      <ul>
        {list.map((element) => {
          return (
            <li key={element} onClick={() => deleteHandler(element)}>
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
