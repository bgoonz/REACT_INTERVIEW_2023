import React, { useState } from "react";

const Input = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange}></input>
    </div>
  );
};

export default Input;
