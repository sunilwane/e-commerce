// const express = require("express");
const mongoose = require("mongoose");

const paymentschema = mongoose.Schema(
  {
    name: { type: String, required: true },
    last: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const paymentModel = mongoose.model("paymentOption", paymentschema);

module.exports = {
  paymentModel,
};
