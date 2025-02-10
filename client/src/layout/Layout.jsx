import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { ScrollRestoration } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../store/slices/stateSlice'
import { jwtDecode } from "jwt-decode";
import ProfileRightSidebar from '../components/ProfileRightSidebar'

function Layout() {
  // const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.stateSlice.userProfile)

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
        localStorage.removeItem("authToken");
        console.log("token expire");
        return true;
      }
      return false
    } catch (error) {
      return true;
    }

  }

  const navigate = useNavigate()

  useEffect(() => {
    if (checkTokenExpire()) {
      navigate('/login')
    }
  }, [])

  return (
    <div className=' min-h-screen '>
      {/* <Sidebar />
      <div className='w-full h-full relative'>
        <Header />
        <Outlet />
      </div>
      <ScrollRestoration />

        {userProfile && <ProfileRightSidebar />}
      <ProfileRightSidebar /> */}
      <Header />
      <div className='flex w-full relative'>
        <Sidebar />
        <div className='flex-1'>
          <Outlet />
        </div>
      {userProfile && <ProfileRightSidebar />}
      </div>
    </div>
  )
}

export default Layout