import React from "react";
import Input from "../Input";
import Group121 from "../Group121";
import Group122 from "../Group122";
import Group126 from "../Group126";
import "./WelcomeScreenMob.css";

function WelcomeScreenMob(props) {
  const {
    welcomeScreenMob,
    menu,
    logoFinalBlanco3,
    subtitle,
    place,
    group126Props,
    group121Props,
    group122Props,
    group126Props2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome-screen-mob screen" style={{ backgroundImage: `url(${welcomeScreenMob})` }}>
        <img className="menu-5" src={menu} alt="Menu" />
        <img className="logo-final-blanco-3-2" src={logoFinalBlanco3} alt="LOGO FINAL-blanco 3" />
        <p className="subtitle-1">{subtitle}</p>
        <Input className={group126Props.className} />
        <div className="button-8">
          <div className="place-2 inter-bold-white-18px">{place}</div>
        </div>
        <img className="line-1-1" src="/img/line-1@2x.svg" alt="Line 1" />
        <div className="group-129-1">
          <div className="flex-row-5">
            <div className="k-login-container">
              <Group121 src={group121Props.src} />
              <div className="facebook-login">
                <div className="overlap-group-7">
                  <div className="ellipse-16-1"></div>
                  <img className="shape-1" src="/img/shape-1@2x.svg" alt="Shape" />
                </div>
              </div>
            </div>
            <div className="login-container">
              <Group122 src={group122Props.src} className={group122Props.className} />
              <Group126 src={group126Props2.src} className={group126Props2.className} />
            </div>
          </div>
          <div className="google-login">
            <div className="google-icon">
              <img className="group-130-1" src="/img/group-130-1@2x.svg" alt="Group 130" />
            </div>
          </div>
        </div>
        <img className="social-footer-7" src="/img/social-footer@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default WelcomeScreenMob;
