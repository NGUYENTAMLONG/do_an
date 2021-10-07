import React from "react";
import "../components/Home/style/Home.css";
export default function SocialNetwork() {
  return (
    <div>
      <ul className="SocialNetwork">
        <li>
          <p>Follow us</p>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-2x fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-2x fa-behance-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-2x fa-dribbble"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-2x fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-2x fa-skype"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
