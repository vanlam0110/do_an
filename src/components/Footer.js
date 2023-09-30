import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillCaretRight } from 'react-icons/ai'
import './login.css'
export default function Footer() {
    return (
        <div className='border-t-[2px] border-t-[#e84545] footer h-[400px] w-full'>
            <div className='flex justify-between p-[40px_100px] footer_responsive'>
                <div className='flex flex-col gap-5 footer_responsive2'>
                    <img className='w-[200px]' src='/image/logo2.png' />
                    <div className='flex items-center gap-5 text-[#E84545]'>
                        <i><AiFillPhone size={20} /></i>
                        <a href='tel:0901984912' className=' text-[16px] text-[#a4a4a4]'>0901984912</a>
                    </div>

                    <div className='flex items-center gap-5 text-[#E84545]'>
                        <i><AiFillMail size={20} /></i>
                        <a href='mailto:vanlam71nct@gmail.com' className='text-[16px] text-[#a4a4a4]'>vanlam71nct@gmail.com</a>
                    </div>

                    <div className='flex items-center gap-5 text-[#E84545]'>
                        <a><BsFacebook size={25} /></a>
                        <a><AiFillInstagram size={25} /></a>
                        <a><AiFillTwitterCircle size={25} /></a>
                        <a><AiFillMail size={25} /></a>
                    </div>
                </div>
                <div className=' flex gap-[190px] max-[767px]:gap-10'>
                <div className='flex flex-col gap-2 w-[150px] footer_responsive2'>
                    <h1 className='text-white pb-[20px] border-b border-b-[#e84545]'>MENU</h1>
                    <div className='flex items-center gap-3 text-[#a4a4a4] '>
                        <i><AiFillCaretRight /></i>
                        <p>Trag chủ</p>
                    </div>
                    <div className='flex items-center gap-3 text-[#a4a4a4]'>
                        <i><AiFillCaretRight /></i>
                        <p>Giới thiệu</p>
                    </div>
                    <div className='flex items-center gap-3 text-[#a4a4a4]'>
                        <i><AiFillCaretRight /></i>
                        <p>Tin tức</p>
                    </div>
                </div> 
                <div className='flex flex-col gap-2 w-[150px] footer_responsive2'>
                    <h1 className='text-white pb-[20px] border-b border-b-[#e84545]'>Danh MỤC</h1>
                    <div className='flex items-center gap-3 text-[#a4a4a4]'>
                        <i><AiFillCaretRight /></i>
                        <p>Thuê xe Số</p>
                    </div>
                    <div className='flex items-center gap-3 text-[#a4a4a4]'>
                        <i><AiFillCaretRight /></i>
                        <p>Thuê xe ga</p>
                    </div>
                    <div className='flex items-center gap-3 text-[#a4a4a4]'>
                        <i><AiFillCaretRight /></i>
                        <p>Thuê xe tay côn</p>
                    </div>
                    <div className='flex items-center gap-3 text-[#a4a4a4]'>
                        <i><AiFillCaretRight /></i>
                        <p>Thuê xe otô</p>
                    </div>
                </div>
                </div>
                <div className='flex flex-col gap-2 w-[300px] lien_he footer_responsive2'>
                    <h1 className='text-white pb-[20px] border-b border-b-[#e84545]'>Liên hệ</h1>
                    <div className='flex items-center gap-3 text-[#a4a4a4]'>
                        <p>Gửi mail cho chúg tôi</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <input
                            placeholder='Email'
                            type={'text'}
                            className='bg-[#e8f0fe] rounded-[4px] border w-[300px] h-[35px] p-[10px]'
                        />

                        <textarea
                            placeholder='Lời Nhắn'
                            type={'text'}
                            className='bg-[#e8f0fe] rounded-[4px] border w-[300px] h-[100px] p-[10px]'
                        />

                        <button type='submit' className='bg-[#E84545] rounded-[5px] border h-[45px] w-full text-white font-bold'>Gửi</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
