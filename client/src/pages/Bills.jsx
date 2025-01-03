import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Bills() {
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
                  <table className='bg-gray-100 w-full border-y'>
                      <thead>
                          <tr className='text-gray-500 !font-normal'>
                              <th className='font-medium text-sm py-2'>DATE</th>
                              <th className='font-medium text-sm py-2'>BILL# </th>
                              <th className='font-medium text-sm py-2'>VENDOR NAME</th>
                              <th className='font-medium text-sm py-2'>STATUS</th>
                              <th className='font-medium text-sm py-2'>DUE DATE</th>
                              <th className='font-medium text-sm py-2'>AMOUNT</th>
                              <th className='font-medium text-sm py-2'>BALANCE DUE</th>
                          </tr>
                      </thead>
                      {/* <tbody>
                        <tr>
                        <th className='font-medium text-sm py-2'>DATE</th>
                              <td className='py-2'>BILL# </td>
                              <td className='py-2'>VENDOR NAME</td>
                              <td className='py-2'>STATUS</td>
                              <td className='py-2'>DUE DATE</td>
                              <td className='py-2'>AMOUNT</td>
                              <td className='py-2'>BALANCE DUE</td>
                        </tr>
                      </tbody> */}
                  </table>
              </div>
          </div>
      )
}

export default Bills