import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link, useLocation, useParams } from 'react-router-dom'
import VendorProfile from '../components/VendorProfile'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency, setVendorProfile } from '../store/slices/stateSlice'
import useFormatCurrency from '../hooks/useFormatCurrency'

function Vendors() {
    const [vendorProfile, setVendorProfile] = useState(null)
    const [vendors, setVendors] = useState([]);
    const [vendorsBills, setVendorBills] = useState([]);
    const [vendorPayables, setVendorPayables] = useState({});
    const dispatch = useDispatch()
    const location = useLocation();
    const { vendorData } = location.state || {};

    const getAllVendors = async () => {
        try {
            // const res = await fetch("https://billflow.onrender.com/vendor/vendors");
            const res = await axios.get("https://billflow.onrender.com/vendor/vendors", {
                headers: {
                    Authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data
            setVendors((prev) => ([...prev, ...data?.vendors])); // Set the fetched data to state
        } catch (error) {
            console.error("Error fetching vendors:", error);
        }

    }

    const getAllBills = async () => {
        try {
            const res = await axios.get("https://billflow.onrender.com/bills/userBills", {
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
            vendors.forEach((vendor) => {
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
            setVendorProfile({ ...vendorData, payableAmount: vendorPayables[vendorData?._id] || 0 })
        }
    }, [])

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN').format(amount);
    };

    return (
        <div className='relative '>
            <div className=' p-4 flex items-center justify-between'>
                <div>
                    <button className='text-2xl font-medium'>All Vendors</button>
                </div>
                <div>
                    <Link to="/vendors/new" className='bg-blue-500 px-3 py-1.5 rounded-md text-white flex items-center justify-center gap-1'> <FiPlus />New</Link>
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
                            <th className='font-medium text-sm py-2'>PAYABLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors && vendors?.map((ven) => (
                            <tr key={ven?.displayName} className='text-center cursor-pointer hover:bg-gray-100 border-b'
                                onClick={() => setVendorProfile({ ...ven, payableAmount: vendorPayables[ven?._id] || 0 })}
                            >
                                <td className='text-sm py-2.5 font-medium text-blue-500'>{ven?.displayName}</td>
                                <td className='text-sm py-2.5'>{ven?.companyName}</td>
                                <td className='text-sm py-2.5'>{ven?.email}</td>
                                <td className='text-sm py-2.5'>{ven?.Phone}</td>
                                <td className='text-sm py-2.5 font-medium'>₹{formatCurrency(vendorPayables[ven?._id]) || 0}</td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>

            {vendorProfile && <VendorProfile vendor={vendorProfile} setVendorProfile={setVendorProfile} />}
        </div >
    )
}

export default Vendors