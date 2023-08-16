import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='flex justify-between items-center h-[120px] p-[20px_50px] shadow-[0_2px_4px_rgba(0,0,0,.1)]'>
        <div className='bg-white/80'>
            <Link to='/'>
            <img
                src='/image/logo.png'
                className='w-[130px] h-[115px]'
            />
            </Link>
        </div>

        <div>
        <h1 className='font-bold text-[30px] text-[#f73859]'>
                Website thuê xe Đà nẵng
            </h1>
        </div>

        <div className='flex gap-2'>
            <Link to="/login">
            <button className='bg-[#3961fb] text-white w-[100px] h-[40px] rounded'>Đăng nhập</button>
            </Link>
            <Link to="/login2">
            <button className='bg-[#3961fb] text-white w-[100px] h-[40px] rounded'>Đăng kí</button>
            </Link>
            <Link to="/createpost">
            <button className='bg-[#f73859] text-white w-[100px] h-[40px] rounded'>Đăng tin</button>
            </Link>
        </div>
    </div>
  )
}
