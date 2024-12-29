import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { VscMail } from "react-icons/vsc";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross1, RxCross2 } from "react-icons/rx";

function NewBill() {
    const [billData, setBillData] = useState({
        items: [{ description: "", quantity: 1, rate: 0, amount: 0 }],
        billNumber: "",  // Add invoice number here if needed
        from: "",
        senderPhone: "",
        senderEmail: "",
        uploadedLogo: "",
        FromAddress: "",
        date: "",
        dueDate: "",
        tax: 0,
        note: "",
        isPaid: "unpaid",
        billId: crypto.randomUUID(),
    });

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN').format(amount);
    };
    return (
        <div className="p-6 md:p-10 bg-gray-100 min-h-screen  w-full py-5">
            <div className='p-4 border-b'>
                <h1 className='text-2xl'>New Vendor</h1>
            </div>
            <form action="">
                <div className="max-w-4xl  bg-gray-50 p-6 pb-60 rounded-md">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
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
                                    // onChange={handleLogoUpload}
                                    />

                                </div>
                            }
                            {/* {logoError && <p className="bg-red-100 p-1 rounded text-red-600 mb-0.5 mt-2">{logoError}</p>} */}

                        </div>
                        <div className="text-right">
                            <h1 className="text-2xl font-bold">Bill</h1>
                            <div className="border rounded my-2">
                                <input
                                    type="text"
                                    required
                                    placeholder="Bill Number #29383"
                                    // value={billData.billNumber}
                                    // onChange={(e) => handleInputChange('billNumber', e.target.value)}
                                    className="text-right outline-none rounded py-1.5 px-2"
                                    maxLength={25}
                                />
                            </div>
                            {/* {billNumberExist && <p className="w-60 text-sm bg-red-100 px-2 py-1 rounded">{billNumberExist}</p>} */}
                        </div>
                    </div>
                    <div >
                        <div>
                            <div className="flex justify-between items-end">
                                <div className="gap-6 mb-6">
                                    <div className=" relative w-[300px]">
                                        {/* {error && <p className="text-red-500">{error}</p>} */}
                                        <label className="block text-gray-500 mb-1">Bill To <span className="text-red-600">*</span></label>
                                        {/* {error && <p className="bg-red-100 p-1 rounded text-red-600 mb-0.5">{error}</p>} */}
                                        <div className="w-full relative flex items-center justify-between border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer" onClick={() => setShowdropdown(!showdropdown)}>
                                            <span className="text-gray-500">{billData?.vendorName ? billData?.vendorName : "Select or Add Vendor"}</span>
                                            {/* <IoIosArrowDown /> */}
                                            {/* {showdropdown && */}
                                            <div className="absolute rounded overflow-hidden bg shadow-md w-full left-0 top-[50px] bg-gray-100 px-1 py-1">
                                                <div>
                                                    <input type="text" className="rounded px-2.5 py-1.5 w-full outline-none" placeholder="Search" style={{ border: "0.5px solid  rgba(229, 231, 235,1)" }}
                                                        // value={searchQuery}
                                                        // onChange={(e) => setSearchQuery(e.target.value)}
                                                        // onClick={(e) => e.stopPropagation()}
                                                        maxLength={25} />
                                                </div>
                                                {/* <ul className="mt-1 max-h-44 overflow-y-scroll user-scrollbar">
                                                        {filteredVendors.length > 0 ? (
                                                            filteredVendors.map((data) => (
                                                                <li
                                                                    key={data.vendorName}
                                                                    className="p-2 px-3 hover:bg-blue-500 hover:text-white rounded group flex gap-3"
                                                                    onClick={() => {
                                                                        handleVendorChange(data)
                                                                        setError("")
                                                                    }}
                                                                >
                                                                    <div className="w-10 h-10 bg-gray-200 capitalize rounded-full flex items-center text-gray-600 justify-center group-hover:text-gray-600 font-semibold">
                                                                        {data.vendorName?.[0]}
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-sm">{data.vendorName}</p>
                                                                        <p className="text-[13px] flex items-center gap-1 group-hover:text-white text-gray-600">
                                                                            <VscMail />  {data.email}
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li className="p-2 px-3 text-gray-500 text-sm">No results found</li>
                                                        )}
                                                    </ul> */}
                                                <div
                                                    className="p-2 bg-gray-200 px-3 hover:bg-gray-200 rounded text-blue-600 text-sm flex items-center gap-3 font-medium border-t"
                                                // onClick={() => setAddVendor(true)}
                                                >
                                                    {/* <GoPlusCircle size={20} /> New Vendor */}
                                                </div>
                                            </div>
                                            {/* } */}
                                        </div>
                                    </div>

                                </div>
                                {/* Date, Payment Terms, Due Date */}
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
                        </div>


                    </div>

                    {/* Items Table */}
                    <div className="mb-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-blue-700 text-white">
                                    <th className=" px-4 py-2 min-w-80">Item</th>
                                    <th className=" px-4 py-2">Quantity</th>
                                    <th className=" px-4 py-2">Rate</th>
                                    <th className=" px-4 py-2">Amount</th>
                                    <th className=""></th>
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
                                                    setRateError("")
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
                                                    setRateError("")
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
                            // onClick={addItem}
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
                                {/* <div className="min-w-20">{formatCurrency(calculateSubtotal())}</div> */}
                            </div>
                            <div className="flex justify-end relative">
                                <p className="text-left text-gray-500">Tax (%):</p>
                                {/* <span>238</span> */}
                                <div className="min-w-20">
                                    <input type="text" value={billData?.tax}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^\d*$/.test(value)) { // Allow only digits
                                                handleInputChange('tax', value);
                                            }
                                        }}
                                        maxLength={4}
                                        className="max-w-10 outline-none border px-1.5 py-1 rounded" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <p className=" text-left text-xl font-bold text-gray-500">Total:</p>
                                {/* <span className="min-w-20 text-xl font-bold">{formatCurrency(calculateTotalWithTax())}</span> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="my-4 flex items-center justify-center">
                    <button
                        type="submit"
                        // disabled={isSubmiting}
                        className="bg-blue-700 text-white rounded px-3 py-2"
                    >
                        {/* {isSubmiting ? 'Loading...' : "Save"} */}
                    </button>
                </div>
            </form >
            <div className="absolute right-10 top-10" onClick={() => setSelectedUser(false)}>
                <button><RxCross1 size={24} /></button>
            </div>

            {/* {addVendor && <AddVendor setAddVendor={setAddVendor} />}
            {isPreview && <InvoicePreviewModal setIsPreview={setIsPreview} data={billData} />} */}
        </div >
    )
}

export default NewBill