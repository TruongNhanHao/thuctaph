const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    tinhnang: { type: Array },
    hieunang: { type: Array },
    hang: { type: String, default: "iphone" },
    ram: { type: String, default: "S" },
    color: { type: String, default: "black" },
    discount: { type: Number, required: true },
    count: { type: Number, required: true },
    evaluate: { type: Number, required: true },
    inStock: { type: Number, default: 10},
  },
  { collection: "products" },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
