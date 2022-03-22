import React from "react";
import "./Navbar.css";
import img from "./Images/logo-bookmark.svg";

const Navbar = () => {
  let hbg = document.querySelector(".hamburger");
  let navMenu = document.querySelector(".nav-menu");

  function bag() {
    let appear = hbg.classList.contains("active");
    if (!appear) {
      hbg.classList.toggle("active");
      navMenu.classList.toggle("active");
    } else {
      hbg.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }

  return (
    <div>
      <header>
        <nav class="navbar">
          <a href="" class="nav-branding">
            <img src={img} alt="" />
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="./index.html" class="nav-link">
                FEATURES
              </a>
            </li>
            <li class="nav-item">
              <a href="./About.html" class="nav-link">
                PRICING
              </a>
            </li>
            <li class="nav-item">
              <a href="./Contact.html" class="nav-link">
                CONTACT
              </a>
            </li>
            <li class="nav-item">
              <button class="nav-link log">LOGIN</button>
            </li>
          </ul>

          <div onClick={bag} class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
