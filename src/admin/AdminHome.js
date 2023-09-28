import React, { useContext, useEffect, useState } from 'react'
import '../components/login.css'
import axios from 'axios'
import { HomeContext } from '../context/Homecontext'
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import '../components/login.css'
import { AiFillHome } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

function Admin() {
    const { list, setList } = useContext(HomeContext);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State để theo dõi kích thước cửa sổ
    const [totalPages, setTotalPages] = useState(1);
    const handlePageNext = () => {
        setPage(page + 1);
    }

    const handlePagePrev = () => {
        setPage(page - 1);
    }

    const limit = windowWidth < 1023 ? 3 : 4;
    const getData = async () => {
        const response = await axios.get(
            `http://localhost:8000/car?_page=${page}&_limit=${limit}${search ? `&q=${search}` : ""}&_sort=id&_order=desc`
        );
        if (response.status === 200) {
            setList(response.data);
            const totalCount = response.headers["x-total-count"];
            const totalPages = Math.ceil(totalCount / limit);
            setTotalPages(totalPages);
            const dataWithPhone = response.data.map((item) => {
                const phone = item.phone;
                return {
                    ...item,
                    phone: phone,
                };
            });
            setList(dataWithPhone);
        }
    };
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    const onDelete = async (id) => {
        let text = 'Bạn có muốn xóa';

        if (window.confirm(text) === true) {
            const res = await axios.delete(
                'http://localhost:8000/car/' + id
            );

            if (res.status === 200) {
                alert('Xóa thành công');
            }
            await getData();
        }
    }
    const handleLogout = () => {
        navigate('/admin')
    }
    useEffect(() => {
        getData()
    }, [page, search, limit])
    const hasNextPage = list.length === limit;
    return (
        <div className='bg-[#f5f5f9] h-[806px]'>
            <div className='flex h-[806px]'>
                <div className='bg-[#363740] w-[300px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[#fff] text-center text-[35px] font-bold'>
                            Admin
                        </h1>

                        <div className='flex gap-2 items-center'>
                            <i className='text-[#DDE2FF]'><AiFillHome /></i>
                            <Link to={'/adminhome'}>
                                <p className='text-[#DDE2FF] text-[16px] font-[450] '>
                                    Home
                                </p>
                            </Link>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <i className='text-[#DDE2FF]'><BiSolidUser /></i>
                            <Link to={'/adminuser'}>
                                <p className='text-[#DDE2FF] text-[16px] font-[450]'>
                                    User
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex items-center justify-between border-b border-b-[#CFCFCF] p-[10px] bg-[#FFF] '>
                        <h1 className='font-bold'>
                            Quản lý bài đăng
                        </h1>

                        <div>
                            <input
                                onChange={handleSearchChange}
                                className='border border-[#D1D1D1] rounded-[25px] w-[260px] h-[40px] p-[11px_47px_11px_5px] relative'
                                placeholder='Search'
                            />
                            <i className='absolute right-[510px] p-[10px] text-[#D1D1D1]'><AiOutlineSearch size={20} /></i>
                        </div>
                        <button
                            onClick={handleLogout}
                            className='bg-[#3961fb] text-white h-[40px] rounded flex items-center justify-center gap-1 p-[20px]'
                        >
                            <BiLogOut size={20} />
                            Đăng xuất
                        </button>
                    </div>
                    <div>
                        <div className='p-[20px] '>
                            <table className='shadow-[0_2px_4px_-2px_rgba(16,24,40,0.05)] w-full' >
                                <thead>
                                    <tr className='border-0 bg-[#F9FAFB]'>
                                        <th>Ảnh</th>
                                        <th>Tiêu đề</th>
                                        <th>Loại xe</th>
                                        <th className='w-[400px]'>Nội dunng mô tả</th>
                                        <th>Họ tên người cho thuê</th>
                                        <th>Số điện thoại</th>
                                        <th>Giá</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                {list.map((item) => (
                                    <tbody key={item}>
                                        <tr className='border-0 bg-[#fff]'>
                                            <th><img className='w-[200px]' src={item.image} /></th>
                                            <th>{item.title}</th>
                                            <th>{item.type}</th>
                                            <th>{item.content}</th>
                                            <th>{item.username}</th>
                                            <th>{item.phone}</th>
                                            <th>{item.price}</th>
                                            <th>
                                                <div className='flex gap-5 w-full '>
                                                    <button onClick={() => onDelete(item.id)} className='border bg-red-600 w-[100px] flex items-center justify-center text-white rounded'>
                                                        <AiFillDelete /> Delete
                                                    </button>
                                                    {/* <button className='border bg-green-600 w-[100px] flex items-center justify-center text-white rounded'>
                                                        <AiFillEdit /> Edit
                                                    </button> */}
                                                </div>
                                            </th>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                        <div className='flex justify-center gap-2 items-center pb-[20px]'>
                            <button
                                disabled={page === 1 ? true : false}
                                onClick={handlePagePrev}
                                className='border bg-[#e84545] p-[5px_20px] rounded-[10px] flex items-center justify-center text-white text-[15px]'
                            >
                                <i className=''><GrFormPrevious /></i> Prev
                            </button>
                            <p>{page}</p>
                            <button
                                disabled={!hasNextPage}
                                onClick={handlePageNext}
                                className='border bg-[#86DB06] p-[5px_20px] rounded-[10px] flex items-center justify-center text-white text-[15px]'
                            >
                                Next <i className=''><GrFormNext /></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin