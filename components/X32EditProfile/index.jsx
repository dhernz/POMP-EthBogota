import React from "react";
import Group72 from "../Group72";
import "./X32EditProfile.css";

function X32EditProfile(props) {
  const { x32EditProfile, menu, ab, place, cancel, done, group72Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x3-2-edit-profile screen" style={{ backgroundImage: `url(${x32EditProfile})` }}>
        <img className="menu-1" src={menu} alt="Menu" />
        <div className="flex-row-1">
          <div className="avatar-1">
            <div className="ab-1 valign-text-middle inter-bold-kimberly-16px">{ab}</div>
          </div>
          <div className="overlap-group11-1">
            <div className="place-1 inter-bold-white-18px">{place}</div>
          </div>
        </div>
        <div className="overlap-group10-1">
          <Group72 className={group72Props.className} />
          <div className="button-container">
            <div className="button-2">
              <div className="cancel inter-bold-white-18px">{cancel}</div>
            </div>
            <div className="button-3">
              <div className="done inter-bold-white-18px">{done}</div>
            </div>
          </div>
        </div>
        <img className="social-footer-2" src="/img/social-footer-8@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default X32EditProfile;
