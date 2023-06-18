const connectDB = require("./config/db");
const Carts = require("./data/carts");
// const Orders = require("./data/orders");
// const Order = require("./models/Order");
const Products = require("./data/Products");
// const Cart = require("./models/Cart");

const Product = require("./models/Product");
connectDB();
const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany([]);
    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
