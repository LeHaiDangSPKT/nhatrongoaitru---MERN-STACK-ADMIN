import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.scss";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}></div>
  );
}

export default function Slick(prop) {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: prop.dot,
    infinite: true,
    slidesToShow: prop.show,
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
  let flag;
  return (
    <>
      <Slider {...settings}>
        {
          (flag = prop.list.map((item, index) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
            );
          }))
        }
      </Slider>
    </>
  );
}
