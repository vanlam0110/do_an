import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import Footer from './Footer'

function EditUserResponsive() {
  const [listUser, setListUser] = useState([]);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const isLogin = localStorage.getItem('username');

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/user/`
      );
      if (response.status === 200) {
        setListUser(response.data);
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu người dùng:', error);
    }
  };

  const object = listUser.find((item) => item.username === isLogin);

  const handleUpdateAccount = async () => {
    // Kiểm tra xem các biến username, phone, và password có giá trị hợp lệ hay không.
    if (!username) {
      alert("Bạn chưa điền tên hiển thị");
      return;
    }
    if (!phone) {
      alert("Bạn chưa điền số điện thoại");
      return;
    }
    if (!password) {
      alert("Bạn chưa điền mật khẩu");
      return;
    }

    // Nếu thông tin hợp lệ, thực hiện cập nhật và lưu vào localStorage.
    localStorage.setItem('username', username);
    alert('Cập nhật thành công');

    try {
      const response = await axios.patch(
        `http://localhost:8000/user/${object.id}`,
        {
          username: username,
          phone: phone,
          password: password,
        }
      );
      // Xử lý response từ server nếu cần.
    } catch (error) {
      console.error('Lỗi khi cập nhật người dùng:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Nếu object không tồn tại, không cần thực hiện gán giá trị mặc định.
    if (object) {
      setUsername(object.username);
      setPhone(object.phone);
      setPassword(object.password);
    }
  }, [object]);

  return (
    <div>
      <div className=''>
        <div className='flex justify-center items-center pt-[50px] pb-[50px]'>
          <form className='border border-[#dedede] w-[330px] p-[30px_30px_100px] flex flex-col gap-3 bg-register'>
            <h1 className='text-[15px] font-bold text-center'>
              Cập nhật thông tin cá nhân
            </h1>
            <div className='flex flex-col gap-5 pt-[20px] pb-[20px]'>
              <div className='w-full flex flex-col gap-3'>
                <label className=''>Tên hiển thị</label>
                <input
                  required
                  className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px] '
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='w-full flex flex-col gap-3'>
                <label className=''>Số điện thoại</label>
                <div className='flex flex-col gap-3'>
                  <input
                    required
                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col gap-3'>
                <label className=''>Mật khẩu</label>
                <div className='flex flex-col gap-3 '>
                  <input
                    required
                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px]'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              className='bg-[#3961fb] rounded-[5px] border h-[45px] w-full text-white font-bold'
              onClick={handleUpdateAccount}
            >
              Cập nhật tài khoản
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUserResponsive;
