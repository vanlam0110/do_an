import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Session1() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };
  

  const checkLogin  =  window.localStorage.getItem('username');
  const navigate = useNavigate();
  const handleClick = () => {
    if (checkLogin){
      navigate('/createpost')
    }
    else{
      navigate('/login')
      alert('Vui lòng đăng nhập khi đăng tin')
    }
  }
  return (  
    <div className=''>
         {/* <Slider {...settings}> */}
    {/* </Slider> */}
          <div className='session h-screen'>
            {/* <img className='w-screen' src='/image/paner.png'/> */}
            <div className='flex flex-col p-[200px_0_0_100px] gap-5 session-main'>
              <h1 className='text-white font-medium text-[50px]'>
              RENTAL - CAR
              </h1>
              <h3 className='text-white font-medium text-[30px]'>
                SOCIAL NETWORK
              </h3>
              <p className='text-white font-medium text-[20px]'>
                Website tìm kiếm xe, đăng tin cho thuê xe dễ dàng, <br></br> hiệu quả
              </p>
              
              <button 
                onClick={handleClick}
                className='text-white text-[20px] rounded bg-[#e84545] font-medium p-[10px] w-[150px]'>
                Đăng tin ngay
              </button>
            </div>
          </div>              
      </div>
  )
}
