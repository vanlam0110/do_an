import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Footer from './Footer';
function Register() {
    const navigate = useNavigate();

    const postData = async (data) => {
        const response = await axios.post(
            'http://localhost:8000/user',
            {
                username: data.username,
                phone: data.phone,
                password: data.password
            }
        );
        if (response.status === 200) {

        }

    }

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
            confirmpassword: event.target.confirmpassword.value,
        }


        if (data.password !== data.confirmpassword) {
            alert('Nhập lại mật khẩu sai')
            return;
        }
        let checkPhone = false;
        axios
            .get('http://localhost:8000/user')
            .then((response) => {
                response.data.forEach((check) => {
                    const phoneNumber = check.phone;
                    if (data.phone === phoneNumber) {
                        checkPhone = false;
                    } else {
                        checkPhone = true;
                    }
                });
                if (checkPhone) {
                    postData(data)
                    alert('Tạo tài khoản thành công')
                    navigate('/login')
                } else {
                    alert('Số điện thoại đã tồn tại');
                }
            })
            .catch((error) => {
                console.error("Lỗi khi gửi yêu cầu GET ", error);
            });
    }
    return (
        <div>
            <Header />
            <div className=''>
                <div className='flex justify-center items-center pt-[30px] pb-[30px]'>
                    <form className='border border-[#dedede] w-[600px] p-[30px_30px_50px] flex flex-col gap-3 bg-register max-[376px]:w-[330px]' onSubmit={onSubmit}>
                        <h1 className='text-[32px] font-bold text-center'>Đăng Kí</h1>
                        <div className='flex flex-col gap-5'>
                            <div className='w-full flex flex-col gap-3'>
                                <label>Họ tên</label>
                                <input
                                    required                                 
                                    type={'text'}
                                    name='username'
                                    className=' rounded-[4px] border h-[45px] p-[10px]' />
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                            <label>Số điện thoại</label>
                                <input
                                    required                                 
                                    type={'number'}
                                    name='phone'
                                    className='rounded-[4px] border h-[45px] p-[10px]' />
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <label>Mật khẩu</label>
                                <input
                                    required
                                    type={'password'}
                                    name='password'
                                    className='rounded-[4px] border h-[45px] p-[10px]' />
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                            <label>Nhập mật khẩu</label>                             
                               <input
                                    required                                 
                                    type={'password'}
                                    name='confirmpassword'
                                    className='rounded-[4px] border h-[45px] p-[10px]' />
                            </div>
                        </div>

                        <button className='bg-[#2b2e4a] rounded-[5px] border h-[45px] w-full text-white font-bold'>Tạo tài khoản</button>

                        <div className='flex gap-1'>
                            <p className=''>
                                Bạn đã có tài khoản?
                            </p>

                            <a href='/login' className='text-[#1266dd] hover:text-[#f60] cursor-pointer'>
                                Đăng nhập ngay
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
export default Register
