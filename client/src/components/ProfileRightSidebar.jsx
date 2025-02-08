import React from 'react'

function ProfileRightSidebar() {
    return (
        <div className='absolute flex justify-end h-full top-16 right-0 bg-black/50 border-l w-full'>

            <div className='w-[25%] bg-[#F9F9FB]'>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex gap-2'>
                        <div className='w-12 h-12 bg-red-500 rounded-md'>
                        </div>
                        <div>
                            <h1 className='font-medium'>Aditya Rawat</h1>
                            <p className='text-gray-500'>rawatadii060@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileRightSidebar