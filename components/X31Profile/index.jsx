import React from "react";
import Avatar from "../Avatar";
import Dropdown from "../Dropdown";
import Input from "../Input";
import "./X31Profile.css";

function X31Profile(props) {
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
    rate,
    rating,
    howWasYourSession,
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
      <div className="x3-1-profile-1 screen" style={{ backgroundImage: `url(${x31Profile})` }}>
        <img className="menu" src={menu} alt="Menu" />
        <div className="overlap-group2">
          <div className="rectangle-34"></div>
          <Avatar />
          <div className="rectangle-33"></div>
          <div className="mentor-a inter-bold-white-18px">{mentorA}</div>
          <div className="overlap-group">
            <div className="solidity inter-normal-white-14px">{solidity}</div>
            <div className="coding-language inter-normal-white-14px">{codingLanguage}</div>
            <div className="conferences inter-normal-white-14px">{conferences}</div>
            <div className="founder inter-normal-white-14px">{founder}</div>
            <div className="developer roboto-normal-white-14px">{developer}</div>
            <div className="python inter-normal-white-14px">{python1}</div>
            <div className="gender inter-normal-white-14px">{gender}</div>
            <div className="language inter-normal-white-14px">{language1}</div>
            <div className="mentoring inter-normal-white-14px">{mentoring}</div>
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
            <div className="mentor-level inter-normal-white-14px">{mentorLevel}</div>
            <div className="selected">
              <div className="language-1 inter-normal-black-14px">{language2}</div>
              <div className="advanced inter-normal-black-14px">{advanced1}</div>
              <div className="selected-item inter-normal-black-14px">{open}</div>
              <div className="selected-item-1 inter-normal-black-14px">{female}</div>
              <div className="selected-item roboto-normal-black-14px">{advanced2}</div>
              <div className="selected-item inter-normal-black-14px">{python2}</div>
              <div className="intermediate inter-normal-black-12px">{intermediate1}</div>
              <div className="intermediate-1 inter-normal-black-12px">{intermediate2}</div>
              <div className="selected-item inter-normal-black-12px">{ethBogota}</div>
              <div className="selected-item-1 inter-normal-black-14px">{notYet}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group3">
          <img className="social-footer" src="/img/social-footer@2x.svg" alt="Social Footer" />
          <div className="rectangle-35"></div>
          <div className="button">
            <div className="rate inter-bold-white-18px">{rate}</div>
          </div>
          <div className="rating inter-bold-white-18px">{rating}</div>
          <div className="overlap-group1">
            <img className="line-2" src="/img/line-2@2x.svg" alt="Line 2" />
            <div className="ellipse-17"></div>
          </div>
          <img className="iwwabad-o" src="/img/iwwa-bad-o@2x.svg" alt="iwwa:bad-o" />
          <img className="iwwagood-o" src="/img/iwwa-good-o@2x.svg" alt="iwwa:good-o" />
          <Input />
          <div className="how-was-your-session inter-normal-black-14px-2">{howWasYourSession}</div>
        </div>
      </div>
    </div>
  );
}

export default X31Profile;
