import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function VednorForm({ setAddVendor, type = "page" }) {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        salutation: "",
        firstName: "",
        lastName: "",
        companyName: "",
        displayName: "",
        email: "",
        Phone: "",
    })
    const [error, setError] = useState("")

    const handleData = (e) => {
        const { value, name } = e.target;
        setUserDetails((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (!userDetails?.displayName) {
            setError("Please Enter the Vendor Name")
            return
        }
         try {
            const res = await axios.post("http://localhost:3000/vendor/newvendor", {
                ...userDetails, userId : "678e36da2a1b9a0a11433014"
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        console.log(userDetails);
       if( type = "page"){
           navigate("/vendors")
        }else{
           navigate("/bills/new")  
       }

    }
    return (
        <div className={`relative bg-white min-h-screen ${type == "modal" && "animate-slide-down duration-500 "}`}>
            <div className='p-4 border-b flex items-center justify-between'>
                <h1 className='text-2xl '>New Vendor</h1>
                {type == "page" ?
                    <button onClick={() => navigate(-1)}><RxCross1 size={20} className='text-gray-600' /></button> :
                    <button onClick={() => setAddVendor(false)}><RxCross1 size={20} className='text-red-500' /></button>
                }
            </div>

            {/*======================== errors ======================*/}
            {error && <div className='m-4 p-4 bg-red-100 rounded-lg flex items-center justify-between'>
                <ul className=''>
                    <li>{error}</li>
                </ul>
                <button onClick={() => setError("")} type='button'><RxCross1 strokeWidth={1} size={16} className='text-red-500 font-bold' /></button>
            </div>}

            {/* ------- new vendor form------------ */}
            <div className='py-5 px-4 space-y-5 text-[15.5px]'>
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='text-[15.5px]'>Primary Contact</label>
                    <div className='flex gap-3'>
                        <select placeholder="Salutation"
                            name="salutation"
                            value={userDetails?.salutation}
                            onChange={(e) => handleData(e)}
                            className='border rounded-md outline-none px-2 py-1 max-w-40 min-w-40 hover:border hover:border-blue-500 duration-500' >
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Miss.">Miss.</option>
                            <option value="Dr.">Dr.</option>
                        </select>
                        <input type="text"
                            placeholder='First Name'
                            name='firstName'
                            value={userDetails?.firstName}
                            onChange={(e) => handleData(e)}
                            className='border rounded-md outline-none px-2 py-1 max-w-40 hover:border hover:border-blue-500 duration-500' />
                        <input type="text"
                            placeholder='Last Name'
                            name='lastName'
                            value={userDetails?.lastName}
                            onChange={(e) => handleData(e)}
                            className='border rounded-md outline-none px-2 py-1 max-w-40 hover:border hover:border-blue-500 duration-500' />
                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='text-[15.5px]'>Company Name</label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder=''
                            name="companyName"
                            value={userDetails?.companyName}
                            onChange={(e) => handleData(e)}
                            className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
                <div className='flex items-center gap-11'>
                    <label htmlFor="" className='text-[15.5px]'>Display Name <span className='text-red-500'>*</span></label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder=''
                            name="displayName"
                            value={userDetails?.displayName}
                            onChange={(e) => handleData(e)}
                            className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
                <div className='flex items-center gap-14'>
                    <label htmlFor="" className='text-[15.5px]'>Email Address</label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder=''
                            name="email"
                            value={userDetails?.email}
                            onChange={(e) => handleData(e)}
                            className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
                <div className='flex items-center gap-20'>
                    <label htmlFor="" className='text-[15.5px]'>Phone</label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder=''
                            name="Phone"
                            value={userDetails?.Phone}
                            onChange={(e) => handleData(e)}
                            className='border rounded-md outline-none px-2 py-1 hover:border hover:border-blue-500 duration-500 min-w-[300px]' />
                    </div>
                </div>
            </div>

            <div className={`border-t p-4 flex gap-3 bottom-0 w-full ${type == "page" ? "fixed" : "absolute"} `}>
                <button onClick={handleSubmit} className='bg-blue-500 text-white px-2.5 py-1  rounded-md'>Save</button>
                {type == "page" ?
                    <button className='bg-gray-100 px-2.5 py-1  rounded-md border' onClick={() => navigate(-1)}>Cancel</button> :
                    <button className='bg-gray-100 px-2.5 py-1  rounded-md border' onClick={() => setAddVendor(false)}>Cancel</button>
                }
            </div>
        </div>
    )
}

export default VednorForm