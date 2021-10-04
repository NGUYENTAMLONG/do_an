import React from "react";
import "./style/Home.css";

export default function Home() {
  return (
    <div>
      <div className="home container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col__left">
            <div className="col__left__intro__1">
              <p>UI/UX DESIGNER &amp; DEVELOPER</p>
            </div>
            <h1 className="col__left__intro__2">I'm John Smith</h1>
            <div className="col__left__btns">
              <button>MORE ABOUT ME</button>
              <button>
                HIRE ME <i className="fas fa-arrow-right" />
              </button>
            </div>
            <div className="col__left__c">
              <p>
                Copyright ©2021 All rights reserved | This template is made with
                ❤️ by
                <a href="https://preview.colorlib.com/theme/schmidt/index.html">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col__right">
            {/* <img
        src="https://preview.colorlib.com/theme/schmidt/images/xjschmidt.png.pagespeed.ic.oRl8rvVmhD.webp"
        alt="" 
      /> */}
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://preview.colorlib.com/theme/schmidt/images/xjschmidt.png.pagespeed.ic.oRl8rvVmhD.webp"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://preview.colorlib.com/theme/schmidt/images/xjschmidt-2.png.pagespeed.ic.evmdoJqj0y.webp"
                    alt="Second slide"
                  />
                </div>
              </div>
              {/* <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a> */}
              {/* <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
