import React from "react";
import "./Second.css";
import img1 from "./Images/illustration-features-tab-1.svg";

const Second = () => {
  return (
    <div className="second">
      <div className="thirddiv">
        <div className="bgrc"></div>
        <img className="jjj" src={img1} alt="" />
      </div>
      <div className="fourthdiv">
        <h2 className="book">Bookmark in one click</h2>
        <p className="org">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className="more info">More Info</button>
      </div>
    </div>
  );
};

export default Second;
