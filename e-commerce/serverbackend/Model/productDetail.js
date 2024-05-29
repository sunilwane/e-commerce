const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    product: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    customerID: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const productDetails = mongoose.model("productDetails", userSchema);

module.exports = {
  productDetails,
};
