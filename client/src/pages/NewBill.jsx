import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { VscMail } from "react-icons/vsc";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { TbInvoice } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import VendorForm from '../components/VendorForm'
import Modal from '../components/Modal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { handleNotify } from '../store/slices/stateSlice';

function NewBill() {

    const [billData, setBillData] = useState({
        items: [{ description: "", quantity: 1, rate: 0, amount: 0 }],
        vendorName: "",
        vendorId: "",
        billNumber: "",
        uploadedLogo: "",
        date: "",
        dueDate: "",
        tax: 0,
        note: "",
        isPaid: "unpaid",
        billId: crypto.randomUUID(),
        createdAt: ""
    });
    const [showdropdown, setShowdropdown] = useState(false)
    const navigate = useNavigate()
    const [addVendor, setAddVendor] = useState(false)
    const [error, setError] = useState("")
    const [vendors, setVendors] = useState([]);
    const location = useLocation()
    const paramData = location?.state || {}
    const dispatch = useDispatch()

    // add more item into table
    const addItem = () => {
        setBillData(prevData => ({
            ...prevData,
            items: [...prevData.items, { description: "", quantity: 1, rate: 0, amount: 0 }]
        }));
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...billData.items];

        // Allow empty values
        if (value === "") {
            updatedItems[index][field] = "";
        } else {
            // Convert to number for numeric fields
            updatedItems[index][field] = field === "rate" || field === "quantity" ? Number(value) : value;
        }

        // Calculate amount only if both quantity and rate are valid numbers
        updatedItems[index].amount =
            updatedItems[index].quantity && updatedItems[index].rate
                ? updatedItems[index].quantity * updatedItems[index].rate
                : 0;

        setBillData(prevData => ({
            ...prevData,
            items: updatedItems
        }));
    };
    // delete the row from the item table
    const handleDeleteItem = (index) => {
        // Prevent deletion if there's only one item
        if (billData.items.length === 1) {
            // alert("At least one item is required.");
            return;
        }

        const updatedItems = billData.items.filter((_, i) => i !== index);
        setBillData(prevData => ({
            ...prevData,
            items: updatedItems
        }));
    };

    const handleInputChange = (field, value) => {
        setBillData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    // to upload company logo
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setBillData(prevData => ({ ...prevData, uploadedLogo: reader.result }));
            };
            reader.readAsDataURL(file);
        }
        setLogoError("")
    };
    // calculate the subtoal of item add into the table
    const calculateSubtotal = () => {
        return billData.items.reduce((subtotal, item) => subtotal + parseInt(item.amount), 0).toFixed(2);
    };
    // total amount of bill after adding tax if available
    const calculateTotalWithTax = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const taxPercent = parseFloat(billData.tax) || 0; // Ensure tax is a number
        const taxAmount = (subtotal * taxPercent) / 100;
        return (subtotal + taxAmount).toFixed(2);
    };
    // format currency into the indian format
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN').format(amount);
    };

    // submit and store bill
    const handleSubmit = async () => {
        if (!billData?.vendorName) {
            setError("Please select Vendor")
            return
        }
        const totalAmount = calculateTotalWithTax()
        try {
            await axios.post("http://localhost:3000/bills/newbill", {
                ...billData,
                totalAmount,
                totalDueAmount: totalAmount,
                createdAt: Date.now()
            }, {
                headers: {
                    Authorization: localStorage.getItem("authToken")
                }
            })
            navigate("/bills")
            dispatch(handleNotify({msg:"The bill has been created.", type: "succes"}))
        } catch (error) {
            console.log(error);
        }
    }
    // fetch all vendors
    const getAllVendors = async () => {
        try {
            const res = await axios.get("http://localhost:3000/vendor/vendors", {
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

    // select or change vendor
    const handleVendorChange = (data) => {
        const vendorId = data?._id
        console.log(vendorId);
        setBillData((prev) => ({
            ...prev, vendorName: data?.displayName, vendorId: vendorId
        }));
        setError("");
    };

    // edit bill
    const handleEdit = async () => {
        try {
            const totalAmount = calculateTotalWithTax()
            const res = await axios.patch(`http://localhost:3000/bills/edit/${billData?._id}`, {
                ...billData,totalAmount, totalDueAmount: totalAmount,
            }, {
                headers: { Authorization: localStorage.getItem("authToken") }
            })
            console.log(res);
            // navigate("/vendors", {
            //     state: {
            //         vendorData: { ...res.data?.updatedVendor }
            //     }
            // })
            // dispatch(handleNotify())
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getAllVendors()
    }, [])

    useEffect(() => {
        if (paramData?.type == "edit") {
            setBillData(paramData?.bill)
        }
    }, [])

    const [searchQuery, setSearchQuery] = useState("");
    const filteredVendors = vendors.filter((data) =>
        data?.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative min-h-screen w-full">
            <div className='p-4 border-b flex justify-between items-center '>
                <h1 className='text-2xl flex items-center gap-3 capitalize'> <TbInvoice size={30} /> {paramData?.type} Bill</h1>
                <button onClick={() => navigate(-1)}><RxCross1 size={20} className='text-gray-600' /></button>
            </div>

            {error && <div className='m-4 p-4 bg-red-100 rounded-lg flex items-center justify-between'>
                <ul className=''>
                    <li>{error}</li>
                </ul>
                <button type='button' onClick={() => setError("")}><RxCross1 strokeWidth={1} size={16} className='text-red-500 font-bold' /></button>
            </div>}

            <div className="max-w-4xl p-6 pb-60 rounded-md">
                <div className="flex justify-between items-center mb-6">
                    {/* company logo */}
                    <div>
                        {billData?.uploadedLogo ?
                            <div className="w-24 h-24 max-w-60 relative">
                                <img
                                    src={billData?.uploadedLogo}
                                    alt="Uploaded Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            :
                            <div className="w-24 h-24 relative max-w-60 flex items-center justify-center bg-gray-200 rounded text-center">
                                <span>+ <br /> Add Logo</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 z-10 cursor-pointer"
                                    onChange={handleLogoUpload}
                                />
                            </div>
                        }
                    </div>
                    {/* bill number */}
                    <div className="text-right">
                        <label className="block text-gray-500 mb-1">Bill Number</label>
                        <div className="border rounded my-2">
                            <input
                                type="text"
                                required
                                placeholder="Bill Number #29383"
                                value={billData.billNumber}
                                onChange={(e) => handleInputChange('billNumber', e.target.value)}
                                className="text-right outline-none rounded py-1.5 px-2"
                                maxLength={25}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    {/* whom to send bill */}
                    <div className="gap-6 mb-6">
                        <div className=" relative w-[300px]">
                            <label className="block text-gray-500 mb-1">Bill To <span className="text-red-600">*</span></label>
                            <div className="w-full relative flex items-center justify-between border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer" onClick={() => setShowdropdown(!showdropdown)}>
                                <span className="text-gray-500">{billData?.vendorName ? billData?.vendorName : "Select or Add Vendor"}</span>
                                <IoIosArrowDown />
                                {showdropdown &&
                                    <div className="absolute rounded overflow-hidden bg shadow-md w-full left-0 top-[50px] bg-gray-100 px-1 py-1">
                                        <div>
                                            <input type="text" className="rounded px-2.5 py-1.5 w-full outline-none" placeholder="Search" style={{ border: "0.5px solid  rgba(229, 231, 235,1)" }}
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                                maxLength={25} />
                                        </div>
                                        <ul className="mt-1 max-h-44 overflow-y-scroll user-scrollbar">
                                            {filteredVendors?.length > 0 ? (
                                                filteredVendors?.map((data) => (
                                                    <li
                                                        key={data.displayName}
                                                        className="p-2 px-3 hover:bg-blue-500 hover:text-white rounded group flex gap-3"
                                                        onClick={() => {
                                                            handleVendorChange(data)
                                                            setError("")
                                                        }}
                                                    >
                                                        <div className="w-10 h-10 bg-gray-200 capitalize rounded-full flex items-center text-gray-600 justify-center group-hover:text-gray-600 font-semibold">
                                                            {data.displayName?.[0]}
                                                        </div>
                                                        <div>
                                                            <p className="text-sm">{data?.displayName}</p>
                                                            <p className="text-[13px] flex items-center gap-1 group-hover:text-white text-gray-600">
                                                                <VscMail />  {data.email}
                                                            </p>
                                                        </div>
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="p-2 px-3 text-gray-500 text-sm">No results found</li>
                                            )}
                                        </ul>
                                        <div
                                            className="p-2 bg-gray-200 px-3 hover:bg-gray-200 rounded text-blue-600 text-sm flex items-center gap-3 font-medium border-t"
                                            onClick={() => setAddVendor(true)}
                                        >
                                            <GoPlusCircle size={20} /> New Vendor
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {/* Date, Due Date */}
                    <div className="grid grid-cols-1  gap-2 justify-end justify-items-end mb-6">
                        <div className="flex items-center gap-3">
                            <label className="block text-gray-500  ">Date: </label>
                            <input
                                type="date"
                                value={billData.date}
                                required
                                onChange={(e) => handleInputChange('date', e.target.value)}
                                className="max-w-[150px] border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div className="flex items-center gap-3">

                            <label className="block text-gray-500 mb-1 ">Due Date:</label>
                            <input
                                type="date"
                                value={billData.dueDate}
                                required
                                onChange={(e) => handleInputChange('dueDate', e.target.value)}
                                className="max-w-[150px] border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            {/* {dateError && <p className="bg-red-100 p-1 rounded text-red-600">{dateError}</p>} */}
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <div className="mb-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-4 py-2 min-w-80 font-medium rounded-tl-lg">Item</th>
                                <th className=" px-4 py-2 font-medium ">Quantity</th>
                                <th className=" px-4 py-2 font-medium ">Rate</th>
                                <th className=" px-4 py-2 font-medium ">Amount</th>
                                <th className="rounded-tr-lg"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {billData.items.map((item, index) => (
                                <tr key={index} className="text-center">
                                    <td className=" px-1 py-2">
                                        <input
                                            type="text"
                                            value={item.description}
                                            onChange={(e) =>
                                                handleItemChange(index, "description", e.target.value)
                                            }
                                            className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                                            placeholder="Description"
                                            required
                                            maxLength={40}
                                        />
                                    </td>
                                    <td className=" px-4 py-2">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => {
                                                // setRateError("")
                                                handleItemChange(index, "quantity", e.target.value)
                                            }}
                                            required
                                            onWheel={(e) => e.target.blur()}
                                            className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </td>
                                    <td className=" px-4 py-2">
                                        <input
                                            type="number"
                                            value={item.rate}
                                            onChange={(e) => {
                                                // setRateError("")
                                                handleItemChange(index, "rate", e.target.value)
                                            }
                                            }

                                            required
                                            onWheel={(e) => e.target.blur()}
                                            className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </td>
                                    <td className=" px-4 py-2">
                                        ₹ {formatCurrency(parseInt(item?.amount).toFixed(2))}
                                    </td>
                                    <td className="text-red-500">
                                        <MdDeleteOutline onClick={() => handleDeleteItem(index)} className="cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* {rateError && <p className="text-red-500">{rateError}</p>} */}
                    <button
                        type="button"
                        onClick={addItem}
                        className="text-blue-600 mt-4 px-3 py-2 rounded" style={{ "border": "1px solid rgba(29, 78, 216, 0.5)" }}
                    >
                        + Add Item
                    </button>
                </div>

                <div className="flex justify-between items-start">
                    <div className="flex flex-col w-80 justify-center gap-2">
                        <label htmlFor="note" className="text-gray-500">Note:</label>
                        <textarea name="note"
                            value={billData?.note}
                            onChange={(e) => handleInputChange('note', e.target.value)}
                            placeholder="Notes: any relevant information (100 Characters)" id=""
                            className="w-full border outline-none rounded resize-none p-2" maxLength={100}></textarea>
                    </div>

                    {/* Totals */}
                    <div className="text-right space-y-2">
                        <div className="flex justify-end">
                            <p className=" text-left text-gray-500"> Subtotal:</p>
                            <div className="min-w-20">{formatCurrency(calculateSubtotal())}</div>
                        </div>
                        <div className="flex justify-end relative">
                            <p className="text-left text-gray-500">Tax (%):</p>
                            <div className="min-w-20">
                                <input type="text" value={billData?.tax}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value)) {
                                            handleInputChange('tax', value);
                                        }
                                    }}
                                    maxLength={4}
                                    className="max-w-10 outline-none border px-1.5 py-1 rounded" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <p className=" text-left text-xl font-bold text-gray-500">Total:</p>
                            <span className="min-w-20 text-xl font-bold">{formatCurrency(calculateTotalWithTax())}</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* save or cancel the form */}
            <div className='border-t p-4 bg-white flex  gap-3 fixed bottom-0 w-full'>
                <button onClick={paramData?.type == "edit" ? handleEdit : handleSubmit} className='bg-blue-500 text-white px-2.5 py-1  rounded-md' >Save</button>
                <button className='bg-gray-100 px-2.5 py-1  rounded-md border' onClick={() => navigate(-1)}>Cancel</button>
            </div>

            {/* modals */}

            {addVendor && <Modal>
                <VendorForm type="modal" setAddVendor={setAddVendor} />
            </Modal>
            }

        </div>
    )
}

export default NewBill