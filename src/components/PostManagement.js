import React, { useContext, useEffect } from 'react'
import Header from './Header'
import './login.css'
import axios from 'axios'
import { HomeContext } from '../context/Homecontext'
import { AiFillDelete } from "react-icons/ai"
import { AiFillEdit } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


function Post_management() {
    const { list, setList } = useContext(HomeContext);
    const navigate = useNavigate();
    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/car'
        );
        if (response.status === 200) {
            setList(response.data)
        }
    };

    const onDelete = async (id) => {
        let text = 'Bạn có muốn xóa';

        if (window.confirm(text) === true) {
            const res = await axios.delete(
                'http://localhost:8000/car/' + id
            );

            if (res.status === 200) {
                alert('Xóa thành công');
            }
            await getData();
        }
    }

    const handleEdit = (id) => {
        navigate(`edit/${id}`);
      };


    useEffect(() => {
        getData()
    }, [])
    return (


        <div>
            <Header />
            <div className='mt-[140px]'>
                <div className='border-b-[1px] '>
                    <h1 className='p-[20px] font-bold text-[20px]'>
                        Quản lý tin đăng
                    </h1>
                </div>
                <div>
                    <div className='p-[20px] '>
                        <table >
                            <thead>
                                <tr>
                                    <th>Ảnh</th>
                                    <th>Tiêu đề</th>
                                    <th>Loại xe</th>
                                    <th>Nội dunng mô tả</th>
                                    <th>Họ tên người cho thuê</th>
                                    <th>Số điện thoại</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>

                            {list.map((item) => (
                                <tbody key={item}>
                                    <tr>
                                        <th><img className='w-[200px]' src={item.image} /></th>
                                        <th>{item.title}</th>
                                        <th>{item.type}</th>
                                        <th>{item.content}</th>
                                        <th>{item.username}</th>
                                        <th>{item.phone}</th>
                                        <th>{item.price}</th>
                                        <th>
                                            <div className='flex gap-5 w-full '>
                                                <button onClick={() => onDelete(item.id)} className='border bg-red-600 w-[100px] flex items-center justify-center text-white rounded'>
                                                    <AiFillDelete /> Delete
                                                </button>
                                    
                                                    <button 
                                                        onClick={() => handleEdit(item.id)}
                                                        className='border bg-green-600 w-[100px] flex items-center justify-center text-white rounded'>
                                                    <AiFillEdit /> Edit
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post_management