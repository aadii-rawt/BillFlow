const express = require("express");
const { Vendors } = require("../db");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/newvendor", authMiddleware, async (req, res) => {
  const {
    salutation,
    lastName,
    firstName,
    companyName,
    displayName,
    email,
    Phone,
  } = req.body;

  const userId = req.userId;
  try {
    let userVendors = await Vendors.findOne({ _id: userId });

    if (!userVendors) {
      userVendors = await Vendors.create({
        _id: userId,
        vendors: [],
      });
    }

    userVendors.vendors.push({
      salutation,
      lastName,
      firstName,
      companyName,
      displayName,
      email,
      Phone,
    });
    await userVendors.save();

    res.json({ msg: "Vendor created successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ msg: "Error creating vendor", error: error.message });
  }
});

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
router.get("/vendorId", authMiddleware, async (req, res) => {
  console.log("rechied");
  
  const _id = req.userId;
  const { vendorId } = req.query;
  const allVendors = await Vendors.findOne({ _id });
  console.log(allVendors);
  
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

module.exports = router;
