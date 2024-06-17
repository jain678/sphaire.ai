import React from "react";
// import logo from "../assets/sphaire_ai_logo.jpeg";
import "./Header.css";

function Header(props) {
  return (
    <>
      <div class="image-container">
        <div class="header">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F0847c238ea087b7b4030893c8c65e75f.cdn.bubble.io%2Ff1707364456330x362166065008557000%2FPicture14.png?w=48&h=48&auto=compress&dpr=1.25&fit=max"
            alt="Logo"
          />
          <h1>sphAIre Copilot</h1>
        </div>
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F0847c238ea087b7b4030893c8c65e75f.cdn.bubble.io%2Ff1712858061976x201604948258042200%2Ftestbanner.jpeg?w=768&h=407&auto=compress&dpr=1.25&fit=max"
          alt="Pic not found"
        />
      </div>
    </>
  );
}

export default Header;
