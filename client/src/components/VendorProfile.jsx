import React from 'react'

function VendorProfile({setVendorProfile}) {
  return (
    <div className='absolute top-0 right-0 bg-white border-l w-[70%]'>
        <div className='flex justify-between items-center p-4'>
            <div>
                <h1 className='text-2xl'>Aditya</h1>
            </div>
            <div className='space-x-2'>
                <button className='px-2.5 py-1 text-[15px] border bg-gray-100 rounded'>Edit</button>
                <button className='px-2.5 py-1 text-[15px] border bg-blue-500 text-white rounded'>New</button>
                <button className='px-2.5 py-1 text-[15px] border bg-gray-100 rounded' onClick={() => setVendorProfile(false)}>X</button>
            </div>
        </div>
    </div>
  )
}

export default VendorProfile