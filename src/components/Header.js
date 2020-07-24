import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <p className="appName">React Counter V2</p>
    </div>
  );
};

export default Header;
