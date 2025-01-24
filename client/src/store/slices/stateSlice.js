import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    state: [],
    user: null,
    vendorProfile: null,
    billPreview: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
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
    formatCurrency(amount) {
      return new Intl.NumberFormat("en-IN").format(amount);
    },
  },
});

export const {
  setVendorProfile,
  closeVendorProfile,
  setBillPreview,
  closeBillPreview,
  setUser,
  formatCurrency,
} = stateSlice.actions;
export default stateSlice.reducer;
