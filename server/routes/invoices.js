const express = require("express");
const router = express.Router();
const { Bills, Invoices } = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/newInvoice", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const invoiceData = req.body;
  console.log(invoiceData);

  try {
    let userBills = await Invoices.findOne({ _id: userId });

    if (!userBills) {
      userBills = new Invoices({
        _id: userId,
        invoices: [],
      });
    }

    userBills.invoices.push(invoiceData);

    await userBills.save();

    res.json({ msg: "Invoice created successfully" });
  } catch (error) {
    console.error("Error creating invoice:", error);
    res.status(500).json({ msg: "Error creating invoice" });
  }
});

// get all bills
router.get("/userInvoices", authMiddleware, async (req, res) => {
  const _id = req.userId;
  const userInvoices = await Invoices.findOne({ _id });
  try {
    if (!userInvoices) {
      return res.json({ msg: "No invoices found for this user" });
    }
    res.json([...userInvoices.invoices]);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching invoices" });
  }
});

// get specific vendor bills
router.get("/vendorBills", authMiddleware, async (req, res) => {
  const _id = req.userId;
  const { vendorId } = req.query;
  const userBills = await Bills.findOne({ _id });
  try {
    if (!userBills) {
      return res.json({ msg: "No vendors found for this user" });
    }
    const filterdBills = userBills?.bills.filter((bill) => {
      return bill?.vendorId === vendorId;
    });
    res.send([...filterdBills]);
  } catch (error) {
    console.log(error);
  }
});

// get bill by id
router.get("/id", authMiddleware, async (req, res) => {
  const _id = req.userId;
  const { billId } = req.query;
  const userBills = await Bills.findOne({ _id });
  try {
    const filterdBill = userBills?.bills.find((bill) => {
      return bill?._id.toString() === billId;
    });
    res.send(filterdBill);
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong" });
  }
});

router.patch("/edit/:billId", authMiddleware, async (req, res) => {
  const { billId } = req.params;
  const userId = req.userId;
  const updatedData = req.body;
  try {
    let userBills = await Bills.findOne({ _id: userId });
    if (!userBills) {
      return res.status(404).json({ msg: "User's bills not found" });
    }

    const billIndex = userBills.bills.findIndex(
      (v) => v._id.toString() === billId
    );

    if (billIndex === -1) {
      return res.status(404).json({ msg: "Vendor not found" });
    }

    userBills.bills[billIndex] = {
      ...userBills.bills[billIndex],
      ...updatedData,
    };

    await userBills.save();

    res.json({
      msg: "bill updated successfully",
      updatedVendor: userBills.bills[billIndex],
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ msg: "Error updating bill", error: error.message });
  }
});

module.exports = router;
