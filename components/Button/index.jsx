import React from "react";
import "./Button.css";

function Button(props) {
  const { children } = props;

  return (
    <div className="button-5">
      <div className="sort inter-bold-white-18px">{children}</div>
    </div>
  );
}

export default Button;
