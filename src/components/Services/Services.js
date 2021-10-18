import React from "react";
import "./style/Services.css";
import { Link } from "react-router-dom";
import Scrollup from "../Scrollup";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

export default function Services() {
  let array_card = [
    {
      icon: <i className="fas fa-object-group" />,
      name: "UI/UX Design",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <i className="fas fa-laptop-code" />,
      name: "Web Development",
      content:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos esse iste, culpa aliquid architecto",
    },
    {
      icon: <i className="fas fa-drafting-compass" />,
      name: "Graphic Design",
      content:
        "Aliquam ullam provident porro sapiente, deleniti officiis odio natus eaque? Voluptatem at ab facilis? Tempora consequatur atque quibusdam?",
    },
    {
      icon: <i className="fas fa-user-tag" />,
      name: "Branding",
      content:
        "Far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <i className="fas fa-comments-dollar" />,
      name: "Marketing",
      content:
        "Consonantia, there live the blind texts. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <i className="fas fa-mobile-alt" />,
      name: "Mobile App Design",
      content:
        "Voluptatibus dignissimos esse iste, culpa aliquid architecto, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <i className="fas fa-pen-nib" />,
      name: "Visual Editor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam provident porro sapiente, deleniti officiis odionatus eaque?",
    },
    {
      icon: <i className="fas fa-hands-helping" />,
      name: "IT Consultancy",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia ...!",
    },
  ];
  let show_card = array_card.map((item, index) => {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        <div className="card">
          <Fade top>
            <div className="card__icon">{item.icon}</div>
          </Fade>

          <div className="card__name">
            <h4>{item.name}</h4>
          </div>
          <Fade bottom>
            <div className="card__content">{item.content}</div>
          </Fade>
        </div>
      </div>
    );
  });
  let array_pricing = [
    {
      price: "49",
      name: "Personal",
      benefits: ["Strategic Alliance", "Growth Expansion", "Business Planning"],
    },
    {
      price: "79",
      name: "Professional",
      benefits: [
        "Strategic Alliance",
        "Growth Expansion",
        "Business Planning",
        "Contact Negotiation",
      ],
    },
    {
      price: "109",
      name: "Medium Business",
      benefits: [
        "Strategic Alliance",
        "Growth Expansion",
        "Business Planning",
        "Contact Negotiation",
        "Market Positioning",
      ],
    },
    {
      price: "149",
      name: "Gigantic Business",
      benefits: [
        "Strategic Alliance",
        "Growth Expansion",
        "Business Planning",
        "Contact Negotiation",
        "Market Positioning",
        "Package insurance",
      ],
    },
  ];
  let show_pricing = array_pricing.map((item, index) => {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" key={index}>
        <div className="card__pay">
          <div className="card__pay__price">
            <h1>
              <i className="fas fa-dollar-sign" />
              {item.price}
            </h1>
          </div>
          <p className="card__pay__name">{item.name}</p>
          <div className="card__pay__benefits">
            {item.benefits.map((i, index) => {
              if (
                i.indexOf("Growth Expansion") !== -1 ||
                i.indexOf("Contact Negotiation") !== -1 ||
                i.indexOf("Package insurance") !== -1
              ) {
                return (
                  <p className="benefit_important" key={index}>
                    <i className="fas fa-check-double" /> {i}
                  </p>
                );
              } else {
                return (
                  <p key={index}>
                    <i className="fas fa-check-double" /> {i}
                  </p>
                );
              }
            })}
          </div>
          <button>GET STARTED</button>
        </div>
      </div>
    );
  });

  return (
    <div className="services container">
      <div className="row mb-4">
        <div className="breadcumbs">
          <Fade bottom>
            <Link to="/">
              HOME <i className="fas fa-chevron-right" />
            </Link>
            <p>
              SERVICES <i className="fas fa-chevron-right" />
            </p>
          </Fade>
        </div>
        <Fade left>
          <h1 className="services_title">What I Do?</h1>
        </Fade>
        <div className="row mt-4 d-flex justify-content-center">
          <Flip top cascade>
            {show_card}
          </Flip>
        </div>
      </div>
      <div className="pricing container">
        <div className="row mb-4">
          <p className="small_title">PRICING</p>
          <h1>Choose Your Pricing Plan</h1>
        </div>

        <div className="row mt-4">
          <Fade right>{show_pricing}</Fade>
        </div>
        <Scrollup />
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
