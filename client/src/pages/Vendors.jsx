import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import VendorProfile from '../components/VendorProfile'
import axios from 'axios'

function Vendors() {
    const [vendorProfile, setVendorProfile] = useState(false)
    const [vendors, setVendors] = useState([]);

    const getAllVendors = async () => {
        try {
            // const res = await fetch("http://localhost:3000/vendor/vendors");
            const res = await axios.get("http://localhost:3000/vendor/vendors", {
                headers : {
                    Authorization : "12345"
                }
            })
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            console.log(data);
            setVendors((prev) => ([...prev,...data?.vendors])); // Set the fetched data to state
        } catch (error) {
            console.error("Error fetching vendors:", error);
        }

    }

    useEffect(() => {
        getAllVendors()
    }, [])

    return (
        <div className='relative'>
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
                            <th className='font-medium text-sm py-2'>UNUSED CREDITS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors?.map((ven) => (
                        <tr className='text-center cursor-pointer hover:bg-gray-100 border-b' onClick={() => setVendorProfile(true)}>
                            <td className='text-sm py-2.5 font-medium text-blue-500'>{ven?.displayName}</td>
                            <td className='text-sm py-2.5'>{ven?.companyName}</td>
                            <td className='text-sm py-2.5'>{ven?.email}</td>
                            <td className='text-sm py-2.5'>{ven?.Phone}</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                        </tr>
                        ))}
                        <tr className='text-center cursor-pointer hover:bg-gray-100 border-b'>
                            <td className='text-sm py-2.5 font-medium text-blue-500'>vinay</td>
                            <td className='text-sm py-2.5'>google</td>
                            <td className='text-sm py-2.5'>vinay@mt.com</td>
                            <td className='text-sm py-2.5'>+91 79274793888</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                        </tr>
                        <tr className='text-center cursor-pointer hover:bg-gray-100 border-b'>
                            <td className='text-sm py-2.5 font-medium text-blue-500'>sahil</td>
                            <td className='text-sm py-2.5'>apple</td>
                            <td className='text-sm py-2.5'>aditya@email.com</td>
                            <td className='text-sm py-2.5'>+91 89890000789</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                            <td className='text-sm py-2.5 font-medium'>₹0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {vendorProfile && <VendorProfile setVendorProfile={setVendorProfile} />}
        </div>
    )
}

export default Vendors