import React from "react";
import "./style/Blog.css";
import { Link } from "react-router-dom";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";
import Fade from "react-reveal/Fade";
import Scrollup from "../Scrollup";
import LightSpeed from "react-reveal/LightSpeed";

export default function Blog() {
  var array_blog = [
    {
      img: img1,
      author: "ADMIN",
      time: "APR. 07, 2021",
      num_Cmt: 3,
      name: "The Newest and Updated Bootstrap 5 is Here",
      spoiler:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: img2,
      author: "TEAM MANAGER",
      time: "JAN. 1, 2021",
      num_Cmt: 16,
      name: "Strategy Design Pattern",
      spoiler: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: img3,
      author: "DEVELOPER",
      time: "DEC. 16, 2019",
      num_Cmt: 10,
      name: "How did I start practising BDD?",
      spoiler:
        "Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum",
    },
    {
      img: img4,
      author: "ADMIN",
      time: "NOV. 30, 2019",
      num_Cmt: 27,
      name: "How can i study English?",
      spoiler:
        " Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia",
    },
    {
      img: img5,
      author: "ADMIN",
      time: "OCT. 10, 2019",
      num_Cmt: 12,
      name: "What is the API?",
      spoiler:
        "Far far away, behind the word mountains Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia",
    },
    {
      img: img6,
      author: "BLOGGER",
      time: "OCT. 2, 2018",
      num_Cmt: 71,
      name: "How to use Docker ?",
      spoiler:
        "Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in.",
    },
    {
      img: img7,
      author: "BLOGGER",
      time: "MAY. 16, 2018",
      num_Cmt: 23,
      name: "TypeScript overview",
      spoiler:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: img8,
      author: "ADMIN",
      time: "OCT. 2, 2019",
      num_Cmt: 27,
      name: "ReactJS overview",
      spoiler:
        "Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore,",
    },
  ];
  let show_blogs = array_blog.map((item, index) => {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        <LightSpeed top>
          <div className="card">
            <div className="card__img">
              <img src={item.img} alt="" />
            </div>
            <div className="info">
              <div className="info__time">
                <p className="author">{item.author} </p>
                <p className="time">{item.time}</p>
              </div>
              <p className="info__cmt">
                <span className="num">{item.num_Cmt}</span> COMMENTS
              </p>
              <div className="info__name">
                <a href="https://reactjs.org/docs/create-a-new-react-app.html">
                  <h4>{item.name}</h4>
                </a>
              </div>
              <div className="info__content">{item.spoiler}</div>
            </div>
          </div>
        </LightSpeed>
      </div>
    );
  });
  return (
    <div>
      <div className="blog container">
        <div className="row mb-4">
          <div className="breadcumbs">
            <Fade top>
              <Link to="/">
                HOME <i className="fas fa-chevron-right" />
              </Link>
              <p>
                BLOG <i className="fas fa-chevron-right" />
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <h1 className="blog_title">Blog Posts</h1>
          </Fade>
        </div>
        <div className="row mt-4">{show_blogs}</div>
        <Scrollup />
        <div className="blog_c">
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
