import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { handleNotify, stopNotify } from '../store/slices/stateSlice';

function ToastNotification() {
    const dispatch = useDispatch()

    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(stopNotify())
        }, 2000)
        return () => clearTimeout(id)
    }, [])

    return ReactDOM.createPortal(
        <div className='bg-green-100 min-w-[310px] text-sm animate-slide-down flex gap-3 items-center justify-center max-w-[310px] z-50  p-2 py-2
         border-2 border-white fixed top-10 left-1/2 transform -translate-x-1/2 rounded-lg shadow-md shadow-green-100'>
            <div className='rounded-md w-8 h-8 bg-green-600 flex items-center justify-center text-white' onClick={() =>  dispatch(stopNotify()) }><FaCircleCheck /></div>
            Contact information has been saved.
        </div>,
        document.getElementById("portal")
    );
}

export default ToastNotification