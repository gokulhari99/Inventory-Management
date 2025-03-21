const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const invoiceRoutes = require("./routes/invoiceRoutes");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/invoiceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.use("/api/invoices", invoiceRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
