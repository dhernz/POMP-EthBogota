import React from "react";
import "./X4RateSesion.css";

function X4RateSesion(props) {
  const { logoSinFondo2, congratulations, yourPompNftTheP, rateNow } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4-rate-sesion screen">
        <div className="overlap-group1-4">
          <img
            className="ant-designmenu-outlined-2"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group-4">
            <div className="rectangle-62-1"></div>
            <div className="rectangle-63-2"></div>
            <img className="social-footer-4" src="/img/social-footer-3@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2-2" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34-4"></div>
            <div className="congratulations inter-bold-kimberly-18px">{congratulations}</div>
            <p className="your-pomp-nft-the-p inter-normal-black-14px">{yourPompNftTheP}</p>
            <div className="button-7">
              <div className="rate-now inter-bold-white-18px">{rateNow}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X4RateSesion;
