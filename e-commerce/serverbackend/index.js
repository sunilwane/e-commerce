const express = require("express");
const { connections } = require("./db");
const cors = require("cors");
const { paymentModel } = require("./Model/userModel");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("data get");
});

app.post("/payment", async (req, res) => {
  const userdata = req.body;

  const user = new paymentModel(userdata);
  await user.save();
  res.send("data is send succefully");
});
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
