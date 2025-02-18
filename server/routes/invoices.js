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
  const { invoiceId } = req.query;
  const userInvoices = await Invoices.findOne({ _id });
  try {
    const filterdInvoices = userInvoices?.invoices.find((bill) => {
      return bill?._id.toString() === invoiceId;
    });
    res.send(filterdInvoices);
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong" });
  }
});

router.patch("/edit/:invoiceId", authMiddleware, async (req, res) => {
  const { invoiceId } = req.params;
  const userId = req.userId;
  const updatedData = req.body;
  try {
    let userInvoices = await Invoices.findOne({ _id: userId });
    if (!userInvoices) {
      return res.status(404).json({ msg: "User's bills not found" });
    }

    const invoiceIndex = userInvoices.invoices.findIndex(
      (v) => v._id.toString() === invoiceId
    );

    if (invoiceIndex === -1) {
      return res.status(404).json({ msg: "customer not found" });
    }

    userInvoices.invoices[invoiceIndex] = {
      ...userInvoices.invoices[invoiceIndex],
      ...updatedData,
    };

    await userInvoices.save();

    res.json({
      msg: "invoice updated successfully",
      updatedInvoice: userInvoices.invoices[invoiceIndex],
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ msg: "Error updating invoice", error: error.message });
  }
});

module.exports = router;
