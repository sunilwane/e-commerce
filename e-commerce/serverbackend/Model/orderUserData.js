const mongoose = require("mongoose");
const usedataScheme = mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: true },
    pincode: { type: Number, required: true },
    locality: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const orderData = mongoose.model("confirmOrder", usedataScheme);

module.exports = {
  orderData,
};
