const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { userLogin } = require("../Model/userLogin");

const userRoute = express.Router();

userRoute.post("/register", async (req, res) => {
  const { name, mobile, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async function (err, hash) {
      const user = new userLogin({ name, mobile, email, pass: hash });
      await user.save();
      res.send("New user Has Been registered...");
    });
  } catch (err) {
    res.send({ err: err.message });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await userLogin.findOne({ email });
    if (user) {
      bcrypt.compare(pass, user.pass, async function (err, result) {
        if (result) {
          var token = jwt.sign(
            {customerID: user._id, email: user.email },
            "FullStack"
          );
          res.send({ msg: "login Successfull", token: token });
        } else {
          res.send({ msg: "wrong Credential !!!" });
        }
      });
    } else {
      res.send({ msg: "wrong Credential !!!" });
    }
  } catch (err) {
    res.send({ msg: "wrong Credential !!!" });
  }
});

module.exports = {
  userRoute,
};
