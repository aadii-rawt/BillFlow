const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const vendorRoutes = require("../routes/vendor");
const billsRoutes = require("../routes/bills")
app.use(
  cors({
    origin: "http://localhost:5174", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    // allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

app.use(express.json());

app.use(bodyParser.json());
app.use("/vendor", vendorRoutes);
app.use("/bills", billsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
