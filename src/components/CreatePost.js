import React, { useEffect, useState } from 'react'
import Header from './Header'
import { TbCameraUp } from 'react-icons/tb'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer'
function Createpost() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [baseImage, setBaseImage] = useState("");
    const navigate = useNavigate();

    const postData = async (event) => {
        event.preventDefault();
        
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
        if (!baseImage){
            alert('Bạn chưa chọn ảnh')
            return
        }
        const response = await axios.post(
            'http://localhost:8000/car',
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
        if (response.status === 201) {
            alert("Đăng bài thàh công")
            navigate('/')
        }
    }
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
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
                        Đăng tin mới
                    </h1>
                </div>

                <div className=' flex flex-col p-[20px_50px] gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Tiêu đề</label>
                        <input
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            name='title'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Chọn Loại xe</label>
                        <select 
                            onChange={(e) => setType(e.target.value)} 
                            value={type} 
                            className='rounded-[4px] border h-[40px] w-1/4 pl-[10px]' 
                            name='type'>
                            <option value={'1'}>Chọn Loại Xe</option>
                            <option value={'Xe Số'}>Xe SỐ</option>
                            <option value={'Xe Ga'}>Xe Ga</option>
                            <option value={'Xe Tay côn'}>Xe Tay côn</option>
                            <option value={'Xe Otô 4 Chỗ'}>Xe Otô 4 Chỗ</option>
                            <option value={'Xe Otô 7 Chỗ'}>Xe Otô 7 Chỗ</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Nội dung mô tả</label>
                        <textarea
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            name='content'
                            className='rounded-[4px] border h-[140px] w-3/4 p-[10px]'> </textarea>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Họ tên người cho thuê</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            name='usename'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Số điện thoại</label>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            name='phone'
                            className='rounded-[4px] border h-[40px] w-1/4 p-[10px]' />
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-bold'>Giá cho thuê</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
                            {baseImage && (
                                <div className=''>
                                    <img src={baseImage} className="w-64 "></img>
                                </div>
                            )}
                            <input onChange={uploadImage} hidden type={'file'} id='file' />
                            
                        </div>
                    </div>

                    <div>
                        <button type='submit' onClick={postData} className='bg-[#3961fb] rounded-[5px] border h-[45px] w-3/4 text-white font-bold'>
                            Đăng bài
                        </button>
                    </div>
                </div>
            </form>
        
        
        </div>
    )
}
export default Createpost