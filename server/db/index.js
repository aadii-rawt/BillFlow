const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rawatadii060:yDuEBbm5Ah20hjNt@cluster0.0yiiy.mongodb.net/BillFlow"
);

const vendorsSchema = new mongoose.Schema({
  userId: String,
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

const vendors = mongoose.model("vendors", vendorsSchema);

module.exports = { vendors };
