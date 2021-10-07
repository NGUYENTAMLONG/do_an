import React from "react";
import "./style/Experiences.css";
import { Link } from "react-router-dom";
import Scrollup from "../Scrollup";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

export default function Experiences() {
  let array_Ex = [
    {
      icon: <i className="fas fa-user-graduate" />,
      period: "2014-2015",
      role: "Master Degree of Design",
      location: "Google Inc.",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      icon: <i className="fas fa-user-tie" />,
      period: "2013-2015",
      role: "Art & Creative Director",
      location: "Apple Inc.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta consequuntur at minus quod tenetur facere dolor maiores ad laboriosam temporibus cupiditate modi nesciunt esse itaque vitae ipsum, labore atque.",
    },
    {
      icon: <i className="fas fa-user-tag" />,
      period: "2013-2014",
      role: "Bachelor's Degree of C.A",
      location: "Google Inc.",
      content:
        "Autem soluta consequuntur at minus quod tenetur facere dolor maiores ad laboriosam temporibus cupiditate modi nesciunt esse itaque vitae ipsum, labore atque.",
    },
    {
      icon: <i className="fas fa-user-secret" />,
      period: "2015-2017",
      role: "Wordpress Developer",
      location: "Facebook Inc.",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      icon: <i className="fas fa-chalkboard-teacher" />,
      period: "2015-2016",
      role: "Diploma in Computer",
      location: "Microsoft Inc.",
      content:
        "Dolores iure at est, neque consectetur sapiente odio voluptatibus enim in vitae quod possimus error, exercitationem, perspiciatis ipsa minus fugit blanditiis cum.",
    },
    {
      icon: <i className="fas fa-user-astronaut" />,
      period: "2015-2016",
      role: "UI/UX Designer",
      location: "Mỏ - Địa Chất University.",
      content:
        "Autem soluta consequuntur at minus quod tenetur facere dolor maiores ad laboriosam temporibus cupiditate modi nesciunt esse itaque vitae ipsum, labore atque.",
    },
  ];
  let show_Ex = array_Ex.map((item, index) => {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
        <div className="card">
          <Zoom top>
            <div className="card__icon">{item.icon}</div>
          </Zoom>
          <p className="card__stage">{item.period}</p>
          <div className="card__name">
            <h4>
              <Fade top cascade>
                {item.role}
              </Fade>
            </h4>
          </div>
          <p className="card__location">
            <i className="fas fa-map-marked-alt" /> {item.location}
          </p>
          <div className="card__content">{item.content}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="experiences container">
      <div className="row mb-4">
        <div className="breadcumbs">
          <Fade left>
            <Link to="/">
              HOME <i className="fas fa-chevron-right" />
            </Link>
            <p>
              EXPERIENCED <i className="fas fa-chevron-right" />
            </p>
          </Fade>
        </div>
        <Fade right>
          <h1 className="experiences_title">Experiences</h1>
        </Fade>
      </div>
      <div className="row mt-4">
        <Slide top cascade>
          {show_Ex}
        </Slide>
      </div>
      <Scrollup />
      <div className="experiences_c">
        <p>
          Copyright ©2021 All rights reserved | This template is made with ❤️ by
          <a href="https://preview.colorlib.com/theme/schmidt/index.html">
            Colorlib
          </a>
        </p>
      </div>
    </div>
  );
}
