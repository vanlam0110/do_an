import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { HomeContext } from '../context/Homecontext'
import { AiOutlineSearch } from 'react-icons/ai'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

function Main() {
    const { list, setList } = useContext(HomeContext);
    const [page, setPage] = useState(1);
    const handlePageNext = () => {
        setPage(page + 1);
        console.log(page);
    }

    const handlePagePrev = () => {
        setPage(page - 1);
        console.log(page);
    }

    const getData = async () => {
        const response = await axios.get(
            `http://localhost:8000/car?_page=${page}&_limit=4`
        );
        if (response.status === 200) {
            setList(response.data);
            const reverseid = [...response.data].sort((a, b) => b.id - a.id);
            setList(reverseid)
        }
    };

    const [search, setSearch] = useState("");
    useEffect(() => {
        getData();

    }, [page]);

    return (
        <div className=''>
            <h1 className='p-[10px_50px] bg-gradient-to-r from-[#8d0209] to-[#ff0404] text-white font-bold text-[20px] text-center'>Danh sách tin thuê cho thuê xe</h1>
            <div className='flex justify-center pt-[20px]'>
                <input
                    className='border border-[#cf1b15] w-[260px] h-[40px] p-[11px_47px_11px_5px] relative'
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <i className='absolute ml-[220px] mt-[10px]'><AiOutlineSearch size={20} /></i>
                {/* <button className='border border-[#cf1b15] w-[40px] h-[40px] bg-[#cf1b15] text-white flex justify-center items-center'><AiOutlineSearch /></button> */}
            </div>

            <div className='flex items-center justify-center'>
                <div className='p-[20px_50px]'>
                    <div className='flex gap-5'>
                        {list
                            .filter((item) => {
                                return (
                                    search.toLowerCase() === "" ||
                                    item.type.toLowerCase().includes(search)
                                );
                            }).map((item) => (
                                <div className='flex bg-[#fff9f3]'>
                                    <div className='border'>
                                        <div className='flex flex-col gap-5 p-[20px_10px_10px_10px]' key={item}>
                                            <img className='w-[300px] h-[200px]' src={item.image} />
                                            <div className='flex flex-col gap-2'>
                                                <h1 className='text-[#E13427] font-bold'>{item.title}</h1>
                                                <div className='flex gap-5'>
                                                    <p className='text-[#16c784] font-bold'>{item.price}</p>
                                                    <p>{item.type}</p>
                                                </div>
                                                <p className='text-[#8a8d91]'>{item.content}</p>
                                                <div className='flex flex-col gap-5'>
                                                    <p>{item.username}</p>
                                                    <a className='border border-[#1266dd] bg-[#1266dd] text-white rounded p-[3px_7px]' href='tel:0901984912'>{item.phone}</a>
                                                    <a className='border border-[#1266dd] text-[#1266dd] rounded p-[3px_7px]' target={'_blank'} href='https://zalo.me/0901984912'>Nhắn zalo</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-2 items-center'>
                <button
                    disabled={page === 1 ? true : false}
                    onClick={handlePagePrev}
                    className='border bg-red-300 p-[5px_20px] rounded-[10px]'
                >
                   <GrFormPrevious/>
                </button>
                <p>{page}</p>
                <button
                    disabled={page === 2 ? true : false}
                    onClick={handlePageNext}
                    className='border bg-red-300 p-[5px_20px] rounded-[10px]'
                >
                    <GrFormNext/>
                </button>
            </div>
        </div>
    )
}
export default Main