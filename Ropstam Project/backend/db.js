const mongoose = require("mongoose");

var mongoUrl = "mongodb://localhost:27017";
// "mongodb+srv://hammasali48:03215181367@cluster0.xqlui.mongodb.net/mern-pizza";

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("db connected");
});

db.on("error", () => {
  console.log("db connection error");
});

module.exports = mongoose;
