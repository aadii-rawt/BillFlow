import React from 'react'
import { FiPlus } from 'react-icons/fi'

function Invoices() {
    return (
            <div className=''>
                <div className=' p-4 flex items-center justify-between'>
                    <div>
                        <button className='text-2xl font-medium'>All Invoices</button>
                    </div>
                    <div>
                        <button className='bg-blue-500 px-3 py-1.5 rounded-md text-white flex items-center justify-center gap-1'> <FiPlus />New</button>
                    </div>
                </div>
                <div>
                <table className='bg-gray-100 w-full border-y'>
                      <thead>
                          <tr className='text-gray-500 !font-normal'>
                              <th className='font-medium text-sm py-2'>DATE</th>
                              <th className='font-medium text-sm py-2'>INVOICE#</th>
                              <th className='font-medium text-sm py-2'>VENDOR NAME</th>
                              <th className='font-medium text-sm py-2'>STATUS</th>
                              <th className='font-medium text-sm py-2'>DUE DATE</th>
                              <th className='font-medium text-sm py-2'>AMOUNT</th>
                              <th className='font-medium text-sm py-2'>BALANCE DUE</th>
                          </tr>
                      </thead>
                  </table>
                </div>
            </div>
        )
}

export default Invoices