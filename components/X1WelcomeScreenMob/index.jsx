import React from "react";
import Input from "../Input";
import Group121 from "../Group121";
import Group126 from "../Group126";
import Group122 from "../Group122";
import "./X1WelcomeScreenMob.css";

function X1WelcomeScreenMob(props) {
  const {
    x1WelcomeScreenMob,
    menu,
    logoFinalBlanco3,
    subtitle,
    place,
    group126Props,
    group121Props,
    group126Props2,
    group122Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1-welcome-screen-mob screen" style={{ backgroundImage: `url(${x1WelcomeScreenMob})` }}>
        <img className="menu-4" src={menu} alt="Menu" />
        <img className="logo-final-blanco-3" src={logoFinalBlanco3} alt="LOGO FINAL-blanco 3" />
        <p className="subtitle">{subtitle}</p>
        <Input className={group126Props.className} />
        <div className="button-12">
          <div className="place inter-bold-white-18px">{place}</div>
        </div>
        <img className="line-1" src="/img/line-1@2x.svg" alt="Line 1" />
        <div className="group-129">
          <div className="k-login-container">
            <Group121 src={group121Props.src} />
            <div className="facebook-login">
              <img className="group-132" src="/img/group-132@2x.svg" alt="Group 132" />
            </div>
          </div>
          <div className="login-container">
            <div className="coinbase-login">
              <div className="google-icon">
                <img className="group-130" src="/img/group-130-1@2x.svg" alt="Group 130" />
              </div>
            </div>
            <Group126 src={group126Props2.src} />
          </div>
        </div>
        <Group122 src={group122Props.src} />
        <img className="social-footer-10" src="/img/social-footer@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default X1WelcomeScreenMob;
