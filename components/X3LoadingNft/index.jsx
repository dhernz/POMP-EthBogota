import React from "react";
import "./X3LoadingNft.css";

function X3LoadingNft(props) {
  const { x3LoadingNft, ab, menu, logoFinalBlanco3, percent, loading } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x3-loading-nft screen" style={{ backgroundImage: `url(${x3LoadingNft})` }}>
        <div className="flex-row-3">
          <div className="avatar-3">
            <div className="ab-3 valign-text-middle dmsans-bold-kimberly-12px">{ab}</div>
          </div>
          <img className="menu-3" src={menu} alt="Menu" />
        </div>
        <img className="logo-final-blanco-3" src={logoFinalBlanco3} alt="LOGO FINAL-blanco 3" />
        <div className="circle-1">
          <div className="overlap-group-5">
            <div className="center-1">
              <div className="percent-1 valign-text-middle">{percent}</div>
              <div className="loading-1 valign-text-middle">{loading}</div>
            </div>
            <img className="x25-stroke-3" src="/img/25---stroke-@2x.svg" alt="25% (Stroke)" />
            <img className="x25-stroke-4" src="/img/25---stroke--1@2x.svg" alt="25% (Stroke)" />
            <img className="x25-stroke-5" src="/img/25---stroke--2@2x.svg" alt="25% (Stroke)" />
          </div>
        </div>
        <img className="social-footer-5" src="/img/social-footer-3@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default X3LoadingNft;
