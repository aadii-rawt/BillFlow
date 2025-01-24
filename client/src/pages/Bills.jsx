import React, { useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setBillPreview } from '../store/slices/stateSlice'
import BillPreview from '../components/BillPreview'
import axios from 'axios'
import { setBills } from '../store/slices/billSlice'

function Bills() {
    const bills = useSelector((state) => state.billSlice.bills)
    const billPreview = useSelector((state) => state.stateSlice.billPreview)
    const dispatch = useDispatch()

    const getAllBills = async () => {
        try {
            const res = await axios.get("http://localhost:3000/bills/userBills", {
                headers: {
                    Authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data
            console.log(data);
             
            dispatch(setBills(data))
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        getAllBills()
    }, [])

    return (
        <div className='relative'>
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
                            <tr className='text-sm text-center border-b cursor-pointer' onClick={() => dispatch(setBillPreview(data))}>
                                <td className='py-2'>{data?.date}</td>
                                <td className='py-2 text-blue-500 font-medium'>{data?.billNumber}</td>
                                <td className='py-2'>{data?.vendorName}</td>
                                <td className='py-2'>{data?.isPaid}</td>
                                <td className='py-2'>{data?.dueDate}</td>
                                <td className='py-2'>₹ {data?.totalAmount}</td>
                                <td className='py-2'>₹ 76</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {billPreview && <BillPreview />}
        </div>
    )
}

export default Bills