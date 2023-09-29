import React, { useContext } from 'react';
import Header from './Header';
import { useParams } from "react-router-dom";
import { Context } from '../context/Context';
import Footer from './Footer'
import './Responsive.css'
export default function DetailResponsive() {
  const { listCar } = useContext(Context);
  const { id } = useParams();
  const object = listCar.find((item) => item.id == id);

  console.log("id", id);
  console.log(object);

  return (
    <div>
      <div className=' p-[40px_40px]'>
        <div className=''>
          {object && (
            <>
              <div className=' w-full '>
              <div className=''>
                <img className='w-full h-[200px]' src={object.image} />
                <h1 className='text-[#E13427] font-bold text-[25px]'>{object.title}</h1>
                <p className='text-[#16c784] font-bold text-[20px]'>Giá: {object.price}</p>
                <p className='text-[#8a8d91 text-[18px]'>{object.content}</p>
              </div>
              <div className='flex flex-col gap-5 items-center '>
                <h1 className='text-[#E13427] text-[20px] font-bold'>Thông tin liên lạc</h1>
                <p className='font-bold text-[20px] text-[#2B2E4A] '>{object.username}</p>
                <div className='flex gap-10'>
                <a className='border border-[#2B2E4A] bg-[#2B2E4A] text-white text-[20px] rounded p-[3px_7px] font-bold w-full text-center ' href={`tel:${object.phone}`}>{object.phone}</a>
                <a className='border border-[#2B2E4A] text-[#2B2E4A] text-[20px] rounded p-[3px_7px] font-bold w-full text-center ' target={'_blank'} href={`https://zalo.me/${object.phone}`}>Nhắn zalo</a>
                </div>
              </div>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
