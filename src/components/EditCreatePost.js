import React, { useEffect, useState } from 'react'
import Header from './Header'
import { TbCameraUp } from 'react-icons/tb'
import axios from 'axios';
import { useParams } from "react-router-dom";

function EditCreatePost() {
    const [list, setList] = useState([]);

    const [baseImage, setBaseImage] = useState("");
    const [option, setOption] = useState("");
    const { id } = useParams();
    const [imageChanged, setImageChanged] = useState(false);
    const [title, setTitle] = useState(object.title);
    const [content, setContent] = useState(object.content);
    const [type, setType] = useState(object.type);
    const [price, setPrice] = useState(object.price);
    const [username, setUsername] = useState(object.username);
    const [phone, setPhone] = useState(object.phone);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleContent = (event) => {
        setContent(event.target.value);
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handlePrice = (event) => {
        setPrice(event.target.value);
    }
    
    const updateData = async () => {
        try {
          // Khi đã chọn ảnh mới thì lấy ảnh mới up lên nếu không thì vẫn giữ ảnh cũ và dữ liệu cũ
          if (imageChanged) {
            const response = await axios.put(
              `http://localhost:8000/car/${id}`,
              {
                title: title,
                type: type,
                content: content,
                username: username,
                phone: phone,
                price: price,
                image: baseImage,
              }
            );
            alert("cap nhat thanh cong");
          } else {
            const response = await axios.put(
              `http://localhost:8000/car/${id}`,
              {
                title: title,
                type: type,
                content: content,
                username: username,
                phone: phone,
                price: price,
                image: object.image,
              }
            );
            alert("Cập nhật thành công");
          }
        } catch (error) {
          console.error("Lỗi khi cập nhật dữ liệu:", error);
        }
      };
    
      const handleClick = () => {
        updateData();
      };


      const getData = async () => {
        try {

            const response = await axios.get(`http://localhost:8000/car`);
            console.log(response)
            if (response.status === 200) {
                setList(response.data)
            }
        } catch (error) {
            console.log("err", error);
        }
    }

    useEffect(() => {
        getData()

    }, [id]);


    const options = [
        { id: 1, value: "1", name: "Chọn Loại Xe" },
        { id: 2, value: "Xe Số", name: "Xe Số" },
        { id: 3, value: "Xe Ga", name: "Xe Ga" },
        { id: 4, value: "Xe Tay côn", name: "Xe Tay côn" },
        { id: 5, value: "Xe Otô 4 Chỗ", name: "Xe Otô 4 Chỗ" },
        { id: 6, value: "Xe Otô 7 Chỗ", name: "Xe Otô 7 Chỗ" },
    ]

    const handleRenderOptionList = () => {
        return options?.map((item) => {
            return (
                <option key={item.id} value={item.value}>{item.name}</option>
            )
        })
    }

    const handleOnChangeOption = (e) => {
        setOption(e.target.value);
    }

    const object = list.find((item) => item.id == id);

    console.log(list);

    console.log(object);




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
            <form className='mt-[120px]'>
                <div className='border-b-[1px]'>
                    <h1 className='text-[30px] font-medium  p-[20px_50px]'>
                        Đăng tin mới
                    </h1>
                </div>

                <div className=' flex flex-col p-[20px_50px] gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Tiêu đề</label>
                        <input
                            required

                            onChange={handleTitle}
                            name='title'
                            defaultValue={object?.title ? object.title : ""}
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Chọn Loại xe</label>
                        <select
                            defaultValue={option}
                            onChange={(e) => handleOnChangeOption(e)}
                            className='rounded-[4px] border h-[40px] w-1/4 pl-[10px]' name='type'>
                            {handleRenderOptionList()}
                        </select>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Nội dung mô tả</label>
                        <input
                            onChange={handleContent}
                            defaultValue={object?.content ? object.content : ""}
                            name='content'
                            className='rounded-[4px] border h-[140px] w-3/4 p-[10px]' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Họ tên người cho thuê</label>
                        <input

                            onChange={handleUsername}
                            defaultValue={object?.username ? object.username : ""}
                            name='usename'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Số điện thoại</label>
                        <input
                            onChange={handlePhone}
                            defaultValue={object?.phone ? object.phone : ""}
                            name='phone'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Giá cho thuê</label>
                        <input

                            onChange={handlePrice}
                            defaultValue={object?.price ? object.price : ""}
                            name='price'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <h1 className='font-bold'>Hình ảnh</h1>
                        <p>
                            Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn
                        </p>
                        <div className='w-full'>
                            <label className='flex flex-col items-center justify-center border-gray-400  w-3/4 border h-[200px] border-dashed rounded-md' htmlFor='file'>
                                <TbCameraUp size={40} />
                                Thêm ảnh
                            </label>
                            <div className='w-full'>
                                <h3 className='font-medium py-4'>Ảnh đã chọn</h3>
                            </div>
                            {object ? (
                                <img className="flex-1 w-44" src={object.image} alt="" />
                            ) : (
                                <p>No Image</p>
                            )}
                            {baseImage && (
                                <div className=''>
                                    <img src={baseImage} className="w-64 "></img>
                                </div>
                            )}
                            <input onChange={uploadImage} hidden type={'file'} id='file' />

                        </div>
                    </div>

                    <div>
                        <button type='submit' onClick={handleClick} className='bg-[#3961fb] rounded-[5px] border h-[45px] w-3/4 text-white font-bold'>
                            Cập nhật
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default EditCreatePost