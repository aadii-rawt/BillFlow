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
import NewBill from "./pages/NewBill"
import {Provider} from 'react-redux'
import store from "./store/store"
import Setting from "./pages/Setting"
import EditVendor from "./pages/EditVendor"
import NewCustomer from "./pages/NewCustomer"
import NewInvoice from "./pages/NewInvoice"
//using redux
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
      {
        path: "/customers/new",
        element: <NewCustomer />
      },
      {
        path: "/bills/new",
        element: <NewBill />
      },
      {
        path: "/invoices/new",
        element: <NewInvoice />
      },
      {
        path: "/bills/edit/:vendorId",
        element: <EditVendor />
      },
      {
        paht : "/setting",
        element : <Setting />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    paht : "/setting",
    element : <Setting />
  }
])


function App() {
  return (
    <Provider  store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
