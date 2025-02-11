import React, { useState } from 'react'
import BillPreview from './BillPreview';
import axios from 'axios';

function BillPayment({ setPayment, bill,getAllBills,getBillDetails }) {
    console.log(bill);
    
    const [paymentData, setPaymentDate] = useState({
        paymentId: crypto.randomUUID(),
        billId: bill?.billId,
        vendorId: bill?.vendorId,
        billNumber : bill?.billNumber,
        amountPaid: bill?.totalDueAmount || 0,
        paymentMethod: "",
        paymentDate: "",
        note: "",
        createdAt: "",
    })

    const handleDataChange = (e) => {
        const { name, value } = e.target
        setPaymentDate((prev) => ({ ...prev, [name]: value }))
    }

    const handlePayment = async (e) => {
        e.preventDefault()

        console.log(paymentData);

        try {
            const res = await axios.post("http://localhost:3000/payment//createPayment", { ...paymentData, createdAt : Date.now() }, {
                headers: {
                    Authorization: localStorage.getItem("authToken")
                }
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setPayment(false)
            getAllBills()
            getBillDetails()
        }
    }

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
            <form onSubmit={handlePayment}>
                <div className='p-4'>
                    <div className='flex flex-col gap-1 '>
                        <label htmlFor="amount" className='text-[15px] text-red-600'>Payment Made </label>
                        <div>
                            <input type="text"
                                name='amountPaid'
                                value={paymentData?.amountPaid}
                                onChange={handleDataChange}
                                className='border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 '>
                        <label htmlFor="amount" className='text-[15px]'>Payment Mode </label>
                        <div>
                            {/* <input type="text" className='border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' /> */}
                            <select
                                name='paymentMethod'
                                value={paymentData?.paymentMethod}
                                onChange={handleDataChange}
                                className='border-gray-500/50 border min-w-[200px] hover:border-blue-500 outline-none px-2 py-1 rounded-md'>
                                <option value="Cash">Cash</option>
                                <option value="UPI">UPI</option>
                                <option value="Bank">Bank</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor="amount" className='text-[15px] text-red-600'>Payment Date*</label>
                            <div>
                                <input type="date"
                                    name='paymentDate'
                                    value={paymentData?.paymentDate}
                                    onChange={handleDataChange}
                                    className='min-w-[200px] border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' />
                            </div>
                        </div>
                        {/* <div className='flex flex-col gap-1 '>
                            <label htmlFor="amount" className='text-[15px] text-red-600'>Payment Made </label>
                            <div>
                                <input type="text"
                                    value={paymentData?.amountPaid}
                                    onChange={(e) => setPaymentDate(e.target.value)}
                                    className='border-gray-500/50 border hover:border-blue-500 outline-none px-2 py-1 rounded-md' />
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className={`border-t p-4 flex gap-3 bottom-0 w-full fixed`}>
                    <button type='submit' className='bg-blue-500 text-white px-2.5 py-1  rounded-md'>Save</button>

                    <button onClick={() => setPayment(false)} className='bg-gray-100 px-2.5 py-1  rounded-md border' >Cancel</button>
                    {/* } */}
                </div>
            </form>
        </div>
    )
}

export default BillPayment
