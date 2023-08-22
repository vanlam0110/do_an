import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login2() {
    const [usename, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const postData = async (data) => {
        const response = await axios.post(
            'http://localhost:8000/user',
            {
                username: data.usename,
                phone: data.phone,
                password: data.password
            }
        );
        if (response.status === 200) {

        }

    }

    const onSubmit = (event) => {
        const data = {
            usename: event.target.username.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
            confirmpassword: event.target.confirmpassword.value,
        }

        if (data.password === data.confirmpassword) {
            postData(data)
            alert("Tạo khoản thành công")
            navigate('/login')
        } else {
            alert("Tạo khoản không thành công")

        }

    }
    return (
        <div>
            <Header />
            <div className='register h-screen'>
            <div className='flex justify-center items-center pt-[180px]'>
                <form className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3 bg-register' onSubmit={onSubmit}>
                    <h1 className='text-[32px] font-bold text-white text-center'>Đăng Kí</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='w-full flex flex-col'>
                            {/* <label>HỌ TÊN</label> */}
                            <input 
                                placeholder='HỌ TÊN'
                                value={usename.usename} 
                                type={'text'} 
                                name='username' 
                                className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]' />
                        </div>
                        <div className='w-full flex flex-col'>
                            {/* <label>SỐ ĐIỆN THOẠI</label> */}
                            <input
                                placeholder='SỐ ĐIỆN THOẠI' 
                                value={phone.phone} 
                                type={'number'} 
                                name='phone' 
                                className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]' />
                        </div>
                        <div className='w-full flex flex-col'>
                            {/* <label>MẬT KHẨU</label> */}
                            <input 
                                placeholder='MẬT KHẨU'
                                value={password.password} 
                                type={'password'} 
                                name='password' 
                                className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]' />
                        </div>
                        <div className='w-full flex flex-col'>
                            {/* <label>NHẬP LẠI MẬT KHẨU</label> */}
                            <input 
                                placeholder='NHẬP LẠI MẬT KHẨU'
                                value={password.password} 
                                type={'password'}
                                name='confirmpassword' 
                                className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]' />
                        </div>
                    </div>

                    <button className='bg-[#3961fb] rounded-[5px] border h-[45px] w-full text-white font-bold'>Tạo tài khoản</button>

                    <div className='flex gap-1'>
                        <p className='text-white'>
                            Bạn đã có tài khoản?
                        </p>

                        <a href='/login' className='text-[#1266dd] hover:text-[#f60] cursor-pointer'>
                            Đăng nhập ngay
                        </a>
                    </div>
                </form>
            </div>
            </div>
        </div>

    )
}
export default Login2
