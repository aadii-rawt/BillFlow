import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link, useLocation, useParams } from 'react-router-dom'
import VendorProfile from '../components/VendorProfile'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency, setVendorProfile } from '../store/slices/stateSlice'
import useFormatCurrency from '../hooks/useFormatCurrency'
import CustomerProfile from '../components/CustomerProfile'

function  Customers() {
    const [customerProfile, setCustomerProfile] = useState(null)
    const [customers, setCustomers] = useState([]);
    const [vendorsBills, setVendorBills] = useState([]);
    const [vendorPayables, setVendorPayables] = useState({});
    const dispatch = useDispatch()
    const location = useLocation();
    const { vendorData } = location.state || {};

    const getAllVendors = async () => {
        try {
            // const res = await fetch("http://localhost:3000/vendor/vendors");
            const res = await axios.get("http://localhost:3000/customers/customers", {
                headers: {
                    Authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data
            setCustomers((prev) => ([...prev, ...data?.customers])); // Set the fetched data to state
        } catch (error) {
            console.error("Error fetching vendors:", error);
        }
    }

    const getAllBills = async () => {
        try {
            const res = await axios.get("http://localhost:3000/bills/userBills", {
                headers: {
                    Authorization: localStorage.getItem("authToken"),
                },
            });
            const bills = res.data || [];
            setVendorBills(bills);

            // Calculate the total payable amount for each vendor
            const payableMap = {};
            bills.forEach((bill) => {
                const { vendorId, totalDueAmount } = bill;
                if (vendorId) {
                    payableMap[vendorId] = (payableMap[vendorId] || 0) + parseFloat(totalDueAmount || 0);
                }
            });

            // Ensure vendors without bills have a payable of 0.00
            customers.forEach((vendor) => {
                if (!payableMap[vendor?.vendorId]) {
                    payableMap[vendor?.vendorId] = 0.00; // Set default payable to 0.00
                }
            });

            setVendorPayables(payableMap);
        } catch (error) {
            console.error("Error fetching bills:", error);
        }
    };

    useEffect(() => {
        getAllVendors();
        getAllBills();
    }, [])

    useEffect(() => {
        if (vendorData) {
            setCustomerProfile({ ...vendorData, payableAmount: vendorPayables[vendorData?._id] || 0 })
        }
    }, [])

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN').format(amount);
    };

    return (
        <div className='relative'>
            <div className=' p-4 flex items-center justify-between'>
                <div>
                    <button className='text-2xl font-medium'>All Customers</button>
                </div>
                <div>
                    <Link to="/customers/new" className='bg-blue-500 px-3 py-1.5 rounded-md text-white flex items-center justify-center gap-1'> <FiPlus />New</Link>
                </div>
            </div>
            <div>
                <table className=' w-full'>
                    <thead>
                        <tr className='text-gray-500 bg-gray-100 !font-normal border-y'>
                            <th className='font-medium text-sm py-2'>NAME</th>
                            <th className='font-medium text-sm py-2'>COMPANY NAME</th>
                            <th className='font-medium text-sm py-2'>EMAIL</th>
                            <th className='font-medium text-sm py-2'>WORK PHONE</th>
                            <th className='font-medium text-sm py-2'>RECEIVABLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers && customers?.map((ven) => (
                            <tr key={ven?.displayName} className='text-center cursor-pointer hover:bg-gray-100 border-b'
                                onClick={() => setCustomerProfile({ ...ven, payableAmount: vendorPayables[ven?._id] || 0 })}
                            >
                                <td className='text-sm py-2.5 font-medium text-blue-500'>{ven?.displayName}</td>
                                <td className='text-sm py-2.5'>{ven?.companyName}</td>
                                <td className='text-sm py-2.5'>{ven?.email}</td>
                                <td className='text-sm py-2.5'>{ven?.Phone}</td>
                                <td className='text-sm py-2.5 font-medium'>₹{formatCurrency(vendorPayables[ven?._id]) || 0}</td>
                            </tr>
                        ))}
                        <tr className='text-center cursor-pointer hover:bg-gray-100 border-b'
                            // onClick={() => setCustomerProfile(true)}
                            onClick={() => dispatch(setCustomerProfile(true))}
                        >
                            <td className='text-sm py-2.5 font-medium text-blue-500'>vinay</td>
                            <td className='text-sm py-2.5'>google</td>
                            <td className='text-sm py-2.5'>vinay@mt.com</td>
                            <td className='text-sm py-2.5'>+91 79274793888</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                        </tr>
                        <tr className='text-center cursor-pointer hover:bg-gray-100 border-b'>
                            <td className='text-sm py-2.5 font-medium text-blue-500'>sahil</td>
                            <td className='text-sm py-2.5'>apple</td>
                            <td className='text-sm py-2.5'>aditya@email.com</td>
                            <td className='text-sm py-2.5'>+91 89890000789</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {customerProfile && <CustomerProfile customer={customerProfile} setCustomerProfile={setCustomerProfile} />}
        </div >
    )
}

export default  Customers