import {configureStore, combineReducers } from "@reduxjs/toolkit"
import vendorSlice from './slices/vendorSlice'
import billSlice from './slices/billSlice'

const reducer = combineReducers({
    vendorSlice,
    billSlice,
})
const store = configureStore({
    reducer
})

export default store