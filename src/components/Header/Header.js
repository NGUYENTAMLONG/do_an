import React from "react";
import "./style/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  let menu = (
    <div className="menu">
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
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="header container">
      <Link to="/" className="logo">
        J<i className="fas fa-dot-circle" />
        hn Smith.
      </Link>
      <i className="fas fa-2x fa-align-right"></i>
      <div className="menu_reponsive">{menu}</div>
      {menu}
    </div>
  );
}
