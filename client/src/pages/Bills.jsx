import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Bills() {
    const bills = useSelector((state) => state.billSlice.bills)
    console.log(bills);

    return (
        <div className=''>
            <div className=' p-4 flex items-center justify-between'>
                <div>
                    <button className='text-2xl font-medium'>All Bills</button>
                </div>
                <div>
                    <Link to="/bills/new" className='bg-blue-500 px-3 py-1.5 rounded-md text-white flex items-center justify-center gap-1'> <FiPlus />New</Link>
                </div>
            </div>
            <div>
                <table className='w-full '>
                    <thead>
                        <tr className='bg-gray-100 border-y text-gray-500 !font-normal'>
                            <th className='font-medium text-sm py-2'>DATE</th>
                            <th className='font-medium text-sm py-2'>BILL# </th>
                            <th className='font-medium text-sm py-2'>VENDOR NAME</th>
                            <th className='font-medium text-sm py-2'>STATUS</th>
                            <th className='font-medium text-sm py-2'>DUE DATE</th>
                            <th className='font-medium text-sm py-2'>AMOUNT</th>
                            <th className='font-medium text-sm py-2'>BALANCE DUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills?.map((data) => (
                            <tr className='text-sm text-center border-b'>
                                <td className='py-2'>{data?.date}</td>
                                <td className='py-2'>{data?.billNumber}</td>
                                <td className='py-2'>{data?.vendorName}</td>
                                <td className='py-2'>{data?.isPaid}</td>
                                <td className='py-2'>{data?.dueDate}</td>
                                <td className='py-2'>₹ 2300</td>
                                <td className='py-2'>₹ 76</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bills