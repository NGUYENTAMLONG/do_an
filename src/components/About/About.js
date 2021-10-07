import React, { Component } from "react";
import "./style/About.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Flip from "react-reveal/Flip";
import CountUp from "react-countup";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Scrollup from "../Scrollup";
export default function About() {
  let statistical = [
    { count: 1250, dr: 3, p: "Happy Clients" },
    { count: 1100, dr: 4, p: "Projects Done" },
    { count: 500, dr: 2, p: "Cups of Coffee" },
    { count: 642, dr: 3, p: "Working Hourse" },
  ];
  let show = statistical.map((item, index) => {
    return (
      <Rotate top left cascade key={index}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 content">
          <p className="count">
            <CountUp duration={item.dr} end={item.count} />
          </p>
          <p>{item.p}</p>
        </div>
      </Rotate>
    );
  });

  let skill_scale = [
    [
      {
        h6: "ADOBE PHOTOSHOP",
        icon: <i className="fas fa-2x fa-photo-video"></i>,
        percent: 90,
        vln: 90,
        vlmn: 0,
        vlmx: 100,
        w: "90%",
      },
      {
        h6: "JAVASCRIPT",
        icon: <i className="fab fa-2x fa-js"></i>,
        percent: 85,
        vln: 85,
        vlmn: 0,
        vlmx: 100,
        w: "85%",
      },
      {
        h6: "WORDPRESS",
        icon: <i className="fab fa-2x fa-wordpress"></i>,
        percent: 70,
        vln: 70,
        vlmn: 0,
        vlmx: 100,
        w: "70%",
      },
    ],
    [
      {
        h6: "FIGMA",
        icon: <i className="fab fa-2x fa-figma"></i>,
        percent: 95,
        vln: 95,
        vlmn: 0,
        vlmx: 100,
        w: "95%",
      },
      {
        h6: "HTML5",
        icon: <i className="fab fa-2x fa-html5"></i>,
        percent: 95,
        vln: 95,
        vlmn: 0,
        vlmx: 100,
        w: "95%",
      },
      {
        h6: "ADOBE XD",
        icon: <i className="fas fa-2x fa-icons"></i>,
        percent: 80,
        vln: 80,
        vlmn: 0,
        vlmx: 100,
        w: "80%",
      },
    ],
    [
      {
        h6: "ADOBE ILLUSTRATOR",
        icon: <i className="fas fa-2x fa-hat-wizard"></i>,
        percent: 90,
        vln: 90,
        vlmn: 0,
        vlmx: 100,
        w: "90%",
      },
      {
        h6: "CSS3",
        icon: <i className="fab fa-2x fa-css3-alt"></i>,
        percent: 90,
        vln: 90,
        vlmn: 0,
        vlmx: 100,
        w: "90%",
      },
      {
        h6: "SEO",
        icon: <i className="fas fa-2x fa-globe-americas"></i>,
        percent: 75,
        vln: 75,
        vlmn: 0,
        vlmx: 100,
        w: "75%",
      },
    ],
  ];
  function Format(props) {
    return (
      <div key={props.index}>
        <div className="tag">
          <Slide left>
            <h6>
              {props.icon} {props.h6}
            </h6>
          </Slide>
          <Rotate top left cascade>
            <p className="percent">
              <CountUp duration={3} end={props.percent} />%
            </p>
          </Rotate>
        </div>
        <div className="progress">
          <Fade left>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={props.vln}
              aria-valuemin={props.vlmn}
              aria-valuemax={props.vlmx}
              style={{ width: props.w }}
            />
          </Fade>
        </div>
      </div>
    );
  }
  let showSkills_1 = skill_scale[0].map((item, index) => {
    return (
      <Format
        key={index}
        h6={item.h6}
        icon={item.icon}
        percent={item.percent}
        vln={item.vln}
        vlmn={item.vlmx}
        vlmx={item.vlmx}
        w={item.w}
      />
    );
  });
  let showSkills_2 = skill_scale[1].map((item, index) => {
    return (
      <Format
        key={index}
        h6={item.h6}
        icon={item.icon}
        percent={item.percent}
        vln={item.vln}
        vlmn={item.vlmx}
        vlmx={item.vlmx}
        w={item.w}
      />
    );
  });
  let showSkills_3 = skill_scale[2].map((item, index) => {
    return (
      <Format
        key={index}
        h6={item.h6}
        icon={item.icon}
        percent={item.percent}
        vln={item.vln}
        vlmn={item.vlmx}
        vlmx={item.vlmx}
        w={item.w}
      />
    );
  });
  return (
    <div>
      <div>
        <div className="about container">
          <div className="row mb-4">
            <Bounce left cascade>
              <div className="breadcumbs">
                <Link to="/">
                  HOME <i className="fas fa-chevron-right" />
                </Link>
                <p>
                  ABOUT US <i className="fas fa-chevron-right" />
                </p>
              </div>
            </Bounce>
            <Flip bottom>
              <h1 className="about_title">About Me</h1>
            </Flip>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col__left">
              <div className="row">{show}</div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col__right">
              <Flip bottom>
                <p className="small_title">ABOUT ME</p>
              </Flip>
              <Bounce right>
                <h2>
                  A UI/UX Designer &amp; Web Developer Based in Philippines
                </h2>
                <p className="text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
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
              </Bounce>
            </div>
          </div>
        </div>
        <div className="skill container">
          <div className="row">
            <Flip bottom>
              <p className="small_title">SKILLS</p>
              <h1>My Skills</h1>
            </Flip>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              {showSkills_1}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              {showSkills_2}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              {showSkills_3}
            </div>
          </div>
        </div>
        <div className="testimonial container">
          <div className="row mb-4">
            <Flip bottom>
              <p className="small_title">TESTIMONIAL</p>
              <h1>Happy Guests</h1>
            </Flip>
          </div>
          <Fade bottom>
            <Carousel />
          </Fade>

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
      <Scrollup />
    </div>
  );
}
