import React from "react";
import "./Input.css";

function Input(props) {
  const { className } = props;

  return (
    <div className={`input ${className || ""}`}>
      <div className="text-field"></div>
    </div>
  );
}

export default Input;
