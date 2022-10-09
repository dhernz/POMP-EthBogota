import React from "react";
import Button3 from "../Button3";
import "./X4.css";

function X4(props) {
  const { logoSinFondo2, welcome, yourDynamicNftVal, youCanStartLookingForMentorsNow, buttonProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4 screen">
        <div className="overlap-group1-1">
          <img
            className="ant-designmenu-outlined-1"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group-4">
            <div className="rectangle-62-1"></div>
            <div className="rectangle-63-1"></div>
            <img className="social-footer-4" src="/img/social-footer-4@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2-1" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34-1"></div>
            <Button3>{buttonProps.children}</Button3>
            <div className="welcome inter-bold-kimberly-18px">{welcome}</div>
            <p className="your-dynamic-nft-val inter-normal-black-14px">{yourDynamicNftVal}</p>
            <p className="you-can-start-looking-for-mentors-now">{youCanStartLookingForMentorsNow}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X4;
