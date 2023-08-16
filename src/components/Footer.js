import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
export default function Footer() {
    return (
        <div className='border-t-[1px]'>

            <div className='flex justify-between items-center p-[20px_50px] '>
                <div className=''>
                    <img className='w-[130px] h-[115px]' src='/image/logo.png' />
                    <p>Website thuê xe Đà nẵng</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1>Liên hệ hỗ trợ</h1>
                    <div className='flex gap-1'>
                        <AiFillPhone size={30} /><a href='tel:0901984912' className='font-medium text-[20px]'>0901984912</a>
                    </div>

                    <div className='flex gap-1'>
                        <AiFillMail size={30} /> <a href='mailto:vanlam71nct@gmail.com' className='font-medium text-[20px]'>vanlam71nct@gmail.com</a>
                    </div>

                    <div className='flex gap-1'>
                        <a><BsFacebook size={25} /></a>
                        <a><AiFillInstagram size={25} /></a>
                        <a><AiFillTwitterCircle size={25} /></a>
                        <a><AiFillMail size={25} /></a>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                <img className='w-[120px] h-[37px]' src='/image/footer1.png' />
                <img className='w-[120px] h-[37px]' src='/image/footer2.png' />
            </div>
            </div>

        </div>
    )
}
