import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { AuthContext } from '../context/AuthContext'
import { BiLogOut } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
function Header() {
    const { state, setState } = useContext(AuthContext);

    const handleLogout = () => {
        setState({ phone: '', password: '', username: '' });
        window.localStorage.removeItem('usename')
    }


    return (
        <div className='flex justify-between items-center h-[120px] p-[20px_50px] border-b border-b-[#262626] bg-black fixed left-0 top-0 right-0 z-10'>
            <div className='bg-black/80'>
                <Link to='/'>
                    <img
                        src='/image/logo.png'
                        className='w-[150px] h-[110px]'
                    />
                </Link>
            </div>

            {/* <div>
                <h1 className='font-nomal text-[30px] text-[#fff]'>
                    Website thuê xe trực tuyến Đà nẵng
                </h1>
            </div> */}

            <div className='flex gap-2 items-center justify-center h-full'>
                {state?.username ? (
                    <div className='flex gap-5 h-full items-center'> 
                        <div className='quanly relative hover:cursor-pointer border rounded  w-full h-[40px] flex items-center justify-center p-[20px]'>
                            <p className='text-[#fff]'>{state.username}</p>
                            <div className='con w-full mt-[85px] '>
                                <Link to={'/post-management'}>
                                    <p className='flex items-center justify-center gap-2'> <AiFillEdit/> Quản lý bài đăng</p>
                                </Link>

                                <Link to={'/edituser'}>
                                    <p className='flex items-center justify-center gap-2'> <BiUserCircle/> Thông tin cá nhân</p>                                  
                                </Link>
                            </div>
                        </div>
                        <button

                            className='bg-[#3961fb] text-white w-full h-[40px] rounded flex items-center justify-center gap-1 p-[20px]'
                            onClick={handleLogout}>
                            <BiLogOut size={20} />
                            Đăng xuất
                        </button>
                        <Link to="/createpost">
                            <button className='bg-[#f73859] text-white w-[120px] h-[40px] rounded flex items-center justify-center gap-1'><IoAddCircleOutline size={20} />Đăng tin</button>
                        </Link>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className='bg-[#3961fb] text-white w-[120px] h-[40px] rounded flex items-center justify-center gap-1 '><BiLogIn size={20} />Đăng nhập</button>
                    </Link>

                )}

            </div>
        </div>
    )
}
export default Header