import React from 'react'
import Header from './Header'
import { TbCameraUp } from 'react-icons/tb'
export default function Createpost() {
    return (
        <div>
            <Header />
            <div className='border-b-[1px]'>
                <h1 className='text-[30px] font-medium  p-[20px_50px]'>
                    Đăng tin mới
                </h1>
            </div>

            <div className=' flex flex-col p-[20px_50px] gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold'>Tiêu đề</label>
                    <input className='rounded-[4px] border h-[40px] w-1/4' />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label className='font-bold'>Chọn Loại xe</label>
                    <select className='rounded-[4px] border h-[40px] w-1/4'>
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
                    <textarea className='rounded-[4px] border h-[140px] w-3/4'> </textarea>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-bold'>Thông tin liên hệ</label>
                    <input className='rounded-[4px] border h-[40px] w-1/4' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-bold'>Số điện thoại</label>
                    <input className='rounded-[4px] border h-[40px] w-1/4' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-bold'>Giá cho thuê</label>
                    <input className='rounded-[4px] border h-[40px] w-1/4' />
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
                        <input hidden type={'file'} id='file' />
                    </div>
                </div>

                <div>
                    <button className='bg-[#3961fb] rounded-[5px] border h-[45px] w-3/4 text-white font-bold'>
                        Đăng bài
                    </button>
                </div>
            </div>

        </div>
    )
}
