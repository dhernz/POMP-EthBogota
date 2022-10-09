import React from "react";
import Input from "../Input";
import MainButton from "../MainButton";
import Group121 from "../Group121";
import Group122 from "../Group122";
import Group126 from "../Group126";
import "./WelcomeScreenDskpt.css";

function WelcomeScreenDskpt(props) {
  const { overlapGroup2, menu, logoFinalBlanco3, subtitle, group121Props, group122Props, group126Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome-screen-dskpt screen">
        <div className="overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <div className="flex-row-4">
            <img className="social-footer-6" src="/img/social-footer@1x.svg" alt="Social Footer" />
            <img className="menu-4" src={menu} alt="Menu" />
          </div>
          <img className="logo-final-blanco-3-1" src={logoFinalBlanco3} alt="LOGO FINAL-blanco 3" />
          <div className="overlap-group3">
            <h1 className="subtitle">{subtitle}</h1>
            <Input />
            <img className="line-1" src="/img/line-1@1x.svg" alt="Line 1" />
            <MainButton />
          </div>
          <div className="group-129">
            <Group121 src={group121Props.src} />
            <Group122 src={group122Props.src} />
            <Group126 src={group126Props.src} />
            <div className="group-123">
              <div className="overlap-group1-2">
                <div className="ellipse-16"></div>
                <img className="shape" src="/img/shape@2x.svg" alt="Shape" />
                <div className="image-20"></div>
              </div>
            </div>
            <div className="group-125">
              <div className="overlap-group-6">
                <img className="group-130" src="/img/group-130@2x.svg" alt="Group 130" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreenDskpt;
