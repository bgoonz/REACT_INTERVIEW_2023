import React from "react";
import classes from "./Input.module.css";
const Input = ({ value, onChange, placeHolder }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={classes.input}
        placeholder={placeHolder}
      ></input>
    </div>
  );
};

export default Input;
