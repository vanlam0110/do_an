import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';

function EditUser() {
  const [listUser, setListUser] = useState([]);
  const [username, setUsername] = useState ('');
  const [phone, setPhone] = useState ('');
  const [password, setPassword] = useState ('');
  const isLogin = localStorage.getItem('isLogin');

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
    localStorage.setItem('isLogin',username);
    localStorage.setItem('username',username);
    alert('Cập nhật thành công');

      const response = await axios.patch(
        `http://localhost:8000/user/${object.id}`,
       {
        username: username,
        phone: phone,
        password: password,
       }
       );
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      // Sử dụng promises để đọc giá trị title và content từ obj
  
      const usernamePromise = new Promise((resolve) => {
        resolve(object ? object.username : "");
      });

      const phonePromise = new Promise((resolve) => {
        resolve(object ? object.phone : "");
      });

      const passwordPromise = new Promise((resolve) => {
        resolve(object ? object.password : "");
      });

      // Chờ tất cả promises hoàn thành
      const [usenameValue, phoneValue, passwordValue] = await Promise.all([
        usernamePromise,
        phonePromise,
        passwordPromise
      ]);

      // Cập nhật state title và content sau khi promises đã hoàn thành
      setUsername(usenameValue);
      setPhone(phoneValue);
      setPassword(passwordValue);
    };

    fetchData();
  }, [object]);
  // object?.console.log(object.username)
  // console.log(object.username);
  // console.log(object.username);
  return (
    <div>
      <Header />
      <div className=''>
        <div className='flex justify-center items-center pt-[100px]'>
          <form className='border border-[#dedede] w-[600px] p-[30px_30px_100px] flex flex-col gap-3 bg-register'>
            <h1 className='text-[32px] font-bold text-center'>
              Cập nhật thông tin cá nhân
            </h1>
            <div className='flex flex-col gap-5'>
              <div className='w-full flex gap-5 items-center'>
                <label className=''>Tên tài khoản</label>
                <input
                  className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px] w-[400px]'
                  defaultValue={object?.username ? object.username : ''}
                  onChange={(e) =>
                    setUsername(
                      
                       e.target.value
                    )
                  }
                />
              </div>
              <div className='w-full flex gap-5'>
                <label className='mt-[10px]'>Số điện thoại</label>
                <div className='flex flex-col gap-3'>
                  <input
                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px] w-[400px]'
                    defaultValue={object?.phone ? object.phone : ''}
                    onChange={(e) =>
                      setPhone(
                        
                         e.target.value
                      )
                    }
                  />
                  
                  <a className='text-[#007bff]'>Đổi số điện thoại</a>
                </div>
              </div>
              <div className='w-full flex gap-5'>
                <label className='mt-[10px]'>Mật khẩu</label>
                <div className='flex flex-col gap-3 ml-[25px]'>
                  <input
                    className='bg-[#e8f0fe] rounded-[4px] border h-[45px] p-[10px] w-[400px]'
                    type='password'
                    defaultValue={object?.password ? object.password : ''}
                    onChange={(e) =>
                      setPassword(
                        
                         e.target.value
                      )
                    }
                  />
                  <a className='text-[#007bff]'>Đổi mật khẩu</a>
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

export default EditUser;