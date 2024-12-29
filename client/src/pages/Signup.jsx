
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { LuKeyRound } from "react-icons/lu";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-lg w-full px-6 lg:px-12">

        <div className="mt-10 p-8">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="email">
                Email
              </label>
              <div className="bg-white flex gap-2 items-center px-2 rounded-md border">
              <HiOutlineMail className="text-gray-500" />
              <input
                type="email"
                id="email"
                className="w-full px-1 py-2 outline-none "
                placeholder="adi@e.com"
              />

              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="password">
                Password
              </label>
              <div className="bg-white flex gap-2 items-center px-2 rounded-md border">
              <LuKeyRound className="text-gray-500" />
              <input
                type="password"
                id="password"
                className="w-full  px-1 py-2 outline-none"
                placeholder="••••••••"
              />

              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 my-3 rounded-lg"
            >
              Sign up
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600">
            <p className="mb-4">OR</p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account? <Link to='/login' className="text-blue-500 cursor-pointer">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-1">
        <div className="flex justify-center items-center h-full">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full flex items-center justify-center">
              <div className="text-white text-6xl">☁️</div>
            </div>
            <p className="absolute top-0 text-center mt-28 font-bold text-white">
              <img src="/cloud-illustration.svg" alt="Cloud Illustration" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
