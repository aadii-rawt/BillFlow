import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Layout() {
  return (
      <div className='flex min-h-screen'>
        <Sidebar />
        <div className='w-full h-full'>
          <Header />
          <Outlet />
        </div>
      </div>
  )
}

export default Layout