import React from "react";
import "./X4MinVideo.css";

function X4MinVideo(props) {
  const { logoSinFondo2, mint, mintYourPomp, byMintingYourPomp, percent, loading } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4-min-video screen">
        <div className="overlap-group2">
          <img
            className="ant-designmenu-outlined"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group1">
            <div className="rectangle-62"></div>
            <div className="rectangle-63"></div>
            <img className="social-footer-1" src="/img/social-footer-9@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34"></div>
            <div className="button-1">
              <div className="mint inter-bold-white-18px">{mint}</div>
            </div>
            <div className="mint-your-pomp inter-bold-kimberly-18px">{mintYourPomp}</div>
            <p className="by-minting-your-pomp inter-normal-black-14px">{byMintingYourPomp}</p>
            <div className="circle">
              <div className="overlap-group-2">
                <div className="center">
                  <div className="percent valign-text-middle">{percent}</div>
                  <div className="loading valign-text-middle dmsans-bold-kimberly-12px">{loading}</div>
                </div>
                <img className="x25-stroke" src="/img/25---stroke--3@2x.svg" alt="25% (Stroke)" />
                <img className="x25-stroke-1" src="/img/25---stroke--4@2x.svg" alt="25% (Stroke)" />
                <img className="x25-stroke-2" src="/img/25---stroke--5@2x.svg" alt="25% (Stroke)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X4MinVideo;
