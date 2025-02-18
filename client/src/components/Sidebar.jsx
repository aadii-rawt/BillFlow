import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TbInvoice } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
function Sidebar() {
    return (
        <div className='min-w-[220px] min-h-screen '>
            <div className='bg-[#f7f7fe] p-3 h-full border-r'>
                <ul>
                    <li className='w-full rounded-md  hover:bg-[#ededf7] cursor-pointer'><NavLink to="/" className={({ isActive }) => `p-2 flex items-center gap-2.5   rounded-md ${isActive && 'bg-blue-500 text-white'}`}><GoHome /> Home</NavLink></li>
                    <li className=' w-full hover:bg-[#ededf7] rounded-md cursor-pointer '>
                        <NavLink to="/vendors" className={({ isActive }) => `p-2 flex items-center gap-2.5   rounded-md ${isActive && 'bg-blue-500 text-white'}`}><HiOutlineUserGroup /> Vendor</NavLink></li>
                    <li className='w-full hover:bg-[#ededf7] rounded-md cursor-pointer'>
                        <NavLink to="/bills" className={({ isActive }) => `p-2 flex items-center gap-2.5   rounded-md ${isActive && 'bg-blue-500 text-white'}`}><TbInvoice /> Bill</NavLink></li>
                    <li className=' w-full hover:bg-[#ededf7] rounded-md cursor-pointer'><NavLink to="/customers" className={({ isActive }) => `p-2 flex items-center gap-2.5   rounded-md ${isActive && 'bg-blue-500 text-white'}`}><HiOutlineUserGroup /> Customer</NavLink></li>
                    <li className=' w-full hover:bg-[#ededf7] rounded-md cursor-pointer'><NavLink to="/invoices" className={({ isActive }) => `p-2 flex items-center gap-2.5   rounded-md ${isActive && 'bg-blue-500 text-white'}`}><TbInvoice /> Invoice</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar