import { createSlice } from "@reduxjs/toolkit";

const vendorSlice = createSlice({
    name : "vendosr",
    initialState : {
        vendors : [
            {
                salutation: "Mr.",
                firstName: "sumit",
                lastName: "Rawat",
                companyName: "google",
                displayName: "sumit",
                email: "sumit@l.com",
                Phone: "+91 1234567890",
            }
        ]
    },
    reducers : {
        setVendors(state,action){
            state.vendors = action.payload
        }
    }
})

export const {setVendors} = vendorSlice.actions
export default vendorSlice.reducer