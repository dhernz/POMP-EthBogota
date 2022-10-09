import React from "react";
import "./Button3.css";

function Button3(props) {
  const { children, className } = props;

  return (
    <div className={`button-6 ${className || ""}`}>
      <div className="search inter-bold-white-18px">{children}</div>
    </div>
  );
}

export default Button3;
