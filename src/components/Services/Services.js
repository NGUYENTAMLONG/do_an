import React from "react";
import "./style/Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services container">
      <div className="row mb-4">
        <div className="breadcumbs">
          <Link to="/">
            HOME <i className="fas fa-chevron-right" />
          </Link>
          <p>
            SERVICES <i className="fas fa-chevron-right" />
          </p>
        </div>
        <h1 className="services_title">What I Do?</h1>
        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-object-group" />
              </div>
              <div className="card__name">
                <h4>UI/UX Design</h4>
              </div>
              <div className="card__content">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-laptop-code" />
              </div>
              <div className="card__name">
                <h4>Web Development</h4>
              </div>
              <div className="card__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dignissimos esse iste, culpa aliquid architecto
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-drafting-compass" />
              </div>
              <div className="card__name">
                <h4>Graphic Design</h4>
              </div>
              <div className="card__content">
                Aliquam ullam provident porro sapiente, deleniti officiis odio
                natus eaque? Voluptatem at ab facilis? Tempora consequatur atque
                quibusdam?
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-user-tag" />
              </div>
              <div className="card__name">
                <h4>Branding</h4>
              </div>
              <div className="card__content">
                Far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-comments-dollar" />
              </div>
              <div className="card__name">
                <h4>Marketing</h4>
              </div>
              <div className="card__content">
                Consonantia, there live the blind texts. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-mobile-alt" />
              </div>
              <div className="card__name">
                <h4>Mobile App Design</h4>
              </div>
              <div className="card__content">
                Voluptatibus dignissimos esse iste, culpa aliquid architecto,
                ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-pen-nib" />
              </div>
              <div className="card__name">
                <h4>Visual Editor</h4>
              </div>
              <div className="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ullam provident porro sapiente, deleniti officiis odionatus
                eaque?
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card__icon">
                <i className="fas fa-hands-helping" />
              </div>
              <div className="card__name">
                <h4>IT Consultancy</h4>
              </div>
              <div className="card__content">
                Far far away, behind the word mountains, far from the countries
                Vokalia
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing container">
        <div className="row mb-4">
          <p className="small_title">PRICING</p>
          <h1>Choose Your Pricing Plan</h1>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="card__pay">
              <div className="card__pay__price">
                {" "}
                <h1>
                  <i className="fas fa-dollar-sign" />
                  49
                </h1>
              </div>
              <p className="card__pay__name">Personal</p>
              <div className="card__pay__benefits">
                <p>
                  <i className="fas fa-check-double" /> Strategic Alliance
                </p>
                <p className="benefit_important">
                  <i className="fas fa-check-double" /> Growth Expansion
                </p>
                <p>
                  <i className="fas fa-check-double" /> Business Planning
                </p>
              </div>
              <button>GET STARTED</button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="card__pay">
              <div className="card__pay__price">
                {" "}
                <h1>
                  <i className="fas fa-dollar-sign" />
                  79
                </h1>
              </div>
              <p className="card__pay__name">Professional</p>
              <div className="card__pay__benefits">
                <p>
                  <i className="fas fa-check-double" /> Strategic Alliance
                </p>
                <p className="benefit_important">
                  <i className="fas fa-check-double" /> Growth Expansion
                </p>
                <p>
                  <i className="fas fa-check-double" /> Business Planning
                </p>
                <p className="benefit_important">
                  <i className="fas fa-check-double" /> Contact Negotiation
                </p>
              </div>
              <button>GET STARTED</button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="card__pay">
              <div className="card__pay__price">
                {" "}
                <h1>
                  <i className="fas fa-dollar-sign" />
                  109
                </h1>
              </div>
              <p className="card__pay__name">Medium Business</p>
              <div className="card__pay__benefits">
                <p>
                  <i className="fas fa-check-double" /> Strategic Alliance
                </p>
                <p className="benefit_important">
                  <i className="fas fa-check-double" /> Growth Expansion
                </p>
                <p>
                  <i className="fas fa-check-double" /> Business Planning
                </p>
                <p className="benefit_important">
                  <i className="fas fa-check-double" /> Contact Negotiation
                </p>
                <p>
                  <i className="fas fa-check-double" /> Market Positioning
                </p>
              </div>
              <button>GET STARTED</button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="card__pay">
              <div className="card__pay__price">
                {" "}
                <h1>
                  <i className="fas fa-dollar-sign" />
                  149
                </h1>
              </div>
              <p className="card__pay__name">Gigantic Business</p>
              <div className="card__pay__benefits">
                <p>
                  <i className="fas fa-check-double" /> Strategic Alliance
                </p>
                <p className="benefit_important">
                  <i className="fas fa-check-double" /> Growth Expansion
                </p>
                <p>
                  <i className="fas fa-check-double" /> Business Planning
                </p>
                <p className="benefit_important">
                  <i className="fas fa-check-double" /> Contact Negotiation
                </p>
                <p>
                  <i className="fas fa-check-double" /> Market Positioning
                </p>
                <p>
                  <i className="fas fa-check-double" /> Package insurance
                </p>
              </div>
              <button>GET STARTED</button>
            </div>
          </div>
        </div>
        <div className="services_c">
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
