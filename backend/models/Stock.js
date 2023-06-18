const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    id_product: { type: String, required: true },
    id_nhakho: { type: String, required: true },
    quantity: { type: Number, required: true },
    import_price: { type: Number, required: Number },
    export_price: { type: Number, required: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", stockSchema);
