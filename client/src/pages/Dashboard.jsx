import React from 'react'
import { FiPlus, FiPlusCircle } from "react-icons/fi";
import AreaChart from '../components/AreaChart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector((state) => state?.stateSlice?.user);
  console.log(user);
  
  return (
    <div className=''>
      <div className='px-4 py-8 border-b' style={{ backgroundImage: "url('./img/dashboard-banner.svg')" }}>
        <div className='flex gap-2'>
          <div className='w-14 h-14 bg-gray-300 rounded-lg'></div>
          <div>
            <h1 className='font-medium text-xl'>Hello, {user?.companyName}</h1>
            <h1 className='text-gray-600'>{user?.companyName}</h1>
          </div>
        </div>
      </div>

      {/* total receivable and payable */}
      <div className='my-8 px-4 flex gap-5'>
        <div className='w-full border rounded-lg overflow-hidden'>
          <div className='flex items-center justify-between bg-gray-100 py-3 px-5 border-b'>
            <h1 className='text-xl'>Total Receivables</h1>
            <button className='flex items-center gap-1.5'><FiPlus className='text-white bg-blue-500 rounded-full' /> New</button>
          </div>
          <div className='flex px-5 py-4'>
            <div className='w-1/2 border-r'>
              <h1 className='text-blue-500 text-sm '>CURRENT</h1>
              <h1 className='text-2xl my-1'>₹0.00</h1>
            </div>
            <div className='px-5'>
              <h1 className='text-red-400 text-sm '>OVERDUE</h1>
              <h1 className='text-2xl my-1'>₹0.00</h1>
            </div>
          </div>
        </div>
        <div className='w-full border rounded-lg overflow-hidden'>
          <div className='flex items-center justify-between bg-gray-100 py-3 px-5 border-b'>
            <h1 className='text-xl'>Total Payables</h1>
            <Link to='/bills/new' className='flex items-center gap-1.5'><FiPlus className='text-white bg-blue-500 rounded-full' /> New</Link>
          </div>
          <div className='flex px-5 py-4'>
            <div className='w-1/2 border-r'>
              <h1 className='text-blue-500 text-sm '>CURRENT</h1>
              <h1 className='text-2xl my-1'>₹0.00</h1>
            </div>
            <div className='px-5'>
              <h1 className='text-red-400 text-sm '>OVERDUE</h1>
              <h1 className='text-2xl my-1'>₹0.00</h1>
            </div>
          </div>
        </div>
      </div>

      {/* insights*/}
      <div className='my-8 px-4 flex gap-5'>
        <div className='w-full border rounded-lg overflow-hidden'>
          <div className='flex items-center justify-between bg-gray-100 py-3 px-5 border-b'>
            <h1 className='text-xl'>Cash Flow</h1>
            <button>Last 6 months</button>
          </div>
          <div className='flex p-4 px-6'>
            <AreaChart />
            <div className='text-right space-y-5 w-[20%] border-l'>
              <div>
                <p className='text-gray-400 text-[15px]'>Cash on 01/04/2024</p>
                <h1 className='text-2xl'>₹0.00</h1>
              </div>
              <div>
                <p className='text-green-500 text-[15px]'>Incoming</p>
                <h1 className='text-2xl'>₹0.00</h1>
              </div>
              <div>
                <p className='text-red-400 text-[15px]'>Outgoing</p>
                <h1 className='text-2xl'>₹0.00</h1>
              </div>
              <div>
                <p className='text-blue-400 text-[15px]'>Cash on 01/04/2024</p>
                <h1 className='text-2xl'>₹0.00</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard