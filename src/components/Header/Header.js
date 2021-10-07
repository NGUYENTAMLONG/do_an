import React from "react";
import "./style/Header.css";
import { Link } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";

export default function Header() {
  let menu = (
    <div className="menu">
      <Rotate top left cascade>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/experiences">Experiences</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Rotate>
    </div>
  );
  return (
    <div className="header container">
      <Flip left>
        <Link to="/" className="logo">
          J<i className="fas fa-dot-circle" />
          hn Smith.
        </Link>
      </Flip>
      <i className="fas fa-2x fa-align-right"></i>
      <div className="menu_reponsive">{menu}</div>
      {menu}
    </div>
  );
}
