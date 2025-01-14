import React from 'react'

function BillInvoicePDF() {
    return (
        //     <div className='w-full h-full shadow '>
        //         {/* <div className='flex justify-between'>
        // <div>
        //     <img src="" alt="" />
        // </div>
        // <div>
        //     <h1>BILL</h1>
        //     <h1>Bill #4567890</h1>
        // </div>
        // </div> */}
        //         <div className="max-w-4xl mx-auto border p-6 shadow-lg">
        //             {/* Header Section */}
        //             <div className="flex justify-between items-center mb-4">
        //                 {/* Logo */}
        //                 <div>
        //                     <img
        //                         src="https://via.placeholder.com/50" // Replace with your logo URL
        //                         alt="Logo"
        //                         className="w-16 h-16"
        //                     />
        //                 </div>
        //                 {/* Invoice Details */}
        //                 <div className="text-right">
        //                     <h1 className="text-2xl font-bold">BILL</h1>
        //                     <p className="text-sm">Bill# #4567890</p>
        //                     <p className="text-xl font-bold text-pink-600">Balance Due</p>
        //                     <p className="text-xl font-bold text-pink-600">₹2,000.00</p>
        //                 </div>
        //             </div>

        //             {/* Address Section */}
        //             <div className="grid grid-cols-2 gap-4 text-sm mb-6">
        //                 <div>
        //                     <h2 className="font-bold">Aditya</h2>
        //                     <p>Delhi</p>
        //                     <p>India</p>
        //                     <p>rawataditi600@gmail.com</p>
        //                 </div>
        //                 <div className="text-right">
        //                     <p>
        //                         <span className="font-bold">Bill Date:</span> 31/12/2024
        //                     </p>
        //                     <p>
        //                         <span className="font-bold">Due Date:</span> 31/12/2024
        //                     </p>
        //                     <p>
        //                         <span className="font-bold">Terms:</span> Due On Receipt
        //                     </p>
        //                 </div>
        //             </div>

        //             {/* Billing From Section */}
        //             <div className="mb-6">
        //                 <h2 className="font-bold">Bill From</h2>
        //                 <p>Aditya</p>
        //             </div>

        //             {/* Item Table */}
        //             <div className="border rounded-lg overflow-hidden">
        //                 <div className="grid grid-cols-4 bg-gray-800 text-white p-2">
        //                     <div className="col-span-2">Item & Description</div>
        //                     <div>Qty</div>
        //                     <div className="text-right">Rate</div>
        //                     <div className="text-right">Amount</div>
        //                 </div>
        //                 <div className="grid grid-cols-4 p-2 border-b">
        //                     <div className="col-span-2">j</div>
        //                     <div>1.00</div>
        //                     <div className="text-right">₹2,000.00</div>
        //                     <div className="text-right">₹2,000.00</div>
        //                 </div>
        //             </div>

        //             {/* Subtotal Section */}
        //             <div className="text-right mt-4">
        //                 <div className="flex justify-between items-center">
        //                     <span>Sub Total</span>
        //                     <span>₹2,000.00</span>
        //                 </div>
        //                 <div className="flex justify-between items-center">
        //                     <span>Total</span>
        //                     <span>₹2,000.00</span>
        //                 </div>
        //                 <div className="flex justify-between items-center text-pink-600 font-bold mt-2">
        //                     <span>Balance Due</span>
        //                     <span>₹2,000.00</span>
        //                 </div>
        //             </div>

        //             {/* Footer Section */}
        //             <div className="mt-8">
        //                 <p>Authorized Signature ___________________________</p>
        //             </div>
        //         </div>
        //     </div>

        <div id="invoice" className="bg-white min-w-[600px] p-5 shadow-lg  relative overflow-hidden ">
            <div className="z-50 relative flex justify-between items-center">
                <div>
                    <h1 className="uppercase text-4xl font-bold text-white">Bill</h1>
                    <h1 className=" text-white ">Adi</h1>
                    <div>
                        <h1 className=" text-white ">Delhi</h1>
                        <h1 className=" text-white ">Delhi 110062</h1>
                    </div>
                    <div className="my-2 text-white ">
                        {/* {type === "Invoice" ? */}
                            {/* <h1>Invoice No: {data?.invoiceNumber}</h1> : */}
                            <h1>Bill No: #23456</h1>
                        {/* } */}
                        <h1>20/02/2024</h1>
                    </div>
                </div>
                <div className=" max-w-36">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="text-right">
                <h1 className=" font-bold ">Bill to:</h1>
                <h1 className="text-xl font-bold capitalize">Aditya</h1>
                <p className="text-gray-600 text-sm">adi@t.com</p>
                <p className="text-gray-600 text-sm">Pune</p>
                <h1 className="text-gray-400 text-sm"> Generated by  <span className="text-blue-700 font-medium">Reduxpay</span></h1>
            </div>
            {/* {data?.dueAmount > 0 && */}
                <div className="bg-yellow-200/70 border font-medium !border-amber-500/50 p-2  px-4  mt-4 text-right">
                    <h1>Due Amount: <span className="font-semibold text-xl">₹357</span> | Due Date: <span className="font-semibold">20/23/2024</span></h1>
                </div>
            {/* } */}
            <div>
                <table className="w-full px-2 mt-3">
                    <thead>
                        <tr className="bg-[#142C6F] text-white text-center">
                            <th className="p-2 ">Item</th>
                            <th className="p-2 ">Quantity</th>
                            <th className="p-2 ">Rate</th>
                            <th className="p-2 ">Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* {data?.items?.map((item, index) => ( */}
                            <tr  className={` bg-gray-200 `}>
                                <td className="p-2 text-center">
                                    phone
                                </td>
                                <td className="p-2 text-center">
                                    {/* {item.quantity || 0} */}
                                    2
                                </td>
                                <td className="p-2 text-center">
                                    {/* ₹{formatCurrency(item?.rate) || "0.00"} */}
                                    3499
                                </td>
                                <td className="p-2 text-center">
                                    {/* ₹{formatCurrency(item?.amount) || "0.00"} */}
                                    45678
                                </td>
                            </tr>
                        {/* ))} */}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-5">
                <div>
                    {/* {data?.note &&
                        <>  <p className="text-gray-500 text-sm">Note:</p>
                            <p className="text-sm text-gray-700">{data?.note}</p>
                        </>

                    } */}
                </div>

                <div className="font-semibold text-lg min-w-52  mb-60">
                    <div className="py-2 px-3 flex justify-between"><span>Subtotal</span> <span>₹3634</span></div>
                    <div className="py-2 px-3 flex justify-between bg-gray-200"><span>Tax</span> <span> 0%</span></div>
                    <div className="py-2 px-3 flex justify-between bg-[#142C6F] text-white"><span>Total</span> <span>₹387</span></div>
                    <div className="py-2 px-3 flex justify-between bg-gray-200"><span>Due</span> <span> ₹38932</span></div>
                </div>
            </div>


            <div className="bg-[#FD9900] w-full h-40 absolute -top-20 -left-20 z-10 -rotate-12"></div>
            <div className="bg-[#142C6F] w-full h-60 absolute -top-20 left-2 z-10 -rotate-12"></div>
            <div className="bg-[#FD9900] w-[60%] h-12 absolute top-28 -right-5 z-10 -rotate-12"></div>
            <div className="bg-[#FD9900] w-[60%] h-12 absolute -bottom-5 right-52 z-10 -rotate-[10deg]"></div>
            <div className="bg-[#142C6F] w-[80%] h-52 absolute -bottom-44 -right-10 z-10 -rotate-[10deg]"></div>

        </div>
    )
}

export default BillInvoicePDF