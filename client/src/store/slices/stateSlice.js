import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    state: [],
    vendorProfile: null,
  },
  reducers: {
    setVendorProfile(state, action) {
      state.vendorProfile = action.payload;
    },
    closeVendorProfile(state, action) {
      state.vendorProfile = null;
    },
  },
});

export const { setVendorProfile, closeVendorProfile } = stateSlice.actions;
export default stateSlice.reducer;
