import React from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import "./X15.css";

function X15(props) {
  const {
    logoSinFondo2,
    editProfile,
    solidity,
    codingLanguage,
    conferences,
    founder,
    developer,
    python1,
    gender,
    language1,
    mentoring,
    mentorLevel,
    language2,
    beginner1,
    open,
    female,
    beginner2,
    python2,
    beginner3,
    intermediate,
    ethBogota,
    notYet,
    buttonProps,
    dropdown1Props,
    dropdown2Props,
    dropdown3Props,
    dropdown4Props,
    dropdown5Props,
    dropdown6Props,
    dropdown7Props,
    dropdown8Props,
    dropdown9Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1-5 screen">
        <div className="flex-row">
          <div className="overlap-group2-2">
            <img className="logo-sin-fondo-2" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="edit-profile inter-bold-kimberly-18px">{editProfile}</div>
          </div>
          <img
            className="ant-designmenu-outlined"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
        </div>
        <div className="overlap-group1-2">
          <div className="rectangle-34-2"></div>
          <div className="rectangle-62"></div>
          <div className="rectangle-63"></div>
          <img className="social-footer-2" src="/img/social-footer@2x.svg" alt="Social Footer" />
          <Button>{buttonProps.children}</Button>
          <div className="overlap-group-2">
            <div className="solidity-2 inter-normal-black-14px">{solidity}</div>
            <div className="coding-language-2 inter-normal-black-14px">{codingLanguage}</div>
            <div className="conferences-2 inter-normal-black-14px">{conferences}</div>
            <div className="founder-2 inter-normal-black-14px">{founder}</div>
            <div className="developer-2 roboto-normal-black-14px">{developer}</div>
            <div className="python-2 inter-normal-black-14px">{python1}</div>
            <div className="gender-2 inter-normal-black-14px">{gender}</div>
            <div className="language-4 inter-normal-black-14px">{language1}</div>
            <div className="mentoring-2 inter-normal-black-14px">{mentoring}</div>
            <Dropdown />
            <Dropdown className={dropdown1Props.className} />
            <Dropdown className={dropdown2Props.className} />
            <Dropdown className={dropdown3Props.className} />
            <Dropdown className={dropdown4Props.className} />
            <Dropdown className={dropdown5Props.className} />
            <Dropdown className={dropdown6Props.className} />
            <Dropdown className={dropdown7Props.className} />
            <Dropdown className={dropdown8Props.className} />
            <Dropdown className={dropdown9Props.className} />
            <div className="mentor-level-2 inter-normal-black-14px">{mentorLevel}</div>
            <div className="selected-2">
              <div className="language-5 inter-normal-black-14px">{language2}</div>
              <div className="beginner inter-normal-black-14px">{beginner1}</div>
              <div className="selected-item-4 inter-normal-black-14px">{open}</div>
              <div className="selected-item-5 inter-normal-black-14px">{female}</div>
              <div className="selected-item-4 roboto-normal-black-14px">{beginner2}</div>
              <div className="selected-item-4 inter-normal-black-14px">{python2}</div>
              <div className="selected-item-4 inter-normal-black-14px">{beginner3}</div>
              <div className="intermediate-4 inter-normal-black-12px">{intermediate}</div>
              <div className="selected-item-4 inter-normal-black-12px">{ethBogota}</div>
              <div className="selected-item-5 inter-normal-black-14px">{notYet}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X15;
