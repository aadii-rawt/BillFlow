import React from 'react'

function BillPayment({setPayment}) {
    return (
        <div className='min-h-screen border-l'>
            <div className='flex justify-between items-center p-[19px] border-b '>
                <div>
                    <h1 className='text-xl'>#23456y7u8</h1>
                </div>
                <div className=''>
                    {/* <button className='text-red-500 text-2xl' onClick={() => dispatch(closeBillPreview())}><RxCross2 /></button> */}
                </div>
            </div>
            <div className='p-4'>
                <form action="">
                    <div className='flex flex-col gap-1 '>
                        <label htmlFor="amount" className='text-[15px] text-red-600'>Payment Made </label>
                        <div>
                            <input type="text" className='border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 '>
                        <label htmlFor="amount" className='text-[15px]'>Payment Mode </label>
                        <div>
                            {/* <input type="text" className='border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' /> */}
                            <select className='border-gray-500/50 border min-w-[200px] hover:border-blue-500 outline-none px-2 py-1 rounded-md'>
                                <option value="">Cash</option>
                                <option value="">UPI</option>
                                <option value="">Bank</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor="amount" className='text-[15px] text-red-600'>Payment Date*</label>
                            <div>
                                <input type="date" className='min-w-[200px] border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor="amount" className='text-[15px] text-red-600'>Payment Made </label>
                            <div>
                                <input type="text" className='border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className={`border-t p-4 flex gap-3 bottom-0 w-full fixed`}>
                <button className='bg-blue-500 text-white px-2.5 py-1  rounded-md'>Save</button>

                <button onClick={() => setPayment(false)} className='bg-gray-100 px-2.5 py-1  rounded-md border' >Cancel</button>
                {/* } */}
            </div>
        </div>
    )
}

export default BillPayment