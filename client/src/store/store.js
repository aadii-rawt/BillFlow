import {configureStore, combineReducers } from "@reduxjs/toolkit"
import vendorSlice from './slices/vendorSlice'

const reducer = combineReducers({
    vendorSlice
})
const store = configureStore({
    reducer
})

export default store