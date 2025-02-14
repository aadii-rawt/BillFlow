import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { handleUserProfile, setUser } from '../store/slices/stateSlice';
import { useNavigate } from 'react-router-dom';

function ProfileRightSidebar() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.stateSlice.user);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("authToken");
        dispatch(setUser(null));
        navigate('/login');
    };

    return (
        <div className='absolute flex justify-end h-full top-0 right-0 bg-gray-900/50 w-full'>
            <div className='w-full sm:w-[60%] md:w-[40%] lg:w-[28%] bg-white animate-slide-right shadow-xl h-full p-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold'>
                            {user?.companyName?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h1 className='font-medium text-lg'>{user?.companyName || "User Name"}</h1>
                            <p className='text-gray-500 text-sm'>{user?.email || "user@example.com"}</p>
                        </div>
                    </div>
                    <button onClick={() => dispatch(handleUserProfile())} className='text-gray-500 hover:text-red-500 text-2xl'><RxCross2 /></button>
                </div>

                <div className='flex justify-between items-center text-sm border-y py-3 my-4'>
                    <p className='text-blue-500 cursor-pointer'>My Account</p>
                    <button onClick={handleLogOut} className='text-red-500'>Sign Out</button>
                </div>
                
                <div className='grid grid-cols-3 gap-4 text-center'>
                    {[
                        { title: "Help ", icon: "https://cdn-icons-png.flaticon.com/512/10015/10015092.png" },
                        { title: "FAQs", icon: "https://cdn-icons-png.flaticon.com/512/8744/8744051.png" },
                        { title: "Forum", icon: "https://cdn-icons-png.flaticon.com/512/10541/10541932.png" },
                        { title: " Tutorials", icon: "https://cdn-icons-png.flaticon.com/512/2377/2377793.png" },
                        { title: "Explore ", icon: "https://cdn-icons-png.flaticon.com/512/6941/6941674.png" },
                        { title: "Migration ", icon: "https://cdn-icons-png.flaticon.com/512/9671/9671633.png" }
                    ].map((item, index) => (
                        <div key={index} className='flex p-3 flex-col items-center justify-center gap-1 text-sm text-gray-700 grayscale hover:grayscale-0 hover:bg-gray-200 transition-all cursor-pointer rounded'>
                            <div className='text-2xl '>
                                <img src={item?.icon} alt="" className='w-1/2' />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                
                <div className='mt-6'>
                    <p className='font-semibold text-gray-700 mb-2'>Need Assistance?</p>
                    <p className='text-blue-500 text-sm cursor-pointer'>Have questions? Ask away!</p>
                    <p className='text-blue-500 text-sm cursor-pointer mt-1.5'>Send an email</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileRightSidebar;
