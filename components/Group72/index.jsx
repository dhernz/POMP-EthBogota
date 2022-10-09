import React from "react";
import Dropdown from "../Dropdown";
import "./Group72.css";

function Group72(props) {
  const { className } = props;

  return (
    <div className={`group-72 ${className || ""}`}>
      <div className="overlap-group">
        <Dropdown />
        <div className="language inter-normal-white-14px">Language</div>
      </div>
      <div className="overlap-group">
        <Dropdown />
        <div className="mentor-level inter-normal-white-14px">Mentor Level</div>
      </div>
      <div className="overlap-group">
        <Dropdown />
        <div className="mentoring inter-normal-white-14px">Mentoring</div>
      </div>
      <div className="overlap-group">
        <div className="gender inter-normal-white-14px">Gender</div>
        <Dropdown />
      </div>
      <div className="overlap-group">
        <Dropdown />
        <div className="developer roboto-normal-white-14px">Developer</div>
      </div>
      <div className="overlap-group">
        <div className="coding-language inter-normal-white-14px">Coding language</div>
        <Dropdown />
      </div>
      <div className="overlap-group">
        <div className="solidity inter-normal-white-14px">Solidity</div>
        <Dropdown />
      </div>
      <div className="overlap-group">
        <Dropdown />
        <div className="python inter-normal-white-14px">Python</div>
      </div>
      <div className="overlap-group">
        <div className="conferences inter-normal-white-14px">Conferences</div>
        <Dropdown />
      </div>
      <div className="overlap-group">
        <div className="founder inter-normal-white-14px">Founder</div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Group72;
