const express = require("express");
const { Vendors } = require("../db");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/newvendor", async (req, res) => {
  const {
    userId,
    salutation,
    lastName,
    firstName,
    companyName,
    displayName,
    email,
    Phone,
  } = req.body;

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

router.get("/vendors",authMiddleware, async (req, res) => {
  const { authorization: _id } = req.headers;

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

module.exports = router;
