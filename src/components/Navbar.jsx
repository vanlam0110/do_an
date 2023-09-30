import React, { useState, useContext } from 'react';
import './Responsive.css';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { AuthContext } from '../context/AuthContext';
import { BiLogOut } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import {RxDividerVertical} from 'react-icons/rx'
function Navbar() {
	const { state, setState } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		setState({ phone: '', password: '', username: '' });
		window.localStorage.removeItem('username');
		window.localStorage.removeItem('isLogin');
		// navigate('/');
		window.location.href='/';  
	};
	const [active, setActive] = useState('nav__menu');
	const [icon, setIcon] = useState('nav__toggler');
	const navToggle = () => {
		if (active === 'nav__menu') {
			setActive('nav__menu nav__active');
		} else setActive('nav__menu');

		// Icon Toggler
		if (icon === 'nav__toggler') {
			setIcon('nav__toggler toggle');
		} else setIcon('nav__toggler');
	};
	return (
		<nav className="nav">
			<a href="/" className="nav__brand">
				<img src="/image/logo2.png" className="w-[200px]" />
			</a>
			<ul className={active}>
				<li className="nav__item">
					<a className="nav__link">
						<div className="border rounded w-full h-[40px] flex items-center justify-center p-[20px]">
							<p className="text-[#fff] font-nav">{state.username}</p>
						</div>
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link">
						<Link to={'/post-management'}>
							<p className="flex items-center justify-center gap-2 font-nav">
								<AiFillEdit /> Quản lý bài đăng
							</p>
						</Link>
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link">
						<Link to={'/edituser'}>
							<p className="flex items-center justify-center gap-2 font-nav">
								<BiUserCircle /> Thông tin cá nhân
							</p>
						</Link>
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link">
						<button
							className="bg-[#3961fb] text-white w-full h-[40px] rounded flex items-center justify-center gap-1 p-[20px] font-nav"
							onClick={handleLogout}
						>
							<BiLogOut size={20} />
							Đăng xuất
						</button>
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link">
						<Link to="/createpost">
							<button className="bg-[#e84545] text-white w-[120px] h-[40px] rounded flex items-center justify-center gap-1 font-nav">
								<IoAddCircleOutline size={20} />
								Đăng tin
							</button>
						</Link>
					</a>
				</li>
			</ul>

			<div className="flex gap-2 items-center justify-center h-full ">
				{state?.username ? (
					<div className="flex gap-5 h-full items-center">
						<div onClick={navToggle} className={icon}>
							<div className="line1"></div>
							<div className="line2"></div>
							<div className="line3"></div>
						</div>
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
		</nav>
	);
}

export default Navbar;
