import React from "react";
import "./style/Experiences.css";
import { Link } from "react-router-dom";

export default function Experiences() {
  return (
    <div className="experiences container">
      <div className="row mb-4">
        <div className="breadcumbs">
          <Link to="/">
            HOME <i className="fas fa-chevron-right" />
          </Link>
          <p>
            EXPERIENCED <i className="fas fa-chevron-right" />
          </p>
        </div>
        <h1 className="experiences_title">Experiences</h1>
      </div>
      <div className="row mt-4">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card">
            <div className="card__icon">
              <i className="fas fa-user-graduate" />
            </div>
            <p className="card__stage">2014-2015</p>
            <div className="card__name">
              <h4>Master Degree of Design</h4>
            </div>
            <p className="card__location">
              <i className="fas fa-map-marked-alt" /> Google Inc.
            </p>
            <div className="card__content">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card">
            <div className="card__icon">
              <i className="fas fa-user-tie" />
            </div>
            <p className="card__stage">2013-2015</p>
            <div className="card__name">
              <h4>Art &amp; Creative Director</h4>
            </div>
            <p className="card__location">
              <i className="fas fa-map-marked-alt" /> Google Inc.
            </p>
            <div className="card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              soluta consequuntur at minus quod tenetur facere dolor maiores ad
              laboriosam temporibus cupiditate modi nesciunt esse itaque vitae
              ipsum, labore atque.
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card">
            <div className="card__icon">
              <i className="fas fa-user-tag" />
            </div>
            <p className="card__stage">2013-2014</p>
            <div className="card__name">
              <h4>Bachelor's Degree of C.A</h4>
            </div>
            <p className="card__location">
              <i className="fas fa-map-marked-alt" /> Google Inc.
            </p>
            <div className="card__content">
              Autem soluta consequuntur at minus quod tenetur facere dolor
              maiores ad laboriosam temporibus cupiditate modi nesciunt esse
              itaque vitae ipsum, labore atque.
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card">
            <div className="card__icon">
              <i className="fas fa-user-secret" />
            </div>
            <p className="card__stage">2015-2017</p>
            <div className="card__name">
              <h4>Wordpress Developer</h4>
            </div>
            <p className="card__location">
              <i className="fas fa-map-marked-alt" /> Facebook Inc.
            </p>
            <div className="card__content">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card">
            <div className="card__icon">
              <i className="fas fa-chalkboard-teacher" />
            </div>
            <p className="card__stage">2015-2016</p>
            <div className="card__name">
              <h4>Diploma in Computer</h4>
            </div>
            <p className="card__location">
              <i className="fas fa-map-marked-alt" /> Microsoft Inc.
            </p>
            <div className="card__content">
              Dolores iure at est, neque consectetur sapiente odio voluptatibus
              enim in vitae quod possimus error, exercitationem, perspiciatis
              ipsa minus fugit blanditiis cum.
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card">
            <div className="card__icon">
              <i className="fas fa-user-astronaut" />
            </div>
            <p className="card__stage">2015-2016</p>
            <div className="card__name">
              <h4>UI/UX Designer</h4>
            </div>
            <p className="card__location">
              <i className="fas fa-map-marked-alt" /> Mỏ - Địa Chất University.
            </p>
            <div className="card__content">
              Autem soluta consequuntur at minus quod tenetur facere dolor
              maiores ad laboriosam temporibus cupiditate modi nesciunt esse
              itaque vitae ipsum, labore atque.
            </div>
          </div>
        </div>
        <div className="experiences_c">
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
