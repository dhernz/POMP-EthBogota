import React from "react";
import "./X4DateReminder4.css";

function X4DateReminder4(props) {
  const { logoSinFondo2, pastSessions, faq, rescheduleSession, lookForAMentor } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4-date-reminder-2 screen">
        <div className="overlap-group1-10">
          <img
            className="ant-designmenu-outlined-6"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group-10 inter-bold-kimberly-18px">
            <div className="rectangle-62-5"></div>
            <div className="rectangle-63-6"></div>
            <img className="social-footer-11" src="/img/social-footer-9@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2-6" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34-9"></div>
            <div className="past-sessions">{pastSessions}</div>
            <div className="rectangle-65-1"></div>
            <div className="faq-1">{faq}</div>
            <div className="rectangle-64-1"></div>
            <div className="reschedule-session-1">{rescheduleSession}</div>
            <div className="button-13">
              <div className="look-for-a-mentor inter-bold-white-18px">{lookForAMentor}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X4DateReminder4;
