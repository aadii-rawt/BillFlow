import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    state: [],
    vendorProfile: null,
    billPreview : null
  },
  reducers: {
    setVendorProfile(state, action) {
      state.vendorProfile = action.payload;
    },
    closeVendorProfile(state, action) {
      state.vendorProfile = null;
    },
    setBillPreview(state, action) {
      state.billPreview = action.payload;
    },
    closeBillPreview(state) {
      state.billPreview = null;
    },
  },
});

export const { setVendorProfile, closeVendorProfile,setBillPreview,closeBillPreview } = stateSlice.actions;
export default stateSlice.reducer;
