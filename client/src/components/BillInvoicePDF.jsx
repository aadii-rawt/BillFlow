import React from 'react'
import { useSelector } from 'react-redux';

function BillInvoicePDF({ data }) {

    console.log(data);
    
    const user = useSelector(state => state.stateSlice.user)
    const calculateSubtotal = () => {
        return data?.items?.reduce((subtotal, item) => subtotal + parseInt(item.amount), 0)
    };

    return (
        <div id='invoiceBill' className='w-full h-full'>
            <div className="max-w-4xl mx-auto  p-6">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-4">
                    {/* Logo */}
                    <div>
                        <img
                            src="/img/image.png" // Replace with your logo URL
                            alt="Logo"
                            className="w-full max-w-[100px]"
                        />
                    </div>
                    {/* Invoice Details */}
                    <div className="text-right">
                        <h1 className="text-3xl font-semibold">BILL</h1>
                        <p className="font-medium my-1">{data?.billNumber}</p>
                        {/* <p className="text-xl font-bold text-pink-600">Balance Due</p>
                        <p className="text-xl font-bold text-pink-600">₹2,000.00</p> */}
                    </div>
                </div>

                {/* Address Section */}


                {/* Billing From Section */}
                <div className="mb-6">
                    <h2 className="font-semibold text-lg">{user?.companyName}</h2>
                    <p>{user?.companyAddress}</p>
                    <p>{user?.email}</p>
                </div>
                <div className="grid grid-cols-2 items-end gap-4 mb-6">
                    <div>
                        <h2 className="font-semibold">Bill From</h2>
                        <p className='font-semibold text-blue-500'>{data?.vendorName}</p>
                    </div>
                    <div className="text-right space-y-2 text-sm">
                        <p>
                            <span className="font-bold">Bill Date: </span>{data?.date}
                        </p>
                        <p>
                            <span className="font-bold">Due Date:</span> {data?.dueDate}
                        </p>
                        <p>
                            <span className="font-bold">Terms:</span> Due On Receipt
                        </p>
                    </div>
                </div>

                <div>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-slate-800 text-white font-medium'>
                                <th className='font-medium py-1'>Item</th>
                                <th className='font-medium py-1'>Qty</th>
                                <th className='font-medium py-1'>Rate</th>
                                <th className='font-medium py-1'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.items && data?.items.map((item) => (
                                <tr className='text-center'>
                                    <td>{item?.description}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.rate}</td>
                                    <td>{item?.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Subtotal Section */}
                <div className="text-right space-y-3 mt-10">
                    <div className="flex justify-end gap-10 items-center">
                        <span>Sub Total</span>
                        <span>₹{calculateSubtotal()}</span>
                    </div>
                    <div className="flex justify-end gap-10 items-center">
                        <span>Total</span>
                        <span>₹ {data?.totalAmount}</span>
                    </div>
                    <div className="flex justify-end gap-10 items-center  text-pink-600 font-bold mt-2">
                        <span>Balance Due</span>
                        <span>₹{data?.totalDueAmount}</span>
                    </div>
                </div>

                {/* Footer Section
                <div className="mt-14">
                    <p>Authorized Signature ___________________________</p>
                </div> */}
            </div>
        </div>
    )
}

export default BillInvoicePDF