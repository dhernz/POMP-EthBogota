import React from "react";
import Dropdown from "../Dropdown";
import Button from "../Button";
import "./X12ShowNfts.css";

function X12ShowNfts(props) {
  const {
    x12ShowNfts,
    ab,
    menu,
    filter,
    sort,
    language,
    mentorLevel,
    mentoring,
    gender,
    developer,
    solidity,
    codingLanguage,
    python1,
    python2,
    advanced,
    conferences,
    founder,
    dropdown1Props,
    dropdown2Props,
    dropdown3Props,
    dropdown4Props,
    dropdown5Props,
    dropdown6Props,
    dropdown7Props,
    dropdown8Props,
    dropdown9Props,
    buttonProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1-2-show-nfts screen" style={{ backgroundImage: `url(${x12ShowNfts})` }}>
        <div className="flex-row-1">
          <div className="avatar-3">
            <div className="ab-3 valign-text-middle">{ab}</div>
          </div>
          <img className="menu-2" src={menu} alt="Menu" />
        </div>
        <div className="button-container">
          <div className="button-8">
            <div className="filter inter-bold-white-18px">{filter}</div>
          </div>
          <div className="button-9">
            <div className="sort inter-bold-white-18px">{sort}</div>
          </div>
        </div>
        <div className="overlap-group8">
          <div className="rectangle-33-2"></div>
          <div className="group-72">
            <div className="vector-container">
              <img className="vector-5" src="/img/vector-10@2x.svg" alt="Vector" />
              <img className="vector-6" src="/img/vector-11@2x.svg" alt="Vector" />
            </div>
            <div className="overlap-group3-2">
              <div className="language-6 inter-normal-white-14px">{language}</div>
              <Dropdown className={dropdown1Props.className} />
            </div>
            <div className="overlap-group-5">
              <Dropdown className={dropdown2Props.className} />
              <div className="mentor-level-3 inter-normal-white-14px">{mentorLevel}</div>
            </div>
            <div className="overlap-group-5">
              <div className="mentoring-3 inter-normal-white-14px">{mentoring}</div>
              <Dropdown className={dropdown3Props.className} />
            </div>
            <div className="overlap-group-5">
              <div className="gender-3 inter-normal-white-14px">{gender}</div>
              <Dropdown className={dropdown4Props.className} />
            </div>
            <div className="overlap-group-5">
              <div className="developer-3 roboto-normal-white-14px">{developer}</div>
              <Dropdown className={dropdown5Props.className} />
            </div>
            <div className="overlap-group1-5 inter-normal-white-14px">
              <div className="solidity-3">{solidity}</div>
              <div className="coding-language-3">{codingLanguage}</div>
              <div className="python-3">{python1}</div>
              <Dropdown className={dropdown6Props.className} />
              <Dropdown />
              <Dropdown className={dropdown7Props.className} />
              <div className="selected-3">
                <div className="python-4 inter-normal-black-14px">{python2}</div>
                <div className="advanced-2 inter-normal-black-12px">{advanced}</div>
              </div>
            </div>
            <div className="overlap-group-5">
              <div className="conferences-3 inter-normal-white-14px">{conferences}</div>
              <Dropdown className={dropdown8Props.className} />
            </div>
            <div className="overlap-group-5">
              <div className="founder-3 inter-normal-white-14px">{founder}</div>
              <Dropdown className={dropdown9Props.className} />
            </div>
          </div>
          <Button className={buttonProps.className}>{buttonProps.children}</Button>
        </div>
        <img className="social-footer-5" src="/img/social-footer-2@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default X12ShowNfts;
