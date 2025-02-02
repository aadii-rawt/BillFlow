const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser")
require('dotenv').config();

const vendorRoutes = require("../routes/vendor");
const billsRoutes = require("../routes/bills")
const userRoutes = require("../routes/user")
const paymentRoute = require('../routes/payment')

app.use(
  cors({
    origin: "http://localhost:5174", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    // allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser())


app.use("/vendor", vendorRoutes);
app.use("/bills", billsRoutes);
app.use('/users',userRoutes)
app.use('/payment',paymentRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});