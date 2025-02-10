const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { Payements, Bills } = require("../db");

router.post("/createPayment", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const { billId } = req.body;
  try {
    // let userVendors = await Pay.findOne({ _id: userId });

    let userBills = await Bills.findOne({ _id: userId });

    if (!userBills) {
      return res.status(404).json({ msg: "No bills found for this user" });
    }

    const billIndex = userBills.bills.findIndex(
      (bill) => bill?.billId === billId
    );
    if (billIndex === -1) {
      return res.status(404).json({ msg: "Bill not found" });
    }

    userBills.bills[billIndex].isPaid = "paid" || "Paid"; // Default to "Paid"

    await userBills.save();

    // store payment
    // let userPayments = await Payements.findOne({ _id: userId });

    // if (!userPayments) {
    //   userPayments = await Payements.create({
    //     _id: userId,
    //     payements: [],
    //   });
    // }

    // userPayments.payments.push({
    //   ...req.body,
    // });

    // await userPayments.save();

    res.json({ msg: "payment made successfully" });
  } catch (error) {
    console.log(error);

    res.json({ msg: "Error making payment" });
  }
});

module.exports = router;
