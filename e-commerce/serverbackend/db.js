const mongoose = require("mongoose");

const connections = mongoose.connect("mongodb://localhost:27017/e-commerce");

module.exports = {
  connections,
};
