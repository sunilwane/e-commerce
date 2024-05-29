const express = require("express");
const { orderData } = require("../Model/orderUserData");
const notesRouter = express.Router();

notesRouter.get("/", async (req, res) => {
  try {
    const notes = await orderData.find({ customerID: req.body.customerID });
    console.log(notes, " notes data");
    res.send(notes);
  } catch (err) {
    res.send({ err: "Something went wrong !" });
  }
});
notesRouter.post("/orderConfirm", async (req, res) => {
  const tempdata = req.body;
  try {
    const temp = new orderData(tempdata);
    await temp.save();
    res.send("the data is added successfully !");
  } catch (err) {
    res.send({ err: err.message });
  }
});

notesRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const temp = await orderData.findOne({ _id: id });
  try {
    if (req.body.AutherID !== temp.AutherID) {
      res.send("you are not authorized.......");
    } else {
      await orderData.findByIdAndUpdate({ _id: id }, req.body);
      res.send("the note is updated");
    }
  } catch {
    res.send("something went wrong !");
  }
});

notesRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const temp = await orderData.findOne({ _id: id });
  try {
    if (req.body.AutherID !== temp.AutherID) {
      res.send("the unauthorized person");
    } else {
      await orderData.findByIdAndDelete({ _id: id });
      res.send("the note is deleted");
    }
  } catch {
    res.send("something went wrong !");
  }
});

module.exports = {
  notesRouter,
};
