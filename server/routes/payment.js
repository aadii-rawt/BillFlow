const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/createPayment", authMiddleware, async (req, res) => {
    
});

module.exports = router;
