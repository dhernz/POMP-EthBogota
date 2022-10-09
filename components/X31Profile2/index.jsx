import React from "react";
import Avatar from "../Avatar";
import Dropdown from "../Dropdown";
import "./X31Profile2.css";

function X31Profile2(props) {
  const {
    x31Profile,
    menu,
    mentorA,
    solidity,
    codingLanguage,
    conferences,
    founder,
    developer,
    python1,
    gender,
    language1,
    mentoring,
    mentorLevel,
    language2,
    advanced1,
    open,
    female,
    advanced2,
    python2,
    intermediate1,
    intermediate2,
    ethBogota,
    notYet,
    contactInfo,
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
    connect,
    dropdown1Props,
    dropdown2Props,
    dropdown3Props,
    dropdown4Props,
    dropdown5Props,
    dropdown6Props,
    dropdown7Props,
    dropdown8Props,
    dropdown9Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x3-1-profile-2 screen" style={{ backgroundImage: `url(${x31Profile})` }}>
        <img className="menu-3" src={menu} alt="Menu" />
        <div className="overlap-group1-6">
          <div className="rectangle-34-5"></div>
          <Avatar />
          <div className="rectangle-33-3"></div>
          <div className="mentor-a-2 inter-bold-white-18px">{mentorA}</div>
          <div className="overlap-group-6">
            <div className="solidity-4 inter-normal-white-14px">{solidity}</div>
            <div className="coding-language-4 inter-normal-white-14px">{codingLanguage}</div>
            <div className="conferences-4 inter-normal-white-14px">{conferences}</div>
            <div className="founder-4 inter-normal-white-14px">{founder}</div>
            <div className="developer-4 roboto-normal-white-14px">{developer}</div>
            <div className="python-5 inter-normal-white-14px">{python1}</div>
            <div className="gender-4 inter-normal-white-14px">{gender}</div>
            <div className="language-7 inter-normal-white-14px">{language1}</div>
            <div className="mentoring-4 inter-normal-white-14px">{mentoring}</div>
            <Dropdown />
            <Dropdown className={dropdown1Props.className} />
            <Dropdown className={dropdown2Props.className} />
            <Dropdown className={dropdown3Props.className} />
            <Dropdown className={dropdown4Props.className} />
            <Dropdown className={dropdown5Props.className} />
            <Dropdown className={dropdown6Props.className} />
            <Dropdown className={dropdown7Props.className} />
            <Dropdown className={dropdown8Props.className} />
            <Dropdown className={dropdown9Props.className} />
            <div className="mentor-level-4 inter-normal-white-14px">{mentorLevel}</div>
            <div className="selected-4">
              <div className="language-8 inter-normal-black-14px">{language2}</div>
              <div className="advanced-3 inter-normal-black-14px">{advanced1}</div>
              <div className="selected-item-6 inter-normal-black-14px">{open}</div>
              <div className="selected-item-7 inter-normal-black-14px">{female}</div>
              <div className="selected-item-6 roboto-normal-black-14px">{advanced2}</div>
              <div className="selected-item-6 inter-normal-black-14px">{python2}</div>
              <div className="intermediate-5 inter-normal-black-12px">{intermediate1}</div>
              <div className="intermediate-6 inter-normal-black-12px">{intermediate2}</div>
              <div className="selected-item-6 inter-normal-black-12px">{ethBogota}</div>
              <div className="selected-item-7 inter-normal-black-14px">{notYet}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group2-4">
          <div className="contact-info inter-bold-white-18px">{contactInfo}</div>
          <div className="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx inter-normal-black-14px">{xxxxxxxxxxxxxxxxxxxxxxxxxxxxx}</div>
          <div className="button-10">
            <div className="connect inter-bold-white-18px">{connect}</div>
          </div>
        </div>
        <img className="social-footer-6" src="/img/social-footer-3@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default X31Profile2;
