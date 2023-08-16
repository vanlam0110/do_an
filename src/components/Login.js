import React from 'react'
import Header from './Header'




export default function Login() {
    return (
        <div>
            <Header/>
            <div className='flex justify-center items-center pt-[20px]'>
            <div className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3'>
                <h1 className='text-[32px] font-bold'>Đăng nhập</h1>
                <div className='flex flex-col gap-5'>
                <div className='w-full flex flex-col'>
                    <label>SỐ ĐIỆN THOẠI</label>
                    <input type={'number'} className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
                </div>
                <div className='w-full flex flex-col'>
                    <label>MẬT KHẨU</label>
                    <input type={'password'} className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
                </div>
                </div>

                <button className='bg-[#3961fb] rounded-[5px] border h-[45px] w-full text-white font-bold'>Đăng nhập</button>

                <div className='flex justify-between'>
                    <a className='text-[#1266dd] hover:text-[#f60] cursor-pointer'>
                        Bạn quên mật khẩu?
                    </a>

                    <a className='text-[#1266dd] hover:text-[#f60] cursor-pointer'>
                        Tạo tài khoản mới
                    </a>
                </div>
            </div>
        </div>
        </div>
       
    )
}
