import React from "react";
import "./style/Works.css";
import { Link } from "react-router-dom";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.webp";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
export default function Works() {
  let array_box = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
  ];
  let show_box = array_box.map((item, index) => {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={item.id}>
        <Rotate top left>
          <div
            className="box"
            style={{
              backgroundImage: `url("${item.img}")`,
            }}
          >
            {/* <img src="img1.webp" alt="1" /> */}
            <div className="box__content">
              <h3>Branding &amp; Illustration Design</h3>
              <p>WEB DESIGN</p>
            </div>
          </div>
        </Rotate>
      </div>
    );
  });
  return (
    <div>
      <div className="works container">
        <div className="row">
          <div className="breadcumbs">
            <Fade left>
              <Link to="/">
                HOME <i className="fas fa-chevron-right" />
              </Link>
              <p>
                WORK <i className="fas fa-chevron-right" />
              </p>
            </Fade>
          </div>
          <Fade right>
            <h1 className="works_title">Portfolio</h1>
          </Fade>
        </div>
        <div className="row mb-4">{show_box}</div>

        {/* Page navigation */}
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center mt-4">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="http://localhost:3005/works"
                tabIndex={-1}
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="http://localhost:3005/works">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="http://localhost:3005/works">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="http://localhost:3005/works">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="http://localhost:3005/works">
                Next
              </a>
            </li>
          </ul>
        </nav>

        <div className="works_c">
          <p>
            Copyright ©2021 All rights reserved | This template is made with ❤️
            by
            <a href="https://preview.colorlib.com/theme/schmidt/index.html">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
