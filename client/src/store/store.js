import {configureStore, combineReducers } from "@reduxjs/toolkit"
import vendorSlice from './slices/vendorSlice'
import billSlice from './slices/billSlice'
import stateSlice from './slices/stateSlice'

const reducer = combineReducers({
    vendorSlice,
    billSlice,
    stateSlice
})
const store = configureStore({
    reducer
})

export default store