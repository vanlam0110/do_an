import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import './login.css';
import axios from 'axios';
import { HomeContext } from '../context/Homecontext';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

function Post_management() {
    const { list, setList } = useContext(HomeContext);
    const navigate = useNavigate();
    const [toggleStatus, setToggleStatus] = useState({});
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    const handlePageNext = () => {
        if (page < maxPage) {
            setPage(page + 1);
        }
    }

    const handlePagePrev = () => {
        setPage(page - 1);
    }
    const getData = async () => {
        const response = await axios.get(
            `http://localhost:8000/car?_page=${page}&_limit=4${search ? `&q=${search}` : ""}&_sort=id&_order=desc`
        );
        if (response.status === 200) {
            setList(response.data);
            const initialToggleStatus = {};
            response.data.forEach((item) => {
                initialToggleStatus[item.id] = item.display === 1;
            });
            setToggleStatus(initialToggleStatus);

            const totalItems = response.headers["x-total-count"];
        const totalPages = Math.ceil(totalItems / 4); // 4 là số lượng mục trên mỗi trang
        setMaxPage(totalPages);


        }
    };
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleToggleSwitch = async (id) => {
        // Đảo ngược trạng thái hiển thị của mục
        const status = toggleStatus[id] ? 0 : 1;
        const response = await axios.patch(`http://localhost:8000/car/${id}`, {
            display: status,
        });

        if (response.status === 200) {
            // Cập nhật trạng thái và danh sách sau khi thay đổi
            setToggleStatus((prevStatus) => ({
                ...prevStatus,
                [id]: status,
            }));
            getData();
        }
    };

    const handleEdit = (id) => {
        navigate(`edit/${id}`);
    };

    useEffect(() => {
        getData();
    }, [page, search]);
    return (
        <div>
            <div className="">
                <div className="border-b-[1px] flex postR">
                    <h1 className="p-[20px] font-bold text-[20px]">Quản lý tin đăng</h1>
                    <div className='ml-[400px] flex items-center search-mana'>
                        <input
                            onChange={handleSearchChange}
                            className='border border-[#D1D1D1] rounded-[25px] w-[260px] h-[40px] p-[11px_47px_11px_5px] relative '
                            placeholder='Search'
                        />
                        <i className='absolute right-[665px] p-[10px] text-[#D1D1D1]'><AiOutlineSearch size={20} /></i>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='p-[20px_50px]'>
                        <div className='flex gap-10 flex-wrap justify-center items-center'>
                            {list?.map((item) => {
                                return (
                                    <div className='flex '>
                                        <div className='border shadow-[0_5px_20px_rgba(0,0,0,.1)] rounded-[15px] w-[310px]'>
                                            <div className='flex flex-col gap-5 h-[520px] max-[376px]:h-full  postmain-res' key={item}>
                                                <img className='w-[310px] h-[200px] rounded-[15px_15px_0_0]' src={item.image} />
                                                <div className='flex flex-col gap-2  p-[0px_10px_10px_10px]'>
                                                    <h1 className='text-[#E13427] font-bold'>{item.title}</h1>
                                                    <p className='text-[#16c784] font-bold'>Giá: {item.price}</p>
                                                    <p>Loại xe: {item.type}</p>

                                                    <p className='text-[#8a8d91] overflow-hidden webkit2'>{item.content}</p>
                                                    <div className='flex flex-col gap-5'>
                                                        <p>Người cho thuê: {item.username}</p>
                                                        <p>Số điện thoại: {item.phone}</p>
                                                        <div className="flex gap-5 w-full justify-center items-center">
                                                            <label className="switch">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={toggleStatus[item.id]}
                                                                    onChange={() => handleToggleSwitch(item.id)}
                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                            <button
                                                                className="border bg-green-600 w-[100px] h-[35px] flex items-center justify-center text-white rounded "
                                                                onClick={() => handleEdit(item.id)}
                                                            >
                                                                <AiFillEdit /> Sửa
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
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
                        disabled={page >= maxPage}
                        onClick={handlePageNext}
                        className='border bg-[#86DB06] p-[5px_20px] rounded-[10px] flex items-center justify-center text-white text-[15px]'
                    >
                        Next <i className=''><GrFormNext /></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Post_management;
