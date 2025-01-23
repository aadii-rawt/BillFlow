import axios from 'axios'
import React, { useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'

function VendorBillsHistory({ vendor }) {

    console.log(vendor);

    const getBills = async () => {
        try {
            const res = await axios.get("http://localhost:3000/bills/vendorBills", {
                params: {
                    vendorId: vendor?._id
                },
                headers: {
                    Authorization: localStorage.getItem("authToken")
                },
            })
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getBills()
    }, [])
    return (
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
    )
}

export default VendorBillsHistory