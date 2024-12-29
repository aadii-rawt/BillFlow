import React from 'react'

function NewVendor() {
    return (
        <div className='relative'>
            <div className='p-4 border-b'>
                <h1 className='text-2xl'>New Vendor</h1>
            </div>
            {/* ------- new vendor form------------ */}
            <div className='py-5 px-4 space-y-5 text-[15.5px]'>
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='text-[15.5px]'>Primary Contact</label>
                    <div className='flex gap-3'>
                        {/* <input type="text" placeholder='Salutation' className='border rounded-md outline-none px-2 py-1 max-w-40 hover:border hover:border-blue-500 duration-500' /> */}
                        <select name="" placeholder="Salutation" className='border rounded-md outline-none px-2 py-1 max-w-40 min-w-40 hover:border hover:border-blue-500 duration-500' >
                            <option value="">Mr.</option>
                            <option value="">Mrs.</option>
                            <option value="">Ms.</option>
                            <option value="">Miss.</option>
                            <option value="">Dr.</option>
                        </select>
                        <input type="text" placeholder='First Name' className='border rounded-md outline-none px-2 py-1 max-w-40 hover:border hover:border-blue-500 duration-500' />
                        <input type="text" placeholder='Last Name' className='border rounded-md outline-none px-2 py-1 max-w-40 hover:border hover:border-blue-500 duration-500' />
                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='text-[15.5px]'>Company Name</label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='' className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
                <div className='flex items-center gap-11'>
                    <label htmlFor="" className='text-[15.5px]'>Display Name <span className='text-red-500'>*</span></label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='' className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
                <div className='flex items-center gap-14'>
                    <label htmlFor="" className='text-[15.5px]'>Email Address</label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='' className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
                <div className='flex items-center gap-20'>
                    <label htmlFor="" className='text-[15.5px]'>Phone</label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='' className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
            </div>

            <div className='border-t p-4 flex  gap-3 fixed bottom-0 w-full'>
                <button className='bg-blue-500 text-white px-2.5 py-1  rounded-md'>Save</button>
                <button className='bg-gray-100 px-2.5 py-1  rounded-md border'>Cancel</button>
            </div>
        </div>
    )
}

export default NewVendor