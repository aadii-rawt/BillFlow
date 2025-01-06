const express = require("express");
const { vendors } = require("../db");
const router = express.Router();

router.post("/newvendor", async (req, res) => {
  const {
    salutation,
    lastName,
    firstName,
    companyName,
    DisplayName,
    email,
    Phone,
  } = req.body;

  await vendors.create({
    salutation,
    lastName,
    firstName,
    companyName,
    DisplayName,
    email,
    Phone,
  });

  res.json({
    msg: "Vendor Created Successfully",
  });
});

router.get("/vendors", (req, res) => {
  vendors.find({}).then((resp) => {
    res.json({
      vendors: resp,
    });
  });
});

module.exports = router;
