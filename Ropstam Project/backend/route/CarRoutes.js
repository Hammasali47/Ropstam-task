const express = require("express");
const {
  getCars,
  createCars,
  getCarsById,
  updateCars,
  deleteCars,
} = require("../controllers/carControllers");
const { protecttoken } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protecttoken, getCars);
router.route("/create").post(protecttoken, createCars);
router
  .route("/:id")
  .get(getCarsById)
  .put(protecttoken, updateCars)
  .delete(protecttoken, deleteCars);

module.exports = router;
