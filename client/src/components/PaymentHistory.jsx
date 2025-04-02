import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'

function PaymentHistory({ vendor }) {
    const [payments, setPayments] = useState([])
    const getPayments = async () => {
        try {
            const res = await axios.get("https://billflow.onrender.com/payment/vendorPayments", {
                params: {
                    vendorId: vendor?._id,
                },
                headers: {
                    Authorization: localStorage.getItem("authToken")
                },
            })
            setPayments(res.data)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getPayments()
    }, [vendor])

    return (
        <div className='border  rounded-lg overflow-hidden cursor-pointer'>
            <div className='flex p-2 px-3 justify-between items-center bg-[#f9f9fb]'>
                <h1 className='font-medium flex gap-0 items-center'> <MdKeyboardArrowRight className='text-gray-500' /> Bill Payments</h1>
                {/* <button className='flex items-center gap-1 text-sm font-medium'><FiPlus size={12} className='text-white bg-blue-500 rounded-full' /> New</button> */}
            </div>
            <div>
                <table className='w-full'>
                    <thead>
                        <tr className='border-t bg-[#f9f9fb]'>
                            <th className='py-1 font-medium text-[13px] text-gray-500'>DATE</th>
                            <th className='py-1 font-medium text-[13px] text-gray-500'>Bill NUMBER</th>
                            <th className='py-1 font-medium text-[13px] text-gray-500'>PAYMENT MODE</th>
                            <th className='py-1 font-medium text-[13px] text-gray-500'>AMOUNT</th>
                            <th className='py-1 font-medium text-[13px] text-gray-500'>Unused Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments?.map((p) => (
                            <tr className='border-t text-center'>
                                <td className='py-2.5 text-[13px]'>{p?.paymentDate}</td>
                                <td className='py-2.5 text-[13px]'>{p?.billNumber}</td>
                                <td className='py-2.5 text-[13px]'>{p?.paymentMethod}</td>
                                <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹{p?.amountPaid}</td>
                                <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹500</td>
                            </tr>
                        ))}
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
    )
}

export default PaymentHistory