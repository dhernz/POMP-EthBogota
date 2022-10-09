import React from "react";
import Button from "../Button";
import "./X4DateReminder2.css";

function X4DateReminder2(props) {
  const { logoSinFondo2, mentoringSessionInfo, faq, rescheduleSession, buttonProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x4-date-reminder screen">
        <div className="overlap-group1-9">
          <img
            className="ant-designmenu-outlined-5"
            src="/img/ant-design-menu-outlined@2x.svg"
            alt="ant-design:menu-outlined"
          />
          <div className="overlap-group-9 inter-bold-kimberly-18px">
            <div className="rectangle-62-4"></div>
            <div className="rectangle-63-5"></div>
            <img className="social-footer-9" src="/img/social-footer-8@2x.svg" alt="Social Footer" />
            <img className="logo-sin-fondo-2-5" src={logoSinFondo2} alt="Logo sin fondo 2" />
            <div className="rectangle-34-8"></div>
            <div className="mentoring-session-info">{mentoringSessionInfo}</div>
            <div className="rectangle-65"></div>
            <div className="faq">{faq}</div>
            <div className="rectangle-64"></div>
            <div className="reschedule-session">{rescheduleSession}</div>
            <Button className={buttonProps.className}>{buttonProps.children}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X4DateReminder2;
