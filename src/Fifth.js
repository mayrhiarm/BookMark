import React from "react";
import "./Fifth.css";
import im from "./Images/logo-bookmark.svg";
import fb from "./Images/icon-facebook.svg";
import twit from "./Images/icon-twitter.svg";

const Fifth = () => {
  return (
    <div>
      <div className="footer">
        <p className="join">35,000+ ALREADY JOINED </p>

        <p className="stay">Stay up-to-date with what we're doing</p>
        <div className="cont">
          <input
            type="email"
            placeholder="example@email/com"
            className="example"
          />
          <button className="us">Contact Us</button>
        </div>
      </div>
      <div className="mark">
        <div className="fpc">
          <img src={im} alt="" />
          <div className="fpcc">
            <p>FEATURES</p>
            <p>PRICING</p>
            <p>CONTACT</p>
          </div>
        </div>
        <div className="logos">
          <img className="fb" src={fb} alt="" />
          <img className="twit" src={twit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Fifth;
