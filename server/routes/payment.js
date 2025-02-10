const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { Payements } = require("../db");

router.post("/createPayment", authMiddleware, async (req, res) => {
  const userId = req.userId;
  try {
    // let userVendors = await Pay.findOne({ _id: userId });
    let userPayments = await Payements.findOne({ _id: userId });

    if (!userPayments) {
      userPayments = await Payements.create({
        _id: userId,
        payements: [],
      });
    }

    userPayments.payments.push({
      ...req.body,
    });

    await userPayments.save();

    res.json({ msg: "payment made successfully" });
  } catch (error) {
    console.log(error);
    
    res.json({ msg: "Error making payment" });
  }
});

module.exports = router;
