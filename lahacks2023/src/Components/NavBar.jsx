import React from "react";
import "./NavBar.css";
import navLogo from "../Views/logo_green.png";
import LoginButton from "./login";

function NavBar() {
  return (
    <div className="navbar" style={{ position: "absolute" }}>
      <img src={navLogo} className="nav-logo" alt="" />
      <h1 className="nav-name">Sincerely,</h1>
      <LoginButton />
    </div>
  );
}

export default NavBar;
