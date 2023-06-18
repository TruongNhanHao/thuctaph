const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    huyen: { type: String, required: true },
    xa: { type: String, required: true },
    sonha: { type: String, required: true },
  },
  { timestamps: true }
);
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        _id: {
          type: String,
        },
      },
    ],
    getName: { type: String, required: true },
    getSex: { type: String, required: true },
    getDate: { type: String, required: true },
    code: { type: String, default: "" },
    sdt: { type: String, required: true },
    price: { type: String, required: true },
    address: [addressSchema],
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
