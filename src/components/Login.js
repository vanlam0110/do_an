import React, { useContext, useEffect, useState } from 'react';
import Header from './Header'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { HomeContext } from '../context/Homecontext';
import { AuthContext } from '../context/AuthContext';
import './login.css'

function Login() {
    const { list, setList } = useContext(HomeContext);
    const navigate = useNavigate();
    const { state, setState } = useContext(AuthContext);

    const getData = async () => {     
        const response = await axios.get(
            'http://localhost:8000/user',
        );

        if (response.status === 200) {
            setList(response.data);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        const foundUser = list.find(user => user.username === data.username && user.password === data.password);


        if (foundUser) {
            alert('Đăng nhập thành công')
            window.localStorage.setItem('username', data.username);       
            navigate('/')
            setState(foundUser);
        } else {
            alert('Đăng nhập không thành công')
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <Header />
            <div className='login h-screen mt-[120px]'>
                <div className='flex justify-center items-center pt-[70px] '>
                    <form onSubmit={handleSubmit} className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3 bg-login'>
                        <h1 className='text-[32px] font-bold text-white text-center'>Đăng nhập</h1>
                        <div className='flex flex-col gap-5'>
                            <div className='w-full flex flex-col'>
                                <input
                                    required
                                    placeholder='TÊN ĐĂNG NHẬP'
                                    type={'text'}
                                    name='username'
                                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]'
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <input
                                    required
                                    placeholder='MẬT KHẨU'
                                    type={'password'}
                                    name="password"
                                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]'
                                />
                            </div>
                        </div>

                        <button type='submit' className='bg-[#3961fb] rounded-[5px] border h-[45px] w-full text-white font-bold'>Đăng nhập</button>

                        <div className='flex justify-between'>
                            <a className='text-[#fff] hover:text-[#f60] cursor-pointer'>
                                Bạn quên mật khẩu?
                            </a>

                            <a href='/login2' className='text-[#fff] hover:text-[#f60] cursor-pointer'>
                                Tạo tài khoản mới
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Login