import React, { useContext } from 'react';
import Header from './Header';
import { useParams } from "react-router-dom";
import { Context } from '../context/Context';
import Footer from './Footer'
import './Responsive.css'
import DetailResponsive from './DetailResponsive';
export default function Detail() {
  const { listCar } = useContext(Context);
  const { id } = useParams();
  const object = listCar.find((item) => item.id == id);

  console.log("id", id);
  console.log(object);

  return (
    <div>
      <Header />
      <div className='DetailResponsive'><DetailResponsive/></div>
      <div className=' p-[40px_100px] detail-main'>
        <div className=''>
          {/* Kiểm tra nếu object tồn tại trước khi truy cập các thuộc tính */}
          {object && (
            <>
              <div className='flex w-full justify-between'>
              <div className='w-3/5 detail'>
                <img className='w-full h-[400px]' src={object.image} />
                <h1 className='text-[#E13427] font-bold text-[25px]'>{object.title}</h1>
                <p className='text-[#16c784] font-bold text-[20px]'>Giá: {object.price}</p>
                <p className='text-[#8a8d91 text-[18px]'>{object.content}</p>
              </div>
              <div className='flex flex-col gap-5 w-1/4 items-center border p-[20px] h-[250px] rounded detail-inf'>
                <h1 className='text-[#E13427] text-[20px] font-bold'>Thông tin liên lạc</h1>
                <p className='font-bold text-[20px] text-[#2B2E4A] '>{object.username}</p>
                <a className='border border-[#2B2E4A] bg-[#2B2E4A] text-white text-[20px] rounded p-[3px_7px] font-bold w-full text-center ' href={`tel:${object.phone}`}>{object.phone}</a>
                <a className='border border-[#2B2E4A] text-[#2B2E4A] text-[20px] rounded p-[3px_7px] font-bold w-full text-center ' target={'_blank'} href={`https://zalo.me/${object.phone}`}>Nhắn zalo</a>
              </div>
              </div>
            </>
          )}
        </div>

      </div>
      <Footer/>
    </div>
  );
}
