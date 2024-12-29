import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from "react"
import Layout from "./layout/Layout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Vendors from "./pages/Vendors"
import Bills from "./pages/Bills"
import Customers from "./pages/Customers"
import Invoices from "./pages/Invoices"
import NewVendor from "./pages/NewVendor"

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/vendors",
        element: <Vendors />
      },
      {
        path: "/bills",
        element: <Bills />
      },
      {
        path: "/customers",
        element: <Customers />
      },
      {
        path: "/invoices",
        element: <Invoices />
      },
      {
        path: "/vendors/new",
        element: <NewVendor />
      },
    ],
  },
  {
    path: "/login",
    element : <Login />
  },
  {
    path: "/signup",
    element : <Signup />
  },
])


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
