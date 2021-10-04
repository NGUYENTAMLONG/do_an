import React, { Component } from "react";
import "./style/About.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

export default function About() {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: false,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: false,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };

  return (
    <div>
      <div>
        <div className="about container">
          <div className="row mb-4">
            <div className="breadcumbs">
              <Link to="/">
                HOME <i className="fas fa-chevron-right" />
              </Link>
              <p>
                ABOUT US <i className="fas fa-chevron-right" />
              </p>
            </div>
            <h1 className="about_title">About Me</h1>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col__left">
              <div className="row row_1">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 content">
                  <p className="count">5,000</p>
                  <p>Happy Clients</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 content">
                  <p className="count">1,200</p>
                  <p>Projects Done</p>
                </div>
              </div>
              <div className="row row_2">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 content">
                  <p className="count">500</p>
                  <p>Cups of Coffee</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 content">
                  <p className="count">642</p>
                  <p>Working Hourse</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col__right">
              <p className="small_title">ABOUT ME</p>
              <h2>A UI/UX Designer &amp; Web Developer Based in Philippines</h2>
              <p className="text">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 info_left">
                  <p>
                    Name: <span>Clyde Nowitzki</span>
                  </p>
                  <p>
                    Date of birth: <span>January 01, 1990</span>
                  </p>
                  <p>
                    Address: <span> San Francisco CA 97987 USA</span>
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 info_left">
                  <p>
                    Zip code: <span>Clyde Nowitzki</span>
                  </p>
                  <p>
                    Email: <span>cydenowitzki@gmail.com</span>
                  </p>
                  <p>
                    Phone: <span>+1-2234-5678-9-0 </span>
                  </p>
                </div>
              </div>
              <button>DOWNLOAD CV</button>
            </div>
          </div>
        </div>
        <div className="skill container">
          <div className="row">
            <p className="small_title">SKILLS</p>
            <h1>My Skills</h1>
          </div>
          <div className="row mt-4">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="tag">
                <h6>ADOBE PHOTOSHOP</h6>
                <p className="percent">90%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="tag">
                <h6>JAVASCRIPT</h6>
                <p className="percent">85%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                />
              </div>
              <div className="tag">
                <h6>WORDPRESS</h6>
                <p className="percent">70%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="tag">
                <h6>FIGMA</h6>
                <p className="percent">95%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                />
              </div>
              <div className="tag">
                <h6>HTML5</h6>
                <p className="percent">95%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                />
              </div>
              <div className="tag">
                <h6>ADOBE XD</h6>
                <p className="percent">80%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="tag">
                <h6>ADOBE ILLUSTRATOR</h6>
                <p className="percent">90%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="tag">
                <h6>CSS3</h6>
                <p className="percent">90%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="tag">
                <h6>SEO</h6>
                <p className="percent">75%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial container">
          <div className="row mb-4">
            <p className="small_title">TESTIMONIAL</p>
            <h1>Happy Guests</h1>
          </div>
          <Carousel />
          <div className="about_c">
            <p>
              Copyright ©2021 All rights reserved | This template is made with
              ❤️ by
              <a href="https://preview.colorlib.com/theme/schmidt/index.html">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
