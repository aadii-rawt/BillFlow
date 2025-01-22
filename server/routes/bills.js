const express = require("express");
const { Bills } = require("../db");
const router = express.Router();

router.post("/newbill", async (req, res) => {
  const {userId} =  req.body
  console.log(req.body);  
  try {
    const userBills = await Bills.findOne({userId});
    if (!userBills) {
      userBills = await Bills.create({
        _id : userId,
        bills: [],
      });
    }

    userBills.bills.push({
     ...req.body
    });

    await userBills.save();

    res.json({ msg: "bill created successfully" });
  } catch (error) {
    res.json({ msg: "Error creating bill" });
  }
});

module.exports = router;
