const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.SECRET_KEY
      ? process.env.SECRET_KEY
      : "thisapplicationisrelatedtomerngoodluck",
    {
      expiresIn: "10h",
    }
  );
};
module.exports = generateToken;
