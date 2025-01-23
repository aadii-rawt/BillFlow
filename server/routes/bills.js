const express = require("express");
const { Bills } = require("../db");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/newbill", authMiddleware, async (req, res) => {
  const userId = req._id;
  console.log(req.body);
  try {
    const userBills = await Bills.findOne({ userId });
    if (!userBills) {
      userBills = await Bills.create({
        _id: userId,
        bills: [],
      });
    }

    userBills.bills.push({
      ...req.body,
    });

    await userBills.save();

    res.json({ msg: "bill created successfully" });
  } catch (error) {
    res.json({ msg: "Error creating bill" });
  }
});

router.get("/userBills", authMiddleware, async (req, res) => {
  const _id = req.userId;
  const userBills = await Bills.findOne({ _id });
  try {
    if (!userBills) {
      return res.json({ msg: "No vendors found for this user" });
    }
    res.json([...userBills.bills]);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching vendors" });
  }
});

module.exports = router;
