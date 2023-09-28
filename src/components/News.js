import React from 'react'
import './login.css'
import './Responsive.css'
import { AiFillStar } from 'react-icons/ai'
import { AiFillCaretRight } from 'react-icons/ai'
import Newreposive from './Newreposive'

export default function News() {
  return (
        <div>
            <div className='newreposive'><Newreposive/></div>
            <div className='pt-[30px] newreposive2'>
                <div className='title_main'>
                    <h1 className=''>
                        <span className='flex justify-center items-center gap-1'>
                            <AiFillStar /> Tin tức - sự kiện <AiFillStar />
                        </span>
                    </h1>
                </div>
                <div className='flex justify-center items-center pt-[30px] gap-10 new'>
                    <div className='border rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,.1)] w-[350px] new-responsive'>
                        <div className='flex flex-col gap-5 '>
                            <img className='w-[400px] h-[200px] rounded-[15px_15px_0_0]' src={'/image/paner.png'} />
                            <div className='flex flex-col gap-2 p-[10px_10px_20px_10px] new-content'>
                                <h1 className='font-bold'>Duis luctus elit nisi, et cursus magna ...</h1>
                                <p className='text-[#424242] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, ...</p>
                                <div className='flex items-center h-full gap-1'>
                                    <a className='text-[12px] text-[#666] font-bold'>Xem Thêm</a>
                                    <i className='text-[#ee453d] text-[12px]'><AiFillCaretRight /></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,.1)] w-[350px] new-responsive'>
                        <div className='flex flex-col gap-5 '>
                            <img className='w-[400px] h-[200px] rounded-[15px_15px_0_0]' src={'/image/bg-login.jpg'} />
                            <div className='flex flex-col gap-2 p-[10px_10px_20px_10px] new-content'>
                                <h1 className='font-bold'>Mauris tristique pretium tempus...</h1>
                                <p className='text-[#424242] '>Donec tempus eu ligula sed blandit. Vivamus vel enim ac quam iaculis rutrum. Sed nisiarius et massa.  ...</p>
                                <div className='flex items-center h-full gap-1'>
                                    <a className='text-[12px] text-[#666] font-bold'>Xem Thêm</a>
                                    <i className='text-[#ee453d] text-[12px]'><AiFillCaretRight /></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,.1)] w-[350px] new-responsive'>
                        <div className='flex flex-col gap-5 '>
                            <img className='w-[400px] h-[200px] rounded-[15px_15px_0_0]' src={'/image/tin.jpg'} />
                            <div className='flex flex-col gap-2 p-[10px_10px_20px_10px] new-content'>
                                <h1 className='font-bold'>Aliquam placerat nisl nec imperdiet ...</h1>
                                <p className='text-[#424242] '>n rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a egestas. Aenean ...</p>
                                <div className='flex items-center h-full gap-1'>
                                    <a className='text-[12px] text-[#666] font-bold'>Xem Thêm</a>
                                    <i className='text-[#ee453d] text-[12px]'><AiFillCaretRight /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
