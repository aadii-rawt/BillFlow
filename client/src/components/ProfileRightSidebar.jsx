import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { handleUserProfile } from '../store/slices/stateSlice';

function ProfileRightSidebar() {
    const dispatch = useDispatch()
    return (
        <div className='absolute flex overflow-hidden justify-end h-full top-16 right-0 bg-gray-900/50 border-l w-full'>
            <div className='w-[28%] bg-[#F9F9FB] animate-slide-right'>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex gap-2'>
                        <div className='w-12 h-12 rounded-md'>
                            <img src="/img/image.png" alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium'>Aditya Rawat</h1>
                            <p className='text-gray-500'>rawatadii060@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => dispatch(handleUserProfile())} className='text-red-500 text-2xl'><RxCross2 /></button>
                    </div>
                </div>

                <div className='flex justify-between items-center px-5 text-[15px] my-5 border-y py-3'>
                    <p className='text-blue-500'>My Account</p>
                    <button className='text-red-500'>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileRightSidebar