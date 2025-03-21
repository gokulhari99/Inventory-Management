const express = require("express");
const Invoice = require("../models/invoiceModel");

const router = express.Router();

// POST - Create new invoice
router.post("/", async (req, res) => {
  const { productName, quantity, price, customerName, date, total } = req.body;

  const newInvoice = new Invoice({
    productName,
    quantity,
    price,
    customerName,
    date,
    total,
  });

  try {
    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
