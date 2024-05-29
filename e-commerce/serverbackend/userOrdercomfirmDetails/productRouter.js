const express = require("express");
const { productDetails } = require("../Model/productDetail");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const notes = await productDetails.find({
      customerID: req.body.customerID,
    });
    console.log(notes, req.body.customerID);
    res.send(notes);
  } catch (err) {
    res.send({ err: "Something went wrong !" });
  }
});
productRouter.post("/addproduct", async (req, res) => {
  const tempdata = req.body;
  try {
    const temp = new productDetails(tempdata);
    await temp.save();
    res.send("the data is added successfully !");
  } catch (err) {
    res.send({ err: err.message });
  }
});

productRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const temp = await productDetails.findOne({ _id: id });
  try {
    if (req.body.AutherID !== temp.AutherID) {
      res.send("the unauthorized person");
    } else {
      await productDetails.findByIdAndDelete({ _id: id });
      res.send("the note is deleted");
    }
  } catch {
    res.send("something went wrong !");
  }
});

module.exports = {
  productRouter,
};
