
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { LuBriefcaseBusiness, LuKeyRound } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {

  const [userData, setUserData] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    password: "",
    companyAddress: ""
  });
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleData = (e) => {
    setError("")
    const { value, name } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const dataValidation = () => {
    for (const key in userData) {
      if (!userData[key].trim()) {
        setError("Please enter all fields.");
        return false;
      }
    }
    setError(""); // Clear any existing error if all fields are valid
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault()
    if (!dataValidation()) {
      return;
    }

    try {
      const res = await axios.post("https://billflow.onrender.com/users/signup", {
        ...userData
      })

      const authToken = res?.data?.authToken

      localStorage.setItem("authToken",`Bearer ${authToken}`)
      navigate("/")

    } catch (error) {
      const err = error?.response?.data?.msg
      setError(err)
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center min-h-screen ">
      <div className=" w-1/2 px-6 lg:px-12">

        <div className="h-full max-w-sm mx-auto flex flex-col justify-center">
          <div>
            <h1 className="font-bold text-3xl">Let's get started</h1>
            {/* <p className="text-sm text-gray-600 my-2">See your growth and get more consulting support!</p> */}
          </div>
          <form className="mt-5" onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="email">
                Company Name*
              </label>
              <div className=" flex gap-2 items-center px-4 rounded-3xl border border-gray-400 focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-400/20">
                <LuBriefcaseBusiness className="text-gray-500" />
                <input
                  type="text"
                  name="companyName"
                  value={userData?.companyName}
                  onChange={handleData}
                  maxLength={50}
                  className="w-full  bg-transparent px-1 py-2 outline-none group"
                  placeholder="Company name"
                />

              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="email">
                Email*
              </label>
              <div className=" flex gap-2 items-center px-4 rounded-3xl border border-gray-400 focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-400/20">
                <HiOutlineMail className="text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={userData?.email}
                  onChange={handleData}
                  className="w-full  bg-transparent px-1 py-2 outline-none "
                  placeholder="adi@e.com"
                />

              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="email">
                Mobile Number*
              </label>
              <div className=" flex gap-2 items-center px-4 rounded-3xl border border-gray-400 focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-400/20">
                <MdOutlineLocalPhone className="text-gray-500" />
                <input
                  type="number"
                  id="number"
                  name="phoneNumber"
                  value={userData?.phoneNumber}
                  onChange={handleData}
                  className="w-full  bg-transparent px-1 py-2 outline-none "
                  placeholder="+91 9999999999"
                />

              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="password">
                Password*
              </label>
              <div className=" flex gap-2 items-center px-4 rounded-3xl border border-gray-400 focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-400/20">
                <LuKeyRound className="text-gray-500" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleData}
                  className="w-full bg-transparent px-1 py-2 outline-none"
                  placeholder="********"
                />

              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="password">
                Address*
              </label>
              <div className=" flex gap-2 items-center px-4 rounded-3xl border border-gray-400 focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-400/20">
                <IoLocationOutline className="text-gray-500" />
                <input
                  type="text"
                  id="text"
                  name="companyAddress"
                  value={userData.companyAddress}
                  onChange={handleData}
                  className="w-full bg-transparent px-1 py-2 outline-none"
                  placeholder="company address"
                />

              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#5138EE] text-white font-bold py-2 px-4 my-3 rounded-3xl"
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600">
            <p className="">OR</p>
          </div>
          <div className="mt-3 text-center">
            <p className="text-gray-600">
              Already have an account? <Link to='/login' className="text-[#5138EE] cursor-pointer">Log in</Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="w-1/2  bg-[#5138EE] flex items-center justify-center"
        style={{ backgroundImage: 'url("https://assets-global.website-files.com/61fd79cd8d028c476185f53e/61fd79cd8d028c53c685f5d5_Account%20Pattern.svg")' }}>
        <img src="https://assets-global.website-files.com/61fd79cd8d028c476185f53e/61fd79cd8d028c5bed85f643_Asset%20Cards.png" alt="Cloud Illustration" className="w-1/2" />

      </div>
    </div>
  );
};

export default Signup;
