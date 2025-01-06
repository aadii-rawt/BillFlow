const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rawatadii060:yDuEBbm5Ah20hjNt@cluster0.0yiiy.mongodb.net/BillFlow");

const vendorsSchema = new mongoose.Schema({
    salutation: String,
    firstName: String,
    lastName: String,
    companyName: String,
    DisplayName: String,
    email: String,
    Phone: String,
});


const vendors = mongoose.model("vendors",vendorsSchema)



module.exports = {vendors}