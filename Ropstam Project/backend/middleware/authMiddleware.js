const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
const protecttoken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      token = req.headers.authorization.split(" ")[1];
      //   console.log("data", token, process.env.SECRET_KEY);
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY
          ? process.env.SECRET_KEY
          : "thisapplicationisrelatedtomerngoodluck"
      );
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      console.log("error", error);
      res.status(401).json({
        message: "unauthorized,token failed",
      });
    }
  if (!token) {
    res.json({
      message: "unauthorized,no token provided",
    });
  }
};
module.exports = { protecttoken };
