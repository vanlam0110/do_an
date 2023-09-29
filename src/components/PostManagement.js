import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import './login.css';
import axios from 'axios';
import { HomeContext } from '../context/Homecontext';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import PostmanagementResponsive from './PosmanagementResponisve';


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
      <Header />
      <div className='postmanagementResponsive'><PostmanagementResponsive/></div>
      <div className="postmanagement">
        <div className="border-b-[1px] flex">
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
        <div className="">
          <div className="p-[20px]">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Ảnh</th>
                  <th>Tiêu đề</th>
                  <th>Loại xe</th>
                  <th>Nội dung mô tả</th>
                  <th>Họ tên người cho thuê</th>
                  <th>Số điện thoại</th>
                  <th>Giá</th>
                  <th>Trạng thái hoạt động</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item) => (
                  <tr key={item.id}>
                    <th>
                      <img
                        className="w-[200px]"
                        src={item.image}
                        alt={item.title}
                      />
                    </th>
                    <th>{item.title}</th>
                    <th>{item.type}</th>
                    <th className='w-[400px]'>{item.content}</th>
                    <th>{item.username}</th>
                    <th>{item.phone}</th>
                    <th>{item.price}</th>
                    <th>
                      <div className="flex gap-5 w-full">
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={toggleStatus[item.id]}
                            onChange={() => handleToggleSwitch(item.id)}
                          />
                          <span className="slider round"></span>
                        </label>
                        <button
                          className="border bg-green-600 w-[100px] flex items-center justify-center text-white rounded"
                          onClick={() => handleEdit(item.id)}
                        >
                          <AiFillEdit /> Sửa
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
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
