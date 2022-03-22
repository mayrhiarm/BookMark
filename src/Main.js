import React from "react";
import "./Main.css";
import img from "./Images/illustration-hero (1).svg";

const Main = () => {
  return (
    <div className="first">
      <div className="firstdiv">
        <div className="background"></div>
        <img src={img} alt="" className="img" />
      </div>
      <div className="seconddiv">
        <h2 className="simple">A Simple Bookmark Manager</h2>
        <p className="text">
          A clean and simple interface to organize your favourite website. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button className="btn">Get it on Chrome</button>{" "}
        <button className="btnn">Get it on Firefox</button>
      </div>
    </div>
  );
};

export default Main;
