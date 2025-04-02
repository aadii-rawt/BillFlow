const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
require('dotenv').config();

// all routes
const vendorRoutes = require("../routes/vendor");
const billsRoutes = require("../routes/bills")
const userRoutes = require("../routes/user")
const paymentRoute = require('../routes/payment')
const customers = require("../routes/customers")
const invoices = require("../routes/invoices")
const ProductRoute = require("../routes/products");

app.use(
  cors({
    origin: "https://billsflow.netlify.app", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"], // Specify allowed methods
    // allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser())

mongoose.connect(process.env.DB_CONNECTION); // connect to the database

app.use("/vendor", vendorRoutes);
app.use("/bills", billsRoutes);
app.use('/users',userRoutes)
app.use('/payment',paymentRoute)
app.use("/customers",customers)
app.use("/invoices",invoices)
app.use("/product", ProductRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});