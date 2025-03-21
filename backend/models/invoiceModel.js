const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  price: Number,
  customerName: String,
  date: String,
  total: Number,
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
