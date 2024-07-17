import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider2.css"
import slider_1 from "../../assets/images/download (1).jpeg"
import slider_2 from "../../assets/images/download (2).jpeg"
import slider_3 from "../../assets/images/download.jpeg"
import slider_4 from "../../assets/images/vendor-6-CmmiMxIm.jpg"
import slider_5 from "../../assets/images/vendor-7-BBAmhwW7 (1).jpg"

function Slider2() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    infinite: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow /> ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='Slider2 container my-2'>

      <Slider {...settings} className='sliding p-5'>
        <div>
          <img src={slider_1} alt="" />
        </div>
        <div>
          <img src={slider_2} alt="" />
        </div>
        <div>
          <img src={slider_3} alt="" />
        </div>
        <div>
          <img src={slider_4} alt="" />
        </div>
        <div>
          <img src={slider_5} alt="" />
        </div>
      </Slider>

    </div>
  )
}

export default Slider2
