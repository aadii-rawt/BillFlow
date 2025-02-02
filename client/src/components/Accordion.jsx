import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Accordion() {
  const [openSections, setOpenSections] = useState([]);
  const accordionItems = [
    {
      title: "ADDRESS",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "OTHER DETAILS",
      content:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      title: "CONTACT PERSON",
      content:
        "An accordion is a UI pattern that allows users to toggle the visibility of content sections.",
    },
    {
      title: "BANK DETAILS",
      content:
        "An accordion is a UI pattern that allows users to toggle the visibility of content sections.",
    },
    {
      title: "RECORD INFO",
      content:
        "An accordion is a UI pattern that allows users to toggle the visibility of content sections.",
    },
  ];
  const [heights, setHeights] = useState({});

  const contentRef = useRef([]);

  const handleToggle = (index) => {
    setOpenSections((prevOpenSections) => {
      const newOpenSections = [...prevOpenSections];
      if (newOpenSections.includes(index)) {
        newOpenSections.splice(newOpenSections.indexOf(index), 1); // Close section
      } else {
        newOpenSections.push(index); // Open section
      }
      return newOpenSections;
    });
  };

  useEffect(() => {
    // Set dynamic height for the open sections
    const newHeights = {};
    accordionItems.forEach((_, index) => {
      newHeights[index] = openSections.includes(index)
        ? contentRef.current[index]?.scrollHeight
        : 0;
    });
    setHeights(newHeights);
  }, [openSections]);


  return (
    <div className="space-y-2 my-5">
      {accordionItems.map((item, index) => (
        <div key={index} className="">
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex border-b py-0.5 justify-between items-center  text-left text-[14px]"
          >
            <span className='text-sm'>{item.title}</span>
            <span className='text-blue-500'>{openSections.includes(index) ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
          </button>
          {/* {openIndex === index && (
              <div className="p-4 bg-white text-gray-600 duration-700 ease-in">{item.content}</div>
            )} */}
          <div
            ref={(el) => (contentRef.current[index] = el)}
            className="transition-all duration-300 ease-in-out"
            style={{
              maxHeight: `${heights[index]}px`,
              overflow: "hidden",
            }}
          >
            {index == 0 &&
              <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                <div className="">
                  <p className="text-black">Billing Address </p>
                  <p className="text-gray-500">No Billing Address</p>
                </div>
                <div className="">
                  <p className="text-black">Shipping Address </p>
                  <p className="text-gray-500">No Shipping Address</p>
                </div>
              </div>}
            {index == 1 &&
              <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Default Currency</span>
                  <span className="text-black">INR</span>
                </div>
              </div>}
            {index == 2 &&
              <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">No contact persons found.</span>

                </div>
              </div>}
            {index == 3 &&
              <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">No bank account added yet</span>

                </div>
              </div>}
            {index == 4 &&
              <div className="py-2 bg-white text-gray-600 text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Vendor ID</span>
                  <span className="text-black">2345678765</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Created on</span>
                  <span className="text-black">02/34/2933</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Created By</span>
                  <span className="text-black">Aditya Rawat</span>
                </div>
              </div>}
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default Accordion