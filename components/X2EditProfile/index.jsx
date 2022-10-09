import React from "react";
import Button3 from "../Button3";
import Dropdown from "../Dropdown";
import "./X2EditProfile.css";

function X2EditProfile(props) {
  const {
    logoSinFondo2,
    editProfile,
    submit,
    language,
    mentorLevel,
    mentoring,
    gender,
    developer,
    codingLanguage,
    solidity,
    python,
    conferences,
    buttonProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x2-edit-profile screen">
        <div className="overlap-group11-2">
          <img
            className="ant-designmenu-outlined-2"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group10-2">
            <div className="rectangle-34-2"></div>
            <div className="rectangle-62-2"></div>
            <div className="rectangle-63-2"></div>
            <img className="social-footer-8" src="/img/social-footer-2@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2-2" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <Button3 className={buttonProps.className}>{buttonProps.children}</Button3>
            <div className="edit-profile inter-bold-kimberly-18px">{editProfile}</div>
            <div className="group-72-2">
              <div className="overlap-group-8">
                <Dropdown />
                <div className="language-2 inter-normal-black-14px">{submit}</div>
              </div>
              <div className="overlap-group-8">
                <Dropdown />
                <div className="mentor-level-2 inter-normal-black-14px">{language}</div>
              </div>
              <div className="overlap-group-8">
                <Dropdown />
                <div className="mentoring-2 inter-normal-black-14px">{mentorLevel}</div>
              </div>
              <div className="overlap-group-8">
                <div className="gender-2 inter-normal-black-14px">{mentoring}</div>
                <Dropdown />
              </div>
              <div className="overlap-group-8">
                <Dropdown />
                <div className="developer-2">{gender}</div>
              </div>
              <div className="overlap-group-8">
                <div className="coding-language-2 inter-normal-black-14px">{developer}</div>
                <Dropdown />
              </div>
              <div className="overlap-group-8">
                <div className="solidity-2 inter-normal-black-14px">{codingLanguage}</div>
                <Dropdown />
              </div>
              <div className="overlap-group-8">
                <Dropdown />
                <div className="python-2 inter-normal-black-14px">{solidity}</div>
              </div>
              <div className="overlap-group-8">
                <div className="conferences-2 inter-normal-black-14px">{python}</div>
                <Dropdown />
              </div>
              <div className="overlap-group-8">
                <div className="founder-2 inter-normal-black-14px">{conferences}</div>
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X2EditProfile;
