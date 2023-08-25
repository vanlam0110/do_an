import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { HomeContext } from '../context/Homecontext'
import { wait } from '@testing-library/user-event/dist/utils';
import { AiOutlineSearch } from 'react-icons/ai'

function Main() {
    const { list, setList } = useContext(HomeContext);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/car'
        );
        if (response.status === 200) {
            setList(response.data)
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='border-t-[1px] mt-[20px] '>

            <div className='flex justify-between '>
                <div className='p-[20px_50px] w-full'>
                    <div className='border rounded-[4px] '>
                        <h1 className='p-[10px_50px] bg-gradient-to-r from-[#8d0209] to-[#ff0404] text-white font-bold text-[20px] text-center'>Danh sách tin thuê cho thuê xe</h1>
                        {list.map((item) => (
                            <div className='  bg-[#fff9f3]'>
                                <div className=' border-t-[1px] border-t-[#E13427]'>
                                    <div className='flex gap-5 pt-[20px] p-[20px_10px_10px_50px]' key={item}>
                                        <img className='w-[450px] h-[300px]'  src={item.image}/>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='text-[#E13427] font-bold'>{item.title}</h1>
                                            <div className='flex gap-5'>
                                                <p className='text-[#16c784] font-bold'>{item.price}</p>
                                                <p>{item.type}</p>
                                            </div>
                                            <p className='text-[#8a8d91]'>{item.content}</p>
                                            <div className='flex gap-5'>
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

                <div className='border-l-[1px]'>
                    <div className='p-[20px_50px_20px_30px] flex flex-col gap-5'>
                        <div className='flex justify-center'>
                            <input className='border border-[#cf1b15] w-[260px] h-[40px] p-[11px_47px_11px_5px]' placeholder='Search' />
                            <button className='border border-[#cf1b15] w-[40px] h-[40px] bg-[#cf1b15] text-white flex justify-center items-center'><AiOutlineSearch /></button>
                        </div>
                        <div className='border rounded-[4px] border-[#c6bfbf] '>
                            <div className='flex flex-col'>
                                <h1 className='border bg-gradient-to-r from-[#8d0209] to-[#ff0404] text-white font-bold text-[20px] text-center'>
                                    Danh mục xe máy
                                </h1>
                                <div className='flex flex-col p-[15px]'>
                                    <a className='border-b-[1px] border-dashed border-gray-500'>Cho Thuê Xe Số</a>
                                    <a className='border-b-[1px] border-dashed border-gray-500'>Cho Thuê Xe Ga</a>
                                    <a className='border-b-[1px] border-dashed border-gray-500'>Cho Thuê Xe Tay Côn</a>
                                    <a className='border-b-[1px] border-dashed border-gray-500'>Cho Thuê Xe Otô 4 Chỗ</a>
                                    <a>Cho Thuê Xe Otô 7 Chỗ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main