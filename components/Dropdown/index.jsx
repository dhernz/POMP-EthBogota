import React from "react";
import "./Dropdown.css";

function Dropdown(props) {
  const { className } = props;

  return (
    <div className={`dropdown-1 ${className || ""}`}>
      <img className="vector" src="/img/vector@2x.svg" alt="Vector" />
    </div>
  );
}

export default Dropdown;
