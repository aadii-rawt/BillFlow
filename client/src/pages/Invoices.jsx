import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import InvoicePreview from '../components/InvoicePreview'
function Invoices() {
    const navigate = useNavigate()
    const location = useLocation()
    const customerInvoice = location?.state?.customerInvoice || null
    const [invoices,setInvoices] = useState([])
    const [invoicePreview, setInvoicePreview] = useState(customerInvoice || null)

    const getAllInvoices = async () => {
        try {
            const res = await axios.get("https://billflow.onrender.com/invoices/userInvoices", {
                headers: {
                    Authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data
            setInvoices(data)
        } catch (error) {
            console.log(error);

        }
    }

    const handleNewBill = () => {
        navigate("/invoices/new", {
            state: {
                type : "new"
            }
        })
    }
    
    useEffect(() => {
        getAllInvoices()
    }, [])

    return (
        <div className='relative'>
            <div className=' p-4 flex items-center justify-between'>
                <div>
                    <button className='text-2xl font-medium'>All Invoices</button>
                </div>
                <div>
                    <button onClick={handleNewBill} className='bg-blue-500 px-3 py-1.5 rounded-md text-white flex items-center justify-center gap-1'> <FiPlus />New</button>
                </div>
            </div>
            <div>
                <table className='w-full '>
                    <thead>
                        <tr className='bg-gray-100 border-y text-gray-500 !font-normal'>
                            <th className='font-medium text-sm py-2'>DATE</th>
                            <th className='font-medium text-sm py-2'>INVOICE# </th>
                            <th className='font-medium text-sm py-2'>CUSTOMER NAME</th>
                            <th className='font-medium text-sm py-2'>STATUS</th>
                            <th className='font-medium text-sm py-2'>DUE DATE</th>
                            <th className='font-medium text-sm py-2'>AMOUNT</th>
                            <th className='font-medium text-sm py-2'>BALANCE DUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices?.map((data) => (
                            <tr key={data?.invoiceId} className='text-sm text-center border-b cursor-pointer hover:bg-[#F9F9FB]' onClick={() => setInvoicePreview(data)}>
                                <td className='py-2'>{data?.date}</td>
                                <td className='py-2 text-blue-500 font-medium'>{data?.invoiceNumber}</td>
                                <td className='py-2'>{data?.customerName}</td>
                                <td className={`py-2 ${data?.isPaid == "unpaid" ? "text-[#f76831]" : "text-[#22B378]"}`}>{data?.isPaid}</td>
                                <td className='py-2'>{data?.dueDate}</td>
                                <td className='py-2'>₹{data?.totalAmount}</td>
                                <td className='py-2'>₹{data?.totalDueAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {invoicePreview && <InvoicePreview invoice={invoicePreview} setInvoicePreview={setInvoicePreview} getAllInvoices={getAllInvoices} />}
        </div>
    )
}

export default Invoices