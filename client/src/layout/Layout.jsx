import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { ScrollRestoration } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/stateSlice'

function Layout() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     dispatch(setUser(JSON.parse(storedUser))); // Restore user to Redux state
  //   }
  // }, [dispatch]);

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