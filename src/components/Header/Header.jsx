import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Header.css"

function Header() {
  var settings = {
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };
  return (
    <div className='Header container my-5'>
      <div className="row g-3">
        <div className="col-lg-8 col-md-12" >
          <Slider {...settings} className='sliding'>
              <div className='men'>
                  <div>
                    <b>Men Fashon</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit animi a ipsa provident, magni reprehenderit id consequuntur dicta facilis magnam similique in, laudantium odio corrupti vel atque necessitatibus maiores.</p>
                    <button className='btnn'> Shop Now </button>
                  </div>
              </div>
              <div className='women'>
                  <div>
                    <b>Men Fashon</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit animi a ipsa provident, magni reprehenderit id consequuntur dicta facilis magnam similique in, laudantium odio corrupti vel atque necessitatibus maiores.</p>
                    <button className='btnn'> Shop Now </button>
                  </div>
              </div>
              <div className='kids'>
                  <div>
                    <b>Men Fashon</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit animi a ipsa provident, magni reprehenderit id consequuntur dicta facilis magnam similique in, laudantium odio corrupti vel atque necessitatibus maiores.</p>
                    <button className='btnn'> Shop Now </button>
                  </div>
              </div>
          </Slider>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className='details'>

            <div className="card_1">
              <span>Save 20%</span>
              <p>Secial offer</p>
              <button className='btnn'> Click here </button>
            </div>

            <div className="card_2">
              <span>Save 20%</span>
              <p>Secial offer</p>
              <button className='btnn'> Click here </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
