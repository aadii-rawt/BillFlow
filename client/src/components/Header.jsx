import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { handleUserProfile, setBillPreview } from '../store/slices/stateSlice';
import { Link } from 'react-router-dom';
function Header() {
  const dispatch = useDispatch()
  return (
    <div className='bg-[#21263c]  px-5 py-3 flex items-center justify-between'>
      <div>
        <div className='border rounded-md  py-1 flex items-center'>
          <IoIosSearch className='text-gray-300 mx-2' />
          <input type="text" placeholder='Search in Bills' className='outline-none bg-transparent text-white px-2 py-0.5 border-l !border-gray-600' />
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <Link to='/setting' className='text-white '>setting</Link>
        <div onClick={() => dispatch(handleUserProfile(true))} className='w-10 h-10 cursor-pointer rounded-full bg-green-600 text-white flex items-center justify-center font-medium text-xl'>A</div>
      </div>
    </div>
  )
}

export default Header