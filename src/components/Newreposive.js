import React, { useState } from 'react';
import './login.css';
import './Responsive.css';
import { AiFillStar } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
export default function Newreposive() {
  const slides = [
    {
      imageSrc: '/image/paner.png',
      title: 'Duis luctus elit nisi, et cursus magna ...',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, ...',
    },
    {
      imageSrc: '/image/bg-login.jpg',
      title: 'Mauris tristique pretium tempus...',
      description: 'Donec tempus eu ligula sed blandit. Vivamus vel enim ac quam iaculis rutrum. Sed nisiarius et massa.  ...',
    },
    {
      imageSrc: '/image/tin.jpg',
      title: 'Aliquam placerat nisl nec imperdiet ...',
      description: 'n rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a egestas. Aenean ...',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className='pt-[30px]'>
      <div className='title_main'>
        <h1 className=''>
          <span className='flex justify-center items-center gap-1'>
            <AiFillStar /> Tin tức - sự kiện <AiFillStar />
          </span>
        </h1>
      </div>
      <div className='flex justify-center items-center pt-[30px] gap-10 new'>
        <div className='border rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,.1)] w-[350px] new-responsive'>
          <div className='flex flex-col gap-5 '>
            <img className='w-[400px] h-[200px] rounded-[15px_15px_0_0]' src={slides[currentSlide].imageSrc} alt={slides[currentSlide].title} />
            <div className='flex flex-col gap-2 p-[10px_10px_20px_10px] new-content'>
              <h1 className='font-bold'>{slides[currentSlide].title}</h1>
              <p className='text-[#424242] '>{slides[currentSlide].description}</p>
              <div className='flex items-center h-full gap-1'>
                <a className='text-[12px] text-[#666] font-bold'>Xem Thêm</a>
                <i className='text-[#ee453d] text-[12px]'>
                  <AiFillCaretRight />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-2 items-center pt-[20px]'>
                <button
                    
                    onClick={nextSlide}
                    className='border bg-[#e84545] p-[5px_20px] rounded-[10px] flex items-center justify-center text-white text-[15px]'
                >
                    <i className=''><GrFormPrevious /></i> Prev
                </button>
                <button
                    
                    onClick={prevSlide}
                    className='border bg-[#86DB06] p-[5px_20px] rounded-[10px] flex items-center justify-center text-white text-[15px]'
                >
                    Next <i className=''><GrFormNext /></i>
                </button>
            </div>  
    </div>
  );
}
