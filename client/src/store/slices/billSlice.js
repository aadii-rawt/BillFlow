import { createSlice } from "@reduxjs/toolkit";

const fakeBills = {
  bills: [
    {
      items: [{ description: "Phone", quantity: 1, rate: 500, amount: 900 }],
      billNumber: "#2345678",
      uploadedLogo: "234578987yt",
      FromAddress: "delhi",
      vendorName: "Vikash",
      date: "22/03/2024",
      dueDate: "30/04/2024",
      tax: 10,
      note: "",
      isPaid: "unpaid",
      billId: "w54e67rt8yu9oiugyjhvblkh",
      userId: "1278798764",
    },
    {
      items: [{ description: "Phone", quantity: 1, rate: 500, amount: 900 }],
      billNumber: "#2345678",
      uploadedLogo: "234578987yt",
      FromAddress: "delhi",
      vendorName: "amit",
      date: "22/03/2024",
      dueDate: "30/04/2024",
      tax: 10,
      note: "",
      isPaid: "unpaid",
      billId: "dfsdfjslkjflksh",
      userId: "1278798764",
    },
  ],
};

const billSlice = createSlice({
  name: "bills",
  initialState: fakeBills,
  reducers: {
    setBills(state, action) {
      state.bills = action.payload;
    },
  },
});

export const { setBills } = billSlice.actions;
export default billSlice.reducer;
