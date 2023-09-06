import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

function EditUser() {
  const [listUser, setListUser] = useState([]);
  const isLogin = localStorage.getItem("username");  
    const getData = async () => {
        const response = await axios.get(
            `http://localhost:8000/user/`
        );
        if (response.status === 200) {
            setListUser(response.data)
        }
    };
  const object = listUser.find((item) => item.username == isLogin);
console.log(object);
    // const loginUser = "";
    // console.log(isLogin);
    // listUser.map((item) => {
    //     console.log(item.username);
    //     if (item.username == isLogin) {
    //         loginUser = item.id;
    //     }
    // })
    // console.log(loginUser);
    // console.log(listUser);
    useEffect(() => {
        getData();
      }, [setListUser]);
    return (
        <div>
            <Header />
            <div className=''>
                <div className='flex justify-center items-center pt-[180px]'>
                    <form className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3 bg-register'>
                        <h1 className='text-[32px] font-bold text-center'>Cập nhật thông tin cá nhật</h1>
                        <div className='flex flex-col gap-5'>
                            <div className='w-full flex gap-5 items-center'>
                                <label className=''>Tên tài khoản</label>
                                <input
                                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px] w-[400px]'
                                />
                            </div>
                            <div className='w-full flex gap-5'>
                                <label className='mt-[10px]'>Số điện thoại</label>
                                <div className='flex flex-col gap-3'>
                                <input
                                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px] w-[400px]'
                                />
                                <a className='text-[#007bff]'>Đổi số điện thoại</a>
                                </div>
                            </div>
                            <div className='w-full flex gap-5'>
                                <label className='mt-[10px]'>Mật khẩu</label>
                                <div className='flex flex-col gap-3 ml-[25px]'>
                                <input
                                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px] w-[400px]'
                                    type={'password'}
                                />
                                    <a className='text-[#007bff]'>Đổi mật khẩu</a>
                                </div>
                            </div>
                            
                        </div>

                        <button className='bg-[#3961fb] rounded-[5px] border h-[45px] w-full text-white font-bold'>Cập nhật tài khoản</button>

                    </form>
                </div>
            </div>
        </div>
    )
}


export default EditUser
