import React from 'react'

function BillInvoicePDF() {
    return (
        <div id='invoiceBill' className='w-full h-full shadow '>
            <div className="max-w-4xl mx-auto border p-6 shadow-lg">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-4">
                    {/* Logo */}
                    <div>
                        {/* <img
                            src="https://via.placeholder.com/50" // Replace with your logo URL
                            alt="Logo"
                            className="w-16 h-16"
                        /> */}
                    </div>
                    {/* Invoice Details */}
                    <div className="text-right">
                        <h1 className="text-2xl font-bold">BILL</h1>
                        <p className="text-sm">Bill# #4567890</p>
                        <p className="text-xl font-bold text-pink-600">Balance Due</p>
                        <p className="text-xl font-bold text-pink-600">₹2,000.00</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div>
                        <h2 className="font-bold">Aditya</h2>
                        <p>Delhi</p>
                        <p>India</p>
                        <p>rawataditi600@gmail.com</p>
                    </div>
                    <div className="text-right">
                        <p>
                            <span className="font-bold">Bill Date:</span> 31/12/2024
                        </p>
                        <p>
                            <span className="font-bold">Due Date:</span> 31/12/2024
                        </p>
                        <p>
                            <span className="font-bold">Terms:</span> Due On Receipt
                        </p>
                    </div>
                </div>

                {/* Billing From Section */}
                <div className="mb-6">
                    <h2 className="font-bold">Bill From</h2>
                    <p>Aditya</p>
                </div>

                {/* Item Table */}
                {/* <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 bg-gray-800 text-white p-2">
                        <div className="col-span-2">Item</div>
                        <div className="text-right">Item</div>
                        <div className="text-right">Rate</div>
                        <div className="text-right">Amount</div>
                    </div>
                    <div className="grid grid-cols-4 p-2 border-b">
                        <div className="col-span-2">j</div>
                        <div>1.00</div>
                        <div className="text-right">₹2,000.00</div>
                        <div className="text-right">₹2,000.00</div>
                    </div>
                </div> */}
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
                            <tr className='text-center'>
                                <td>Phone</td>
                                <td>1</td>
                                <td>200</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Subtotal Section */}
                <div className="text-right mt-4">
                    <div className="flex justify-between items-center">
                        <span>Sub Total</span>
                        <span>₹2,000.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Total</span>
                        <span>₹2,000.00</span>
                    </div>
                    <div className="flex justify-between items-center text-pink-600 font-bold mt-2">
                        <span>Balance Due</span>
                        <span>₹2,000.00</span>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-8">
                    <p>Authorized Signature ___________________________</p>
                </div>
            </div>
        </div>
    )
}

export default BillInvoicePDF