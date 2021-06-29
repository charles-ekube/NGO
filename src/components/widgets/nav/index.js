import React, { useState } from "react";
import "./style.css";
import { Logo } from "../../../assets";
import { DonateBtn, NavToggle } from "../../buttons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <DonateBtn
                border_color="#027DC3"
                text_color="#027DC3"
                bgColor="inherit"
              />
            </li>
          </ul>
          <div className="toggle-container">
            <NavToggle handleToggle={handleToggle} />
          </div>
        </nav>
        {showNav ? (
        <nav className="mobile-nav">
          <ul className="mobile-navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <DonateBtn
                border_color="#027DC3"
                text_color="#027DC3"
                bgColor="inherit"
              />
            </li>
          </ul>
        </nav>
        ) : null}
      </header>
    </>
  );
};

export { Navbar };
