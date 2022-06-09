const express = require("express");
const UserRoute = require("./route/UserRoute");
const CarRoutes = require("./route/CarRoutes");
const cors = require("cors");
const db = require("./db");
const dotenv = require("dotenv");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users/", UserRoute);
app.use("/api/cars/", CarRoutes);
dotenv.config("E:Ropstam Project\backend.env");

app.get("/", (req, res) => {
  res.send("Server Working");
});

const port = process.env.port || 5000;

app.listen(port, () => `Server is running on port ${port}`);
