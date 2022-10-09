import React from "react";
import Button from "../Button";
import "./X4MinVideo.css";

function X4MinVideo(props) {
  const { logoSinFondo2, mintYourPomp, byMintingYourPomp, buttonProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4-min-video screen">
        <div className="overlap-group1-8">
          <img
            className="ant-designmenu-outlined-4"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group-8">
            <div className="rectangle-62-3"></div>
            <div className="rectangle-63-4"></div>
            <img className="social-footer-8" src="/img/social-footer-7@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2-4" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34-7"></div>
            <Button className={buttonProps.className}>{buttonProps.children}</Button>
            <div className="mint-your-pomp inter-bold-kimberly-18px">{mintYourPomp}</div>
            <p className="by-minting-your-pomp inter-normal-black-14px">{byMintingYourPomp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X4MinVideo;
