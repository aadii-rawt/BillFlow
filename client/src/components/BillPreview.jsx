import React from 'react'
import { MdOutlineEdit } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { closeBillPreview } from '../store/slices/stateSlice';
import { useDispatch } from 'react-redux';
import BillInvoicePDF from './BillInvoicePDF';
import html2pdf from "html2pdf.js";

function BillPreview() {
    const dispatch = useDispatch()

    const downloadPDF = async () => {
        const element = document.querySelector("#invoiceBill");
        html2pdf(element, {
            // margin : 10,
            filename: '#234567.pdf',
        })

    }
    return (
        <div className='absolute top-0 right-0 bg-white border-l w-[70%]'>
            <div className='flex justify-between items-center p-[19px] border-b'>
                <div>
                    <h1 className='text-xl'>#2345678</h1>
                </div>
                <div className=''>
                    <button className='text-red-500 text-2xl' onClick={() => dispatch(closeBillPreview())}><RxCross2 /></button>
                </div>
            </div>

            <div className='flex justify-start bg-[#f7f7f7] border-b'>
                <div className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'><MdOutlineEdit /> Edit</div>
                <div onClick={downloadPDF} className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'><BsFileEarmarkPdf /> PDF</div>
                <div className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'>Record Payment</div>
                <div className='flex items-center justify-center gap-2 bg-[#f7f7f7] p-2 hover:text-blue-500 cursor-pointer text-sm border-r'><HiDotsVertical /></div>
            </div>

            {/* pdf section */}
            <div className='p-5'>
                <BillInvoicePDF />
            </div>
        </div>
    )
}

export default BillPreview