import React, { useEffect, useState } from 'react'
import Header from './Header'
import { TbCameraUp } from 'react-icons/tb'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

function Createpost() {
    const [title, setTitle] = useState('');
    const [type, seType] = useState('');
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const postData = async (data) => {
        const response = await axios.post(
            'http://localhost:8000/car',
            {
                title: data.title,
                type: data.type,
                content: data.content,
                username: data.username,
                phone: data.phone,
                price: data.price,
                // image: data.image
            }
        );
        if (response.status === 200) {

        }
    }

    const onSubmit = (event) => {
        const data = {
            title: event.target.title.value,
            type: event.target.type.value,
            content: event.target.content.value,
            username: event.target.username.value,
            phone: event.target.phone.value,
            price: event.target.price.value,
            // image: event.target.image.value,
        }
            postData(data)
            alert("Đăng tin thành công")
    }
    const [file, setFile] = useState(null);
    const onChangeFile = (event) => {
        // Trường hợp chọn 1 file
        const files = event.target.files;
        setFile(files[0]);
        // Trường hợp chọn nhiều file
        // const files = event.target.files;
        // setFile(files);
    };
    const onUpload = async () => {
        const form = new FormData();
        form.append('file', file);
        await axios.post('http://localhost:8000/car', 
        form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer token', // Nếu API yêu cầu
            },
        });
    };
    const onRemoveFile = () => {
        setFile(null);
    };
    return (

        <div>
            <Header />
            <form onSubmit={onSubmit} className='mt-[120px]'>
                <div className='border-b-[1px]'>
                    <h1 className='text-[30px] font-medium  p-[20px_50px]'>
                        Đăng tin mới
                    </h1>
                </div>

                <div className=' flex flex-col p-[20px_50px] gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Tiêu đề</label>
                        <input
                            value={title.title}
                            name='title'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Chọn Loại xe</label>
                        <select value={type.type} className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' name='type'>
                            <option value={'1'}>Chọn Loại Xe</option>
                            <option value={'2'}>Xe SỐ</option>
                            <option value={'3'}>Xe Ga</option>
                            <option value={'4'}>Xe Tay côn</option>
                            <option value={'5'}>Xe Otô 4 Chỗ</option>
                            <option value={'6'}>Xe Otô 7 Chỗ</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Nội dung mô tả</label>
                        <textarea
                            value={content.content}
                            name='content'
                            className='rounded-[4px] border h-[140px] w-3/4 p-[10px]'> </textarea>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Thông tin liên hệ</label>
                        <input
                            value={username.username}
                            name='usename'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Số điện thoại</label>
                        <input
                            value={phone.phone}
                            name='phone'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Giá cho thuê</label>
                        <input
                            value={price.price}
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
                            <input hidden type={'file'} id='file' onChange={onChangeFile}/>
                            {file && (
                                <div className=''>
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt=""
                                        className="w-40 "
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <button className='bg-[#3961fb] rounded-[5px] border h-[45px] w-3/4 text-white font-bold'>
                            Đăng bài
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Createpost