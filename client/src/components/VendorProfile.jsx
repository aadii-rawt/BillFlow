import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { closeVendorProfile } from '../store/slices/stateSlice'
import VendorBillsHistory from './VendorBillsHistory'
import PaymentHistory from './PaymentHistory'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function VendorProfile({ vendor, setVendorProfile }) {
    
    const [tabs, setTabs] = useState("Overview")
    const [activityFeed, setActivityFeed] = useState([])
    const navigate = useNavigate()

    const getActivityFeed = async () => {
        try {
            // Fetch payments
            const paymentRes = await axios.get("http://localhost:3000/payment/vendorPayments", {
                params: { vendorId: vendor?._id },
                headers: { Authorization: localStorage.getItem("authToken") },
            });

            // Fetch bills
            const billRes = await axios.get("http://localhost:3000/bills/vendorBills", {
                params: { vendorId: vendor?._id },
                headers: { Authorization: localStorage.getItem("authToken") },
            });

            // Add a `type` field and `createdAt` timestamp
            const payments = paymentRes.data.map(payment => ({
                ...payment,
                type: "payment",
                createdAt: +payment.createdAt || Date.now(), // If `createdAt` exists in data, use it
            }));

            const bills = billRes.data.map(bill => ({
                ...bill,
                type: "bill",
                createdAt: +bill.createdAt || Date.now(),
            }));

            // Merge and sort by `createdAt` (descending order)
            const activityFeed = [...payments, ...bills].sort((a, b) => b.createdAt - a.createdAt);

            // Update state
            setActivityFeed(activityFeed);
        } catch (error) {
            console.log(error);
        }
    };

    const formatDateTime = (timestamp) => {
        const date = new Date(timestamp);

        // Format date as DD/MM/YY
        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
        });

        // Format time as HH:MM AM/PM
        const formattedTime = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        return <span>{formattedDate} <br/> {formattedTime}</span>;
    };

    const handleNewBill = () => {
        navigate("/bills/new", {
            state: {
                type: "new",
                vendorName: vendor?.displayName,
                vendorID: vendor?._id
            }
        })
    }

    useEffect(() => {
        getActivityFeed()
    }, [vendor])

    return (
        <div className='absolute top-0 right-0 bg-white border-l w-[70%]'>
            <div className='flex justify-between items-center p-4'>
                <div>
                    <h1 className='text-2xl'>{vendor?.displayName}</h1>
                </div>
                <div className='space-x-2 flex items-center'>
                    <Link to={`/bills/edit/${vendor?._id}`} className='px-2.5 py-1 text-[15px] border bg-gray-100 rounded'>Edit</Link>
                    <button onClick={handleNewBill} className='px-2.5 py-1 text-[15px] border bg-blue-500 text-white rounded'>New</button>
                    <button className=' text-red-500 px-4 text-xl' onClick={() => setVendorProfile(null)}><RxCross1 /></button>
                </div>
            </div>
            <div className='px-4 pt-3 pb-2 border-b'>
                <ul className='flex gap-7 text-[15px] text-gray-500'>
                    <li className={`${tabs == "Overview" && "font-medium text-gray-800"} cursor-pointer`} onClick={() => setTabs("Overview")}>Overview</li>
                    <li className={`${tabs == "Transactions" && "font-medium text-gray-800"} cursor-pointer`} onClick={() => setTabs("Transactions")}>Transactions</li>
                </ul>
            </div>
            {tabs === "Overview" ?
                <div className='flex'>
                    <div className='min-w-[35%] max-w-[35%] p-4 border-r'>
                        <div className='flex gap-3'>
                            <div className='w-12 h-12 rounded-md bg-gray-200'></div>
                            <h1 className='font-medium'>{vendor?.displayName}</h1>
                        </div>
                        <Accordion />
                    </div>
                    <div className='p-4 w-full'>
                        <div>
                            <h1 className='font-semibold text-lg'>Payables</h1>
                            <table className='w-full my-3'>
                                <thead>
                                    <tr className='bg-[#f9f9fb] border-y py-2'>
                                        <th className='font-medium text-sm text-gray-500 py-1.5'>Currency</th>
                                        <th className='font-medium text-sm text-gray-500 py-1.5'>Outstanding Payables</th>
                                        <th className='font-medium text-sm text-gray-500 py-1.5'>Unused Credits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b text-center'>
                                        <td className='text-sm py-1.5'>INR- Indian Rupee</td>
                                        <td className='text-sm py-1.5 font-medium    text-blue-500'>₹{vendor?.payableAmount}</td>
                                        <td className='text-sm py-1.5'>₹0</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        {/* activity feed */}
                        <div className='flex items-center space-y-10 justify-center flex-col my-10'>
                            {activityFeed?.map((a, i) => (
                                <div key={i} className="relative flex items-start gap-2">
                                    {/* Timeline Indicator */}
                                    <div className="flex gap-2  items-center">
                                        <div className='text-right'>
                                               <p className='text-xs text-gray-500'>{formatDateTime(a?.createdAt)}</p>  
                                        </div>
                                        <div className="border text-white rounded-full p-1.5 flex items-center justify-center">
                                            <HiOutlineChatBubbleOvalLeftEllipsis size={20} className='text-blue-400' />
                                        </div>
                                        <div className="h-full w-px bg-blue-500"></div>
                                    </div>
                                    {/* Timeline Content */}
                                    {a?.type == "payment" ?
                                        <div className='max-w-[300px]'>
                                            <div className=" bg-gray-100 p-2 rounded-md border">
                                                <h4 className="text-gray-800 font-medium">Payments Made added</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Payment of amount ₹{a?.amountPaid}.00 made and applied for {a?.billNumber} by
                                                    <span className='font-semibold'> Sahil</span>
                                                </p>
                                            </div>
                                        </div> :
                                        <div className='max-w-[300px]'>
                                            <div className=" bg-gray-100 p-2 rounded-md border">
                                                <h4 className="text-gray-800 font-medium">Bill added</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Bill {a?.billNumber} of amount ₹{a?.totalAmount}.00 created
                                                    by <span className='font-semibold'>Sahil</span>
                                                </p>
                                            </div>
                                        </div>}
                                </div>
                            ))}

                            <div className="relative flex items-start gap-2">
                                {/* Timeline Indicator */}
                                <div className="flex gap-2  items-center">
                                    <div className='text-right'>
                                          <p className='text-xs text-gray-500'>{formatDateTime(vendor?.createdAt)}</p>
                                    </div>
                                    <div className="border text-white rounded-full p-1.5 flex items-center justify-center">
                                        <HiOutlineChatBubbleOvalLeftEllipsis size={20} className='text-blue-400' />
                                    </div>
                                    <div className="h-full w-px bg-blue-500"></div>
                                </div>
                                {/* Timeline Content */}
                                <div className='max-w-[300px]'>
                                    <div className=" bg-gray-100 p-2 rounded-md border">
                                        <h4 className="text-gray-800 font-medium">Contact person added</h4>
                                        <p className="text-gray-600 text-sm">
                                            Contact person Aditya has been created  by <span className='font-semibold'>Sahil</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='p-4 space-y-8'>
                    {/* bills */}
                    <VendorBillsHistory vendor={vendor}  handleNewBill={handleNewBill} />

                    {/* payments */}
                    {/* <div className='border  rounded-lg overflow-hidden cursor-pointer'>
                        <div className='flex p-2 px-3 justify-between items-center bg-[#f9f9fb]'>
                            <h1 className='font-medium flex gap-0 items-center'> <MdKeyboardArrowRight className='text-gray-500' /> Bill Payments</h1>
                            <button className='flex items-center gap-1 text-sm font-medium'><FiPlus size={12} className='text-white bg-blue-500 rounded-full' /> New</button>
                        </div>
                        <div>
                            <table className='w-full'>
                                <thead>
                                    <tr className='border-t bg-[#f9f9fb]'>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>DATE</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>PAYMENT NUMBER</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>PAYMENT MODE</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>AMOUNT</th>
                                        <th className='py-1 font-medium text-[13px] text-gray-500'>Unused Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px]'>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹2,000</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹500</td>
                                    </tr>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px]'>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹2,000</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹500</td>
                                    </tr>
                                    <tr className='border-t text-center'>
                                        <td className='py-2.5 text-[13px]'>31/12/24</td>
                                        <td className='py-2.5 text-[13px] '>#4563</td>
                                        <td className='py-2.5 text-[13px]'>aditya</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹2,000</td>
                                        <td className='py-2.5 text-[13px] font-medium text-blue-500'>₹500</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                    <PaymentHistory vendor={vendor} />
                </div>
            }
        </div>
    )
}

export default VendorProfile