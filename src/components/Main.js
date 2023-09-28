import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { HomeContext } from '../context/Homecontext'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import './login.css'
import './Responsive.css'
import { AiFillStar } from 'react-icons/ai'
import News from './News'
function Main() {
    const { list, setList } = useContext(HomeContext);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State để theo dõi kích thước cửa sổ
    const [totalPages, setTotalPages] = useState(1);
    // Hàm để cập nhật kích thước cửa sổ
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    const handlePageNext = () => {
      setPage(page + 1);
    }
  
    const handlePagePrev = () => {
      setPage(page - 1);
    }
  
    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };
  
    // Sử dụng useEffect để lắng nghe sự kiện thay đổi kích thước cửa sổ
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    // Tạo biến limit dựa trên kích thước cửa sổ
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

    const result = list.filter((item) => {
        console.log(item.display);
        return item.display !== 0;
    })

    console.log(result);
    useEffect(() => {
        getData();
    }, [page, search, limit]);
    const hasNextPage = list.length === limit;
    return (
        <div className='pt-[50px] pb-[50px] main'>
            <div className='title_main'>
                <h1 className=''>
                    <span className='flex justify-center items-center gap-1 '>
                        <AiFillStar /> Danh sách tin thuê cho thuê xe <AiFillStar />
                    </span>
                </h1>
            </div>
            <div className='flex justify-center pt-[20px]'>
                <input
                    className='border border-[#cf1b15] w-[260px] h-[40px] p-[11px_47px_11px_5px] relative'
                    placeholder='Search'
                    onChange={handleSearchChange}
                />
                <i className='absolute ml-[220px] mt-[10px] text-[#D1D1D1]'><AiOutlineSearch size={20} /></i>
                {/* <button className='border border-[#cf1b15] w-[40px] h-[40px] bg-[#cf1b15] text-white flex justify-center items-center'><AiOutlineSearch /></button> */}
            </div>

            <div className='flex items-center justify-center'>
                <div className='p-[20px_50px]'>
                    <div className='flex gap-10 main-car'>
                        {result?.map((item) => {
                            return (
                                <div className='flex '>
                                    <div className='border shadow-[0_5px_20px_rgba(0,0,0,.1)] rounded-[15px] w-[310px] main-responsive'>
                                        <div className='flex flex-col gap-5' key={item}>
                                            <img className='w-[310px] h-[200px] rounded-[15px_15px_0_0]' src={item.image} />
                                            <div className='flex flex-col gap-2  p-[0px_10px_10px_10px]'>
                                                <h1 className='text-[#E13427] font-bold'>{item.title}</h1>                                    
                                                    <p className='text-[#16c784] font-bold'>Giá: {item.price}</p>
                                                    <p>Loại xe: {item.type}</p>
                                                
                                                <p className='text-[#8a8d91]'>{item.content}</p>
                                                <div className='flex flex-col gap-5'>
                                                    <p>Người cho thuê: {item.username}</p>
                                                    <a className='border border-[#2B2E4A] bg-[#2B2E4A] text-white rounded p-[3px_7px]' href={`tel:${item.phone}`}>{item.phone}</a>                                                   
                                                    <a className='border border-[#2B2E4A] text-[#2B2E4A] rounded p-[3px_7px]' target={'_blank'} href={`https://zalo.me/${item.phone}`}>Nhắn zalo</a>
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
            <div className='flex justify-center gap-2 items-center'>
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
            <News/>
        </div>
    )
}
export default Main