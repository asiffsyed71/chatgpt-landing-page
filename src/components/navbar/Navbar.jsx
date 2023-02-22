import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";
import "./Navbar.css";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar-links_container">
          <NavItems />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a>Sign in</a>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {isMenuOpen ? (
          <RiCloseLine onClick={() => setIsMenuOpen(false)}/>
        ) : (
          <RiMenu3Line onClick={() => setIsMenuOpen(true)} />
        )}
        {isMenuOpen && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <NavItems />
            </div>
            <div className="gpt3__navbar-sign">
              <a>Sign in</a>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
