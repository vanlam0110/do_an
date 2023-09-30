import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { HomeContext } from '../context/Homecontext';
import { AuthContext } from '../context/AuthContext';
import '../components/login.css'
export default function Admin() {
    const { list, setList } = useContext(HomeContext);
    const navigate = useNavigate();
    const { state, setState } = useContext(AuthContext);
    const [ email, setEmail ] =  useState('');
    const [ password, setPassword ] = useState('');
    const getData = async () => {     
        const response = await axios.get(
            'http://localhost:8000/admin',
        );

        if (response.status === 200) {
            setList(response.data);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const foundUser = list.find(user => user.email === email && user.password === password);


        if (foundUser) {
            alert('Đăng nhập thành công')
            navigate('/adminhome')
            setState(foundUser);
        } else {
            alert('Đăng nhập không thành công')
        }
    }
    useEffect(() => {
        getData();
    }, [])
  return (
    <div className='login h-screen'>
            <div className=''>
                <div className='flex justify-center items-center pt-[180px]'>
                    <form onSubmit={handleSubmit} className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3 bg-login'>
                        <h1 className='text-[32px] font-bold text-center'>Admin</h1>
                        <div className='flex flex-col gap-5'>
                            <div className='w-full flex flex-col gap-3'>
                                <label>Email</label>
                                <input
                                    required
                                    type={'email'}
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='rounded-[4px] border h-[45px] p-[10px]'
                                />
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                            <label>Mật khẩu</label>
                                <input
                                    required
                                    type={'password'}
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='rounded-[4px] border h-[45px] p-[10px]'
                                />
                            </div>
                        </div>

                        <button type='submit' className='bg-[#2b2e4a] rounded-[5px] border h-[45px] w-full text-white font-bold'>Đăng nhập</button>                     
                    </form>
                </div>
            </div>
        </div>
  )
}

