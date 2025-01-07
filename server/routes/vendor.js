const express = require("express");
const { vendors } = require("../db");
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
    const userVendors = await vendors.findOne({ userId });

    if (!userVendors) {
      userVendors = await vendors.create({
        userId,
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
    res.json({ msg: "Error creating vendor" });
  }

  // await vendors.create({
  //   userId,
  //   vendors : [
  //     {
  //       salutation,
  //       lastName,
  //       firstName,
  //       companyName,
  //       displayName,
  //       email,
  //       Phone,
  //     }
  //   ]
  // });

  // res.json({
  //   msg: "Vendor Created Successfully",
  // });
});

router.get("/vendors", async (req, res) => {
  const { authorization : userId} = req.headers;
  const userVendors = await vendors.findOne({ userId });

  try {
    if (!userVendors) {
      return res.json({ msg: "No vendors found for this user" });
    }
    console.log(userVendors);   
    res.json({ vendors: userVendors.vendors });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching vendors" });
  }
});

module.exports = router;
