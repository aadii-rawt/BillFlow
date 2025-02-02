import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { ScrollRestoration } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/stateSlice'
import { jwtDecode } from "jwt-decode";

function Layout() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     dispatch(setUser(JSON.parse(storedUser))); // Restore user to Redux state
  //   }
  // }, [dispatch]);

  const checkTokenExpire = () => {
    const token = localStorage.getItem("authToken")
    if (!token) return true
    const realToken = token.split(" ")[1] // remove bearer
    try {
      const { exp } = jwtDecode(realToken)
      if (exp * 1000 < Date.now()) {
        // localStorage.removeItem("authToken");
        console.log("token expire");
        return true;
      }
      return false
    } catch (error) {
      return true;
    }

  }

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (checkTokenExpire()) {
  //     navigate('/login')
  //   }
  // }, [])

  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='w-full h-full'>
        <Header />
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  )
}

export default Layout