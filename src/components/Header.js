import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { AuthContext } from '../context/AuthContext'
import { BiLogOut } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import './Responsive.css'
import Navbar from './Navbar'
import {RxDividerVertical} from 'react-icons/rx'
function Header() {
    const { state, setState } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        setState({ phone: '', password: '', username: '' });
        window.localStorage.removeItem('username')
        navigate('/')
         
    }
    return (
        
        <div>
            <div className='header_nav'><Navbar/></div>
            <div className='w-full h-[120px] border-b-[2px] border-b-[#e84545] bg-[#2B2E4A] nav_header'>
            
            <div className='flex justify-between items-center  p-[40px_100px] '>
                <div className=''>
                    <Link to='/'>
                        <img
                            src='/image/logo2.png'
                            className='w-[200px]'
                        />
                    </Link>
                </div>
                
                
                {/* <div>
                <h1 className='font-nomal text-[30px] text-[#fff]'>
                    Website thuê xe trực tuyến Đà nẵng
                </h1>
            </div> */}

                <div className='flex gap-2 items-center justify-center h-full '>
                    {state?.username ? (
                        <div className='flex gap-5 h-full items-center'>
                            <div className='quanly relative hover:cursor-pointer h-[40px] flex items-center justify-center p-[20px]'>
                                <p className='text-[#fff] border-b-[1px]'>{state.username}</p>
                                <div className='con w-[190px] mt-[85px]'>
                                    <Link to={'/post-management'}>
                                        <p className='flex items-center justify-center gap-2 text-black'> <AiFillEdit /> Quản lý bài đăng</p>
                                    </Link>

                                    <Link to={'/edituser'}>
                                        <p className='flex items-center justify-center gap-2 text-black'> <BiUserCircle /> Thông tin cá nhân</p>
                                    </Link>
                                </div>
                            </div>
                            <button

                                className='bg-[#3961fb] text-white w-[135px] h-[40px] rounded flex items-center justify-center gap-1 p-[20px]'
                                onClick={handleLogout}>
                                <BiLogOut size={20} />
                                Đăng xuất
                            </button>
                            <Link to="/createpost">
                                <button className='bg-[#e84545] text-white w-[120px] h-[40px] rounded flex items-center justify-center gap-1'><IoAddCircleOutline size={20} />Đăng tin</button>
                            </Link>
                        </div>
                    ) : (
                        <div className='flex'>
                            <Link to="/login">
                            <button className='text-white'>Đăng nhập</button>
                        </Link>
                        <i className='text-white'><RxDividerVertical size={30}/></i>
                        <Link to={'/login2'}>
                        <button  className='text-white'>Đăng kí</button>
                        </Link>
                        </div>

                    )}

                </div>
            </div>
            
        </div>
        </div>
    )
}
export default Header