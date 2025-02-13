import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    state: [],
    user: null,
    vendorProfile: null,
    billPreview: null,
    userProfile: false,
    notification: null,
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
    handleUserProfile(state, action) {
      state.userProfile = !state.userProfile;
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat("en-IN").format(amount);
    },
    handleNotify(state,action) {
      state.notification = action.payload;
    },
    stopNotify(state,) {
      state.notification = null;
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
  handleUserProfile,
  handleNotify,
  stopNotify
} = stateSlice.actions;
export default stateSlice.reducer;
