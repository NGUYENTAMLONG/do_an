import React from "react";
import "./style/Contact.css";
import { Link } from "react-router-dom";
import Scrollup from "../Scrollup";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default function Contact() {
  return (
    <div>
      <div className="contact container">
        <div className="row mb-4">
          <div className="breadcumbs">
            <Fade left>
              <Link to="/">
                HOME <i className="fas fa-chevron-right" />
              </Link>
              <p>
                CONTACT <i className="fas fa-chevron-right" />
              </p>
            </Fade>
          </div>
          <Fade right>
            <h1 className="contact_title">Contact us</h1>
          </Fade>
        </div>
        <div className="contact row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h3>
              <b>Contact us</b>
            </h3>
            <p>We're open for any suggestion or just to have a chat</p>
            <div>
              <div>
                <p>
                  <span>
                    <b>ADDRESS: </b>
                  </span>
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <b>EMAIL: </b>
                  </span>
                  info@yoursite.com
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <b>PHONE: </b>
                  </span>
                  + 1235 2355 98
                </p>
              </div>
            </div>
            <Fade top cascade>
              <form id="contactForm" name="contactForm" className="contactForm">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={4}
                        placeholder="Create a message here"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary pl-5 pr-5"
                        style={{
                          backgroundColor: "#0084ff",
                          fontWeight: "bold",
                        }}
                      />
                      <div className="submitting" />
                    </div>
                  </div>
                </div>
              </form>
              <div className="w-100 social-media mt-5">
                <h3>
                  <b>Follow us here</b>
                </h3>
                <Fade top cascade>
                  <p>
                    <a className="non-textdecoration-web" href="#">
                      FACEBOOK
                    </a>
                    <a className="non-textdecoration-web" href="#">
                      TWITTER
                    </a>
                    <a className="non-textdecoration-web" href="#">
                      INSTAGRAM
                    </a>
                    <a className="non-textdecoration-web" href="#">
                      DRIBBBLE
                    </a>
                  </p>
                </Fade>
              </div>
            </Fade>
          </div>
          {/* </div>
            <div className="contact_box"> */}

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Slide right cascade>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9302652476435!2d105.78692921475562!3d21.03547608599477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab49e93f280f%3A0x9deb60ce2fb036a8!2zMjYgVHLhuqduIFRow6FpIFTDtG5nLCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1603272026990!5m2!1svi!2s"
                  width="100%"
                  height={670}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </Slide>
          </div>
        </div>
        <div className="contact_c">
          <p>
            Copyright ©2021 All rights reserved | This template is made with ❤️
            by
            <a href="https://preview.colorlib.com/theme/schmidt/index.html">
              Colorlib
            </a>
          </p>
        </div>
        <Scrollup />
      </div>
    </div>
  );
}
