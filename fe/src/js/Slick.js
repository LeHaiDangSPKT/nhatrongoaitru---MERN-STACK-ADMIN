import Slider from "react-slick";
import * as React from "react";
import RemoveVietnameseTones from "../components/RemoveVietnameseTones";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.scss";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export default function Slick(props) {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {props.list.map((item) => {
          return (
            <a key={item._id} href={`/${RemoveVietnameseTones(item.name)}`}>
              <li className="content__place-item">
                <img src={item.imgWardMain} alt=""></img>
              </li>
            </a>
          );
        })}
      </Slider>
    </div>
  );
}
