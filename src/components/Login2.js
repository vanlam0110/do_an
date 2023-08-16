import React from 'react'
import Header from './Header'

export default function Login2() {
    return (
        <div>
            <Header/>
            <div className='flex justify-center items-center pt-[20px]'>
            <div className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3'>
                <h1 className='text-[32px] font-bold'>Đăng nhập</h1>
                <div className='flex flex-col gap-5'>
                <div className='w-full flex flex-col'>
                    <label>HỌ TÊN</label>
                    <input type={'number'} className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
                </div>
                <div className='w-full flex flex-col'>
                    <label>SỐ ĐIỆN THOẠI</label>
                    <input type={'number'} className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
                </div>
                <div className='w-full flex flex-col'>
                    <label>TẠO MẬT KHẨU</label>
                    <input type={'password'} className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
                </div>
                </div>

                <button className='bg-[#3961fb] rounded-[5px] border h-[45px] w-full text-white font-bold'>Tạo tài khoản</button>

                <div className='flex gap-1'>
                    <p className=''>
                        Bạn đã có tài khoản?
                    </p>

                    <a className='text-[#1266dd] hover:text-[#f60] cursor-pointer'>
                        Đăng nhập ngay
                    </a>
                </div>
            </div>
        </div>
        </div>
       
    )
}
