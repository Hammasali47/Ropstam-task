const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    registration_no: {
      type: String,
      required: true,
      //   unique: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
  },
  {
    timestamp: true,
  }
);

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
