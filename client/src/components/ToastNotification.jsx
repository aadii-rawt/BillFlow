import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { handleNotify, stopNotify } from '../store/slices/stateSlice';

function ToastNotification() {
    const dispatch = useDispatch()
    const notification = useSelector((state) => state?.stateSlice.notification)    
    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(stopNotify())
        }, 2000)
        return () => clearTimeout(id)
    }, [])

    return ReactDOM.createPortal(
        <div className={`${notification?.type == "error" ? "bg-red-100  shadow-red-100" : "bg-green-100  shadow-green-100"} text-sm animate-slide-down flex gap-3 items-center justify-center max-w-[310px] z-50  p-2 py-2
         border-2 border-white fixed top-10 left-1/2 transform -translate-x-1/2 rounded-lg shadow-md `}>
            <div className={`rounded-md w-8 h-8 ${notification?.type == "error" ? "bg-red-600" : "bg-green-600"}  flex items-center justify-center text-white`} onClick={() => dispatch(stopNotify())}><FaCircleCheck /></div>
       {notification?.msg}
        </div>,
        document.getElementById("portal")
    );
}

export default ToastNotification