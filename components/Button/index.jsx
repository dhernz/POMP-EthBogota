import React from "react";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  return (
    <div className={`button-2 ${className || ""}`}>
      <div className="submit inter-bold-white-18px">{children}</div>
    </div>
  );
}

export default Button;
