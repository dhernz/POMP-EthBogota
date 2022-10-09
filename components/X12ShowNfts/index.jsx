import React from "react";
import Button from "../Button";
import "./X12ShowNfts.css";

function X12ShowNfts(props) {
  const { x12ShowNfts, ab, menu, filter, buttonProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1-2-show-nfts screen" style={{ backgroundImage: `url(${x12ShowNfts})` }}>
        <div className="flex-row-2">
          <div className="avatar-2">
            <div className="ab-2 valign-text-middle dmsans-bold-kimberly-12px">{ab}</div>
          </div>
          <img className="menu-2" src={menu} alt="Menu" />
        </div>
        <div className="button-container-1">
          <div className="button-4">
            <div className="filter inter-bold-white-18px">{filter}</div>
          </div>
          <Button>{buttonProps.children}</Button>
        </div>
        <div className="overlap-group-3">
          <img className="social-footer-3" src="/img/social-footer-5@2x.svg" alt="Social Footer" />
          <div className="rectangle-33"></div>
        </div>
      </div>
    </div>
  );
}

export default X12ShowNfts;
