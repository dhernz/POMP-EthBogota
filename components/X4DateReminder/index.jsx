import React from "react";
import "./X4DateReminder.css";

function X4DateReminder(props) {
  const { logoSinFondo2, ok, youveGotAMentor, nowYouJustGottaR, lookingForwardToSeeYouSoon } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4-date-reminder-1 screen">
        <div className="overlap-group1-7">
          <img
            className="ant-designmenu-outlined-3"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group-7">
            <div className="rectangle-62-2"></div>
            <div className="rectangle-63-3"></div>
            <img className="social-footer-7" src="/img/social-footer-6@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2-3" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34-6"></div>
            <div className="button-11">
              <div className="ok inter-bold-white-18px">{ok}</div>
            </div>
            <div className="youve-got-a-mentor inter-bold-kimberly-18px">{youveGotAMentor}</div>
            <p className="now-you-just-gotta-r inter-normal-black-14px">{nowYouJustGottaR}</p>
            <p className="looking-forward-to-see-you-soon inter-semi-bold-black-14px">{lookingForwardToSeeYouSoon}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X4DateReminder;
