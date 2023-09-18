import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Session1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
    
  return (
    <div className=''>
        {/* <Slider {...settings}> */}
          <div className=''>
            <img className='w-screen' src='/image/paner.png'/>
          </div>
          {/* <div className=''>
            <img className='w-full h-[779px]' src='/image/paner1.png'/>
          </div> */}
          
        {/* </Slider> */}
      </div>
  )
}
