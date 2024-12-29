import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Vendors() {
    return (
        <div className=''>
            <div className=' p-4 flex items-center justify-between'>
                <div>
                    <button className='text-2xl font-medium'>All Vendors</button>
                </div>
                <div>
                    <Link to="/vendors/new" className='bg-blue-500 px-3 py-1.5 rounded-md text-white flex items-center justify-center gap-1'> <FiPlus />New</Link>
                </div>
            </div>
            <div>
                <table className='bg-gray-100 w-full border-y'>
                    <thead>
                        <tr className='text-gray-500 !font-normal'>
                            <th className='font-medium text-sm py-2'>NAME</th>
                            <th className='font-medium text-sm py-2'>COMPANY NAME</th>
                            <th className='font-medium text-sm py-2'>COMPANY NAME</th>
                            <th className='font-medium text-sm py-2'>EMAIL</th>
                            <th className='font-medium text-sm py-2'>WORK PHONE</th>
                            <th className='font-medium text-sm py-2'>PAYABLE</th>
                            <th className='font-medium text-sm py-2'>UNUSED CREDITS</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Vendors