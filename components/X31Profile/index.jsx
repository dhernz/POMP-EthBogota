import React from "react";
import Group72 from "../Group72";
import "./X31Profile.css";

function X31Profile(props) {
  const { x31Profile, menu, ab, place, contactInfo, xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, connect } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x3-1-profile screen" style={{ backgroundImage: `url(${x31Profile})` }}>
        <img className="menu" src={menu} alt="Menu" />
        <div className="overlap-group10">
          <div className="flex-row">
            <div className="avatar">
              <div className="ab valign-text-middle inter-bold-kimberly-16px">{ab}</div>
            </div>
            <div className="overlap-group12">
              <div className="place inter-bold-white-18px">{place}</div>
            </div>
          </div>
          <Group72 />
        </div>
        <div className="overlap-group11">
          <div className="contact-info inter-bold-white-18px">{contactInfo}</div>
          <div className="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx inter-normal-black-14px">{xxxxxxxxxxxxxxxxxxxxxxxxxxxxx}</div>
          <div className="button">
            <div className="connect inter-bold-white-18px">{connect}</div>
          </div>
        </div>
        <img className="social-footer" src="/img/social-footer-6@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default X31Profile;
