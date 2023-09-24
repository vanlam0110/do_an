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
  const [toggleStatus, setToggleStatus] = useState({});
  
  const getData = async () => {
    const response = await axios.get('http://localhost:8000/car');
    if (response.status === 200) {
      setList(response.data);
      const initialToggleStatus = {};
      response.data.forEach((item) => {
        initialToggleStatus[item.id] = item.display === 1;
      });
      setToggleStatus(initialToggleStatus);
    }
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
                    <th>{item.content}</th>
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
      </div>
    </div>
  );
}

export default Post_management;
