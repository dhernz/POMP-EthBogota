import React from "react";
import "./Group122.css";

function Group122(props) {
  const { src, className } = props;

  return (
    <div className={`group-122 ${className || ""}`}>
      <div className="group-119-2" style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  );
}

export default Group122;
