import React from "react";
import Button from "../Button";
import "./X19.css";

function X19(props) {
  const { logoSinFondo2, welcome, yourDynamicNftVal, youCanStartLookingForMentorsNow, buttonProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1-9 screen">
        <div className="overlap-group2-3">
          <img
            className="ant-designmenu-outlined-1"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group-3">
            <img className="logo-sin-fondo-2-1" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34-3"></div>
            <Button className={buttonProps.className}>{buttonProps.children}</Button>
            <div className="welcome inter-bold-kimberly-18px">{welcome}</div>
            <p className="your-dynamic-nft-val inter-normal-black-14px">{yourDynamicNftVal}</p>
            <p className="you-can-start-looking-for-mentors-now inter-semi-bold-black-14px">
              {youCanStartLookingForMentorsNow}
            </p>
          </div>
        </div>
        <div className="overlap-group1-3">
          <div className="rectangle-63-1"></div>
          <img className="social-footer-3" src="/img/social-footer-1@2x.svg" alt="Social Footer" />
        </div>
      </div>
    </div>
  );
}

export default X19;
