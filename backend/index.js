const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stockRoute = require("./routes/stock");
const providerRoute = require("./routes/provider");
const warehouseRoute = require("./routes/warehouse");
const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const connectDB = require("./config/db");
const multer = require("multer");
const path = require("path");
var morgan = require("morgan");
var cors = require("cors");
// dotenv.config();
connectDB();
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());
// app.use(morgan("combined"));
app.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/stock", stockRoute);
app.use("/api/provider", providerRoute);
app.use("/api/warehouse", warehouseRoute);
app.use(errorMiddleware);
app.use(notFoundMiddleware);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
