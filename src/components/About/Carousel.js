import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const array = [
    {
      id: 1,
      src: "https://preview.colorlib.com/theme/schmidt/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp",
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      src: "https://preview.colorlib.com/theme/schmidt/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp",
      name: "James Hollet",
      role: "DEVELOPER",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      src: "https://preview.colorlib.com/theme/schmidt/images/xperson_3.jpg.pagespeed.ic.Cln-jaM1jK.webp",
      name: "John Carter",
      role: "TIKTOK MANAGER",
      text: " Quo sequi rerum dolorem eum autem quisquam ab ipsum enim dolor, consequuntur magnam earum maiores pariatur nam repudiandae doloremque. ",
    },
    {
      id: 4,
      src: "https://preview.colorlib.com/theme/schmidt/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp",
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      text: " Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 5,
      src: "https://preview.colorlib.com/theme/schmidt/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp",
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      text: "Consequuntur magnam earum maiores pariatur nam repudiandae doloremque. Reprehenderit, in consequatur.",
    },
    {
      id: 6,
      src: "https://preview.colorlib.com/theme/schmidt/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp",
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];
  let show = array.map((item, index) => {
    return (
      <div key={item.id} className="mt-4">
        <div className="box">
          <div className="box__header">
            <div className="box__avatar">
              <img className="d-block w-100" src={item.src} alt="First slide" />
              <div className="box__icon">
                <i className="fa fa-quote-left"> </i>
              </div>
            </div>
            <div className="box__info">
              <h5>{item.name}</h5>
              <p>{item.role}</p>
            </div>
          </div>
          <div className="box__body">
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  });
  return <Slider {...settings}>{show}</Slider>;
}
