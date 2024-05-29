const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);


const userLogin = mongoose.model("userLogin",userSchema);

module.exports={
    userLogin
}