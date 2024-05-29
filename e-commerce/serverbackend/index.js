const express = require("express");
const { connections } = require("./db");
const cors = require("cors");
const { paymentModel } = require("./Model/userModel");
const { orderData } = require("./Model/orderUserData");
const { userRoute } = require("./userRouter/userlogin");
const { notesRouter } = require("./userOrdercomfirmDetails/userOrder");
const { auth } = require("./Middle/Authmiddle");
const { productRouter } = require("./userOrdercomfirmDetails/productRouter");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("data get");
});

app.use("/user", userRoute);

app.use(auth);
app.use("/product", productRouter);
app.use("/orderuser", notesRouter);

// app.post("/orderConfirm", async (req, res) => {
//   const userdata = req.body;
//   const user = new orderData(userdata);
//   await user.save();
//   res.send("order is confirmed");
// });
app.listen(8083, async () => {
  console.log("server is listening.......");
  try {
    await connections;
    console.log("connected to the DB");
  } catch (err) {
    console.log(err);
    console.log("db is not connected");
  }
});
