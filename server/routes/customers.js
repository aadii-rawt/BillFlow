const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { Customers } = require("../db");
const router = express.Router();

// create new vendor
router.post("/newcustomer", authMiddleware, async (req, res) => {
  const userDetails = req.body;
  console.log(userDetails);
  

  const userId = req.userId;
  try {
    let userCustomers = await Customers.findOne({ _id: userId });

    if (!userCustomers) {
      userCustomers = await Customers.create({
        _id: userId,
        customers: [],
      });
    }

    userCustomers.customers.push({
      ...userDetails
    });
    await userCustomers.save();

    res.json({ msg: "Customer created successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ msg: "Error creating vendor", error: error.message });
  }
});

// get all vendors
router.get("/vendors", authMiddleware, async (req, res) => {
  const _id = req.userId;
  const userVendors = await Vendors.findOne({ _id });
  try {
    if (!userVendors) {
      return res.json({ msg: "No vendors found for this user" });
    }
    res.json({ vendors: userVendors.vendors });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching vendors" });
  }
});

// get specific vendor
router.get("/:vendorId", authMiddleware, async (req, res) => {
  const _id = req.userId;
  const { vendorId } = req.params;
  const allVendors = await Vendors.findOne({ _id });
  try {
    const filterVendor = allVendors?.vendors.find((vendor) => {
      return vendor?._id.toString() === vendorId;
    });
    res.send(filterVendor);
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong" });
  }
});

// update vendor details
router.patch("/edit/:vendorId", authMiddleware, async (req, res) => {
  const { vendorId } = req.params;
  const userId = req.userId;
  const updatedData = req.body;

  try {
    let userVendors = await Vendors.findOne({ _id: userId });
    if (!userVendors) {
      return res.status(404).json({ msg: "User's vendors not found" });
    }

    const vendorIndex = userVendors.vendors.findIndex(
      (v) => v._id.toString() === vendorId
    );

    if (vendorIndex === -1) {
      return res.status(404).json({ msg: "Vendor not found" });
    }

    userVendors.vendors[vendorIndex] = {
      ...userVendors.vendors[vendorIndex], 
      ...updatedData, 
    };

    await userVendors.save();

    res.json({
      msg: "Vendor updated successfully",
      updatedVendor: userVendors.vendors[vendorIndex],
    });
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ msg: "Error updating vendor", error: error.message });
  }
});

module.exports = router;
