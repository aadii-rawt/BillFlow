const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION);

const vendorsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // Define _id explicitly if needed
  vendors: [
    {
      salutation: String,
      firstName: String,
      lastName: String,
      companyName: String,
      displayName: String,
      email: String,
      Phone: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const billsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  bills: [
    {
      items: [
        { description: String, quantity: Number, rate: Number, amount: Number },
      ],
      billNumber: String,
      uploadedLogo: String,
      vendorName: String,
      vendorId: String,
      date: String,
      dueDate: String,
      tax: Number,
      note: String,
      isPaid: String,
      billId: String,
      totalAmount: Number,
      totalDueAmount: Number,
    },
  ],
});

const usersSchema = new mongoose.Schema({
  companyName: String,
  email: String,
  phoneNumber: String,
  password: String,
  companyAddress: String,
});

const paymentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  payments: [
    {
      paymentId: String,
      billId: String,
      billNumber: String,
      vendorId: String,
      amountPaid: Number,
      paymentMethod: String,
      paymentDate: String,
      note: String,
      createdAt: String,
    },
  ],
});

const Vendors = mongoose.model("vendors", vendorsSchema);
const Bills = mongoose.model("bills", billsSchema);
const Users = mongoose.model("users", usersSchema);
const Payements = mongoose.model("payments", paymentSchema);

module.exports = { Vendors, Bills, Users, Payements };
