import React, { useEffect, useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { closeBillPreview } from '../store/slices/stateSlice';
import { useDispatch, useSelector } from 'react-redux';
import BillInvoicePDF from './BillInvoicePDF';
import html2pdf from "html2pdf.js";
import BillPayment from './BillPayment';
import axios from 'axios';

function BillPreview({ getAllBills, setBillPreview, bill }) {
    const dispatch = useDispatch()
    // const bill = useSelector(state => state.stateSlice?.billPreview)
    const [payment, setPayment] = useState(false)
    const [billDetails, setBillDetails] = useState({})
    const downloadPDF = async () => {
        const element = document.querySelector("#invoiceBill");
        html2pdf(element, {
            margin: 10,
            filename: '#234567.pdf',
        })
    }

    const getBillDetails = async () => {
        try {

            const res = await axios.get("http://localhost:3000/bills/id", {
                params: {
                    billId: bill?._id
                },
                headers: {
                    Authorization: localStorage.getItem("authToken")
                },
            })
            setBillDetails(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBillDetails()
        // console.log("helo");
        
    },[])

    return (
        <div className='absolute top-0 right-0 bg-white border-l w-[70%] h-fit'>
            {!payment ?
                <div>
                    <div className='flex justify-between items-center p-[19px] border-b'>
                        <div>
                            <h1 className='text-xl'>{bill?.billNumber}</h1>
                        </div>
                        <div className=''>
                            <button className='text-red-500 text-2xl' onClick={() => setBillPreview(null)}><RxCross2 /></button>
                        </div>
                    </div>
                    <div className='flex justify-start bg-[#f7f7f7] border-b'>
                        <div className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'><MdOutlineEdit /> Edit</div>
                        <div onClick={downloadPDF} className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'><BsFileEarmarkPdf /> PDF</div>
                        <div onClick={() => setPayment(true)} className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'>Record Payment</div>
                        <div className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'><HiDotsVertical /></div>
                    </div>
                    {/* pdf section */}
                    <div className='m-5 shadow border'>
                        <BillInvoicePDF data={billDetails} />
                    </div>
                </div> :
                <BillPayment getAllBills={getAllBills} getBillDetails={getBillDetails} setPayment={setPayment} bill={bill} />
            }
        </div>
    )
}

export default BillPreview