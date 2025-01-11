import React, { useState } from 'react'
import Accordion from './Accordion'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'

function VendorProfile({ setVendorProfile, vendorProfile }) {
    console.log(vendorProfile);



    const [tabs, setTabs] = useState("Overview")
    return (
        <div className='absolute top-0 right-0 bg-white border-l w-[70%]'>
            <div className='flex justify-between items-center p-4'>
                <div>
                    <h1 className='text-2xl'>{vendorProfile?.displayName}</h1>
                </div>
                <div className='space-x-2'>
                    <button className='px-2.5 py-1 text-[15px] border bg-gray-100 rounded'>Edit</button>
                    <button className='px-2.5 py-1 text-[15px] border bg-blue-500 text-white rounded'>New</button>
                    <button className='px-2.5 py-1 text-[15px] border bg-gray-100 rounded' onClick={() => setVendorProfile(false)}>X</button>
                </div>
            </div>
            <div className='px-4 pt-3 pb-2 border-b'>
                <ul className='flex gap-7 text-[15px] text-gray-500'>
                    <li className={`${tabs == "Overview" && "font-medium text-gray-800"} cursor-pointer`} onClick={() => setTabs("Overview")}>Overview</li>
                    <li>Comments</li>
                    <li className={`${tabs == "Transaction" && "font-medium text-gray-800"} cursor-pointer`} onClick={() => setTabs("Transactions")}>Transactions</li>
                    <li>Mails</li>
                </ul>
            </div>
            {tabs === "Overview" ?
                <div className='flex'>
                    <div className='min-w-[35%] max-w-[35%] p-4 border-r'>
                        <div className='flex gap-3'>
                            <div className='w-12 h-12 rounded-md bg-gray-200'></div>
                            <h1 className='font-medium'>Aditya</h1>
                        </div>
                        <Accordion />
                        {/* <div className="space-y-2 my-5">
                            <div className="">
                                <button
                                    className="w-full flex border-b py-0.5 justify-between items-center  text-left text-[14px]"
                                >
                                    <span >Record Info</span>
                                    <span className='text-blue-500'> <MdOutlineKeyboardArrowUp /></span>
                                </button>
                                <div className="transition-all duration-300 ease-in-out">
                                    <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-500'>Vendor ID</span>
                                            <span className='text-black'>{vendorProfile?._id}</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-500'>Created on</span>
                                            <span className='text-black'>02/34/2933</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-500'>Created By</span>
                                            <span className='text-black'>Aditya Rawat</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* Address */}
                         {/* <div className="space-y-2 my-5">
                            <div className="">
                                <input type="checkbox" id="toggle-record-info" className="hidden peer" />
                                <label
                                    htmlFor="toggle-record-info"
                                    className="w-full flex border-b py-0.5 justify-between items-center text-left text-[14px] cursor-pointer"
                                >
                                    <span>Address</span>
                                    <span className="text-blue-500 peer-checked:rotate-180 transition-transform duration-300">
                                        <MdOutlineKeyboardArrowUp />
                                    </span>
                                </label>
                                <div
                                    className="transition-all duration-500 min-h-0 h-0 overflow-hidden peer-checked:min-h-44"
                                >
                                    <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Vendor ID</span>
                                            <span className="text-black">{vendorProfile?._id}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Created on</span>
                                            <span className="text-black">02/34/2933</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Created By</span>
                                            <span className="text-black">Aditya Rawat</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="space-y-2 my-5">
                            <div className="">
                                <input type="checkbox" id="toggle-record-info" className="hidden peer" />
                                <label
                                    htmlFor="toggle-record-info"
                                    className="w-full flex border-b py-0.5 justify-between items-center text-left text-[14px] cursor-pointer"
                                >
                                    <span>RECORD INFO</span>
                                    <span className="text-blue-500 peer-checked:rotate-180 transition-transform duration-300">
                                        <MdOutlineKeyboardArrowUp />
                                    </span>
                                </label>
                                <div
                                    className="transition-all duration-500 min-h-0 h-0 overflow-hidden peer-checked:min-h-44"
                                >
                                    <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Vendor ID</span>
                                            <span className="text-black">{vendorProfile?._id}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Created on</span>
                                            <span className="text-black">02/34/2933</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Created By</span>
                                            <span className="text-black">Aditya Rawat</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  */}

                        
                    </div>
                    <div className='p-4 w-full'>
                        <div>
                            <h1 className='font-semibold text-lg'>Payables</h1>
                            <table className='w-full my-3'>
                                <thead>
                                    <tr className='bg-[#f9f9fb] border-y py-2'>
                                        <th className='font-medium text-sm text-gray-500 py-1.5'>Currency</th>
                                        <th className='font-medium text-sm text-gray-500 py-1.5'>Outstanding Payables</th>
                                        <th className='font-medium text-sm text-gray-500 py-1.5'>Unused Credits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b text-center'>
                                        <td className='text-sm py-1.5'>INR- Indian Rupee</td>
                                        <td className='text-sm py-1.5 font-medium    text-blue-500'>₹2,000</td>
                                        <td className='text-sm py-1.5'>₹0</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        {/* activity feed */}
                        <div className='flex items-center justify-center flex-col my-10'>
                            <div className="relative flex items-start gap-2">
                                {/* Timeline Indicator */}
                                <div className="flex gap-2  items-center">
                                    <div className='text-right'>
                                        <div className="text-sm text-gray-500">
                                            31/12/24
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {/* {formatDate(vendor?.createdAt).formattedTime} */}
                                            02:34 AM
                                        </div>
                                    </div>
                                    <div className="border text-white rounded-full p-1.5 flex items-center justify-center">
                                        <HiOutlineChatBubbleOvalLeftEllipsis size={20} className='text-blue-400' />
                                    </div>
                                    <div className="h-full w-px bg-blue-500"></div>
                                </div>

                                {/* Timeline Content */}
                                <div className=''>
                                    <div className=" bg-gray-100 p-2 rounded-md border">
                                        <h4 className="text-gray-800 font-medium">Contact person added</h4>
                                        <p className="text-gray-600 text-sm">
                                            Contact person Aditya has been created  by <span className='font-semibold'>Sahil</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='p-4 space-y-8'>
                    {/* bills */}
                    <div className='border  rounded-lg overflow-hidden cursor-pointer'>
                        <div className='flex p-2 px-3 justify-between items-center bg-[#f9f9fb]'>
                            <h1 className='font-medium flex gap-0 items-center'> <MdKeyboardArrowRight className='text-gray-500' /> Bills</h1>
                            <button className='flex items-center gap-1 text-sm font-medium'><FiPlus size={12} className='text-white bg-blue-500 rounded-full' /> New</button>
                        </div>
                        <div>
                            <table className='w-full'>
                                <thead>
                                    <tr className='border-t bg-[#f9f9fb]'>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>DATE</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>BILL#</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>VENDOR NAME</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>AMOUNT</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>DUE AMOUNT</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px]'>₹2,000</td>
                                        <td className='py-2.5 text-[13px]'>₹500</td>
                                        <td className='py-2.5 text-[13px]'>Paid</td>
                                    </tr>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px]'>₹2,000</td>
                                        <td className='py-2.5 text-[13px]'>₹500</td>
                                        <td className='py-2.5 text-[13px]'>Paid</td>
                                    </tr>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px]'>₹2,000</td>
                                        <td className='py-2.5 text-[13px]'>₹500</td>
                                        <td className='py-2.5 text-[13px]'>Paid</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* payments */}
                    <div className='border  rounded-lg overflow-hidden cursor-pointer'>
                        <div className='flex p-2 px-3 justify-between items-center bg-[#f9f9fb]'>
                            <h1 className='font-medium flex gap-0 items-center'> <MdKeyboardArrowRight className='text-gray-500' /> Bill Payments</h1>
                            <button className='flex items-center gap-1 text-sm font-medium'><FiPlus size={12} className='text-white bg-blue-500 rounded-full' /> New</button>
                        </div>
                        <div>
                            <table className='w-full'>
                                <thead>
                                    <tr className='border-t bg-[#f9f9fb]'>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>DATE</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>PAYMENT NUMBER</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>PAYMENT MODE</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>AMOUNT</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>Unused Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px]'>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹2,000</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹500</td>
                                    </tr>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px]'>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹2,000</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹500</td>
                                    </tr>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px] '>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹2,000</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹500</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default VendorProfile