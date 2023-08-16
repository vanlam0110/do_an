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
        }
        postData(data)
        alert("Đăng nhập thành công")
        navigate('/login')
    }
    return (
        <div>
            <Header />
            <div className='flex justify-center items-center pt-[20px]'>
                <form className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3' onSubmit={onSubmit}>
                    <h1 className='text-[32px] font-bold'>Đăng nhập</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='w-full flex flex-col'>
                            <label>HỌ TÊN</label>
                            <input value={usename.usename} type={'text'} name='username' className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>SỐ ĐIỆN THOẠI</label>
                            <input value={phone.phone} type={'number'} name='phone' className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>TẠO MẬT KHẨU</label>
                            <input value={password.password} type={'password'} name='password' className='bg-[#e8f0fe] rounded-[4px] border h-[45px]' />
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
                </form>
            </div>
        </div>

    )
}
export default Login2
