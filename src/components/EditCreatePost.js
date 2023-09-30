import React, { useEffect, useState, useContext } from 'react'
import Header from './Header'
import { TbCameraUp } from 'react-icons/tb'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom'


function EditCreatePost() {
  const { listCar } = useContext(Context);
  console.log(listCar);
  const [baseImage, setBaseImage] = useState("");
  const { id } = useParams();
  const [imageChanged, setImageChanged] = useState(false);
  // const [option, setOption] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const object = listCar.find((item) => item.id == id);
  const initialType = object ? object.type : "";
  const [type, setType] = useState(initialType);

  useEffect(() => {
    const fetchData = async () => {
      // Sử dụng promises để đọc giá trị  từ obj
      const titlePromise = new Promise((resolve) => {
        resolve(object ? object.title : "");
      });

      const contentPromise = new Promise((resolve) => {
        resolve(object ? object.content : "");
      });

      const usernamePromise = new Promise((resolve) => {
        resolve(object ? object.username : "");
      });

      const phonePromise = new Promise((resolve) => {
        resolve(object ? object.phone : "");
      });

      const pricePromise = new Promise((resolve) => {
        resolve(object ? object.price : "");
      });

      // Chờ tất cả promises hoàn thành
      const [titleValue, contentValue, usernameValue, phoneValue, priceValue] = await Promise.all([
        titlePromise,
        contentPromise,
        usernamePromise,
        phonePromise,
        pricePromise
      ]);

      // Cập nhật state sau khi promises đã hoàn thành
      setTitle(titleValue);
      setContent(contentValue);
      setUsername(usernameValue);
      setPhone(phoneValue);
      setPrice(priceValue);
    };
    console.log(price);
    fetchData();
  }, [object]);
  const updateData = async () => {
    try {
      // Khi đã chọn ảnh mới thì lấy ảnh mới up lên nếu không thì vẫn giữ ảnh cũ và dữ liệu cũ
      if (imageChanged) {
        const response = await axios.patch(
          `http://localhost:8000/car/${id}`,
          {
            title: title,
            type: type,
            content: content,
            username: username,
            phone: phone,
            price: price,
            image: baseImage,
            display: 1,
          }
        );

      } else {
        const response = await axios.patch(
          `http://localhost:8000/car/${id}`,
          {
            title: title,
            type: type,
            content: content,
            username: username,
            phone: phone,
            price: price,
            image: object.image,
            display: 1,
          }
        );


      }
    } catch (error) {
      console.error("Lỗi khi cập nhật dữ liệu:", error);
    }
  };

  const handleClick = () => {
    if (!title) {
      alert("Bạn chưa điền tiêu đề");
      return
    }
    if (!type) {
      alert("Bạn chưa chọn loại xe");
      return
    }
    if (!content) {
      alert("Bạn chưa điền nội dung");
      return
    }
    if (!username) {
      alert("Bạn chưa điền họ tên");
      return
    }
    if (!phone) {
      alert("Bạn chưa điền số điện thoại");
      return
    }
    if (!price) {
      alert("Bạn chưa điền giá cho thuê");
      return
    }
    updateData();
    alert("Cập nhật thành công");
    navigate('/post-management');
    window.location.reload();
  };


  // const options = [
  //     { id: 1, value: "1", name: "Chọn Loại Xe" },
  //     { id: 2, value: "Xe Số", name: "Xe Số" },
  //     { id: 3, value: "Xe Ga", name: "Xe Ga" },
  //     { id: 4, value: "Xe Tay côn", name: "Xe Tay côn" },
  //     { id: 5, value: "Xe Otô 4 Chỗ", name: "Xe Otô 4 Chỗ" },
  //     { id: 6, value: "Xe Otô 7 Chỗ", name: "Xe Otô 7 Chỗ" },
  // ]


  // const handleRenderOptionList = () => {
  //     return options?.map((item) => {
  //         return (
  //             <option key={item.id} value={item.value}>{item.name}</option>
  //         )
  //     })
  // }

  // const handleOnChangeOption = (e) => {
  //     setOption(e.target.value);
  // }


  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setImageChanged(true);

  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (

    <div>
      <Header />
      <form className=''>
        <div className='border-b-[1px]'>
          <h1 className='text-[30px] font-medium  p-[20px_50px]'>
            Cập nhật bài đăng
          </h1>


        </div>

        <div className=' flex flex-col p-[20px_50px] gap-5'>
          <div className='flex flex-col gap-2'>
            <label className='font-bold'>Tiêu đề</label>
            <input
              required
              onChange={(e) => setTitle(e.target.value)}
              name='title'
              defaultValue={object?.title ? object.title : ""}
              className='rounded-[4px] border h-[40px] w-1/4 p-[10px] max-[376px]:w-full' />
          </div>
          <div className='flex flex-col gap-2 '>
            <label className='font-bold'>Chọn Loại xe</label>
            <select

              onChange={(e) => setType(e.target.value)}
              value={type}
              className='rounded-[4px] border h-[40px] w-1/4 pl-[10px] max-[376px]:w-full'
              name='type'>
              <option value={'1'}>Chọn Loại Xe</option>
              <option value={'Xe Số'}>Xe SỐ</option>
              <option value={'Xe Ga'}>Xe Ga</option>
              <option value={'Xe Tay côn'}>Xe Tay côn</option>
              <option value={'Xe Otô 5 Chỗ'}>Xe Otô 5 Chỗ</option>
              <option value={'Xe Otô 7 Chỗ'}>Xe Otô 7 Chỗ</option>
            </select>
          </div>

          <div className='flex flex-col gap-2 '>
            <label className='font-bold'>Nội dung mô tả</label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              defaultValue={object?.content ? object.content : ""}
              name='content'
              className='rounded-[4px] border h-[140px] w-3/4 p-[10px] max-[376px]:w-full max-[376px]:h-[160px]'>

            </textarea>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-bold'>Họ tên người cho thuê</label>
            <input

              onChange={(e) => setUsername(e.target.value)}
              defaultValue={object?.username ? object.username : ""}
              name='usename'
              className='rounded-[4px] border h-[40px] w-1/4 p-[10px] max-[376px]:w-full' />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-bold'>Số điện thoại</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              defaultValue={object?.phone ? object.phone : ""}
              name='phone'
              className='rounded-[4px] border h-[40px] w-1/4 p-[10px] max-[376px]:w-full' />
          </div>

          <div className='flex flex-col gap-2 '>
            <label className='font-bold'>Giá cho thuê</label>
            <input

              onChange={(e) => setPrice(e.target.value)}
              defaultValue={object?.price ? object.price : ""}
              name='price'
              className='rounded-[4px] border h-[40px] w-1/4 p-[10px] max-[376px]:w-full' />
          </div>

          <div className='w-full flex flex-col gap-2'>
            <h1 className='font-bold'>Hình ảnh</h1>
            <p>
              Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn
            </p>
            <div className='w-full'>
              <label className='flex flex-col items-center justify-center border-gray-400  w-3/4 border h-[200px] border-dashed rounded-md max-[376px]:w-full' htmlFor='file'>
                <TbCameraUp size={40} />
                Thêm ảnh
              </label>
              <div className='w-full'>
                <h3 className='font-medium py-4'>Ảnh đã chọn</h3>
              </div>
              {object && (
                <img
                  className='w-64'
                  src={baseImage || object.image}
                  alt=''
                />
              )}
              <input onChange={uploadImage} hidden type={'file'} id='file' />

            </div>
          </div>

          <div>
            <button type='submit' onClick={handleClick} className='bg-[#3961fb] rounded-[5px] border h-[45px] w-3/4 text-white font-bold max-[376px]:w-full'>
              Cập nhật
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}
export default EditCreatePost