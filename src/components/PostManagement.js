import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import './login.css';
import axios from 'axios';
import { HomeContext } from '../context/Homecontext';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Post_management() {
  const { list, setList } = useContext(HomeContext);
  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get('http://localhost:8000/car');
    if (response.status === 200) {
      setList(response.data);
    }
  };

  const handleToggleDisplay = async (id) => {
    const response = await axios.patch(`http://localhost:8000/car/${id}`, {
      display: list.find((item) => item.id === id).display === 1 ? 0 : 1,
    });

    if (response.status === 200) {
      // Cập nhật danh sách sau khi thay đổi trạng thái
      getData();
    }
  };

  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="">
        <div className="border-b-[1px]">
          <h1 className="p-[20px] font-bold text-[20px]">Quản lý tin đăng</h1>
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
                  <th>Trạng thái</th>
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
                    <th>{item.content}</th>
                    <th>{item.username}</th>
                    <th>{item.phone}</th>
                    <th>{item.price}</th>
                    <th>
                      <div className="flex gap-5 w-full">
                        <button
                          className={`border bg-red-600 w-[100px] flex items-center justify-center text-white rounded ${
                            item.display === 0 ? 'hidden' : ''
                          }`}
                          onClick={() => handleToggleDisplay(item.id)}
                        >
                          Ẩn tin
                        </button>
                        <button
                          className={`border bg-green-600 w-[100px] flex items-center justify-center text-white rounded ${
                            item.display === 1 ? 'hidden' : ''
                          }`}
                          onClick={() => handleToggleDisplay(item.id)}
                        >
                          Bật tin
                        </button>
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="border bg-[#3961fb] w-[100px] flex items-center justify-center text-white rounded"
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
      </div>
    </div>
  );
}

export default Post_management;
