
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { LuKeyRound } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/stateSlice";
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError("Please Enter all values")
      return
    }

    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        email,
        password
      })

      if (res?.status == 200) {
        const user = res.data?.user;
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(setUser(user)); 
        navigate("/")
      }
    } catch (error) {
      console.log(error?.response?.data?.msg);
      setError(error?.response?.data?.msg);
    }
  }
  return (
    <div className="flex flex-col lg:flex-row justify-center min-h-screen ">
      <div className=" w-1/2 px-6 lg:px-12">

        <div className="h-full max-w-xs mx-auto flex flex-col justify-center">
          <div>
            <h1 className="font-bold text-3xl">Login</h1>
            <p className="text-sm text-gray-600 my-2">See your growth and get more consulting support!</p>
          </div>
          <form className="mt-5" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="email">
                Email*
              </label>
              <div className=" flex gap-2 items-center px-4 rounded-3xl border border-gray-400">
                <HiOutlineMail className="text-gray-500" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full  bg-transparent px-1 py-2 outline-none "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="password">
                Password*
              </label>
              <div className=" flex gap-2 items-center px-4 rounded-3xl border border-gray-400">
                <LuKeyRound className="text-gray-500" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent px-1 py-2 outline-none"
                  placeholder="••••••••"
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
            <p className="mb-4">OR</p>
          </div>
          <div className="mt-3 text-center">
            <p className="text-gray-600">
              Don’t have an account? <Link to='/signup' className="text-[#5138EE] cursor-pointer">Sign up</Link>
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

export default Login;
