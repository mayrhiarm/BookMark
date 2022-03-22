import React from "react";
import "./Third.css";
import img from "./Images/logo-chrome.svg";
import imgg from "./Images/logo-firefox.svg";
import imj from "./Images/bg-dots.svg";
import imo from "./Images/logo-opera.svg";

const Third = () => {
  return (
    <div>
      <h2 className="down">Download the extension</h2>
      <p className="text">
        We've got more browsers in the pipeline. Please do not us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className="all">
        <div className=" zz chrome">
          <img className=" yy ch" src={img} alt="" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <img className="dot" src={imj} alt="" />
          <button className="add">Add & install Extension</button>
        </div>

        <div className=" zz fox">
          <img className=" yy fire" src={imgg} alt="" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <img className="dot" src={imj} alt="" />
          <button className="add">Add & install Extension</button>
        </div>
        <div className=" zz mini">
          <img className=" yy opera" src={imo} alt="" />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <img className="dot" src={imj} alt="" />
          <button className="add">Add & install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Third;
