const Car = require("../model/CarModel");

const getCars = async (req, res) => {
  try {
    const notes = await Car.find({ user: req.user._id });
    res.json(notes);
  } catch (error) {
    console.log(error);
  }
};

const createCars = async (req, res) => {
  try {
    const { model, color, category, registeration_no } = req.body;
    if (
      model === "" ||
      color === "" ||
      category === "" ||
      registeration_no === ""
    ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    } else {
      const note = new Car({
        user: req.user._id,
        model,
        color,
        category,
        registration_no: registeration_no,
      });
      const createnote = await note.save();
      res.json(createnote);
    }
  } catch (err) {
    console.log("err", err);
  }
};
const getCarsById = async (req, res) => {
  try {
    const note = await Car.findById(req.params.id);
    res.json(note);
  } catch (error) {
    console.log(error);
  }
};
const updateCars = async (req, res) => {
  const { model, color, category, registeration_no } = req.body;
  const note = await Car.findById(req.params.id);
  //   if (note.user.toString() !== req.user._id.toString()) {
  //     return res.status(401).json({ msg: "Not Authorized" });
  //   }
  if (note) {
    note.model = model;
    note.color = color;
    note.category = category;
    note.registeration_no = registeration_no;
    const updateNote = await note.save();
    res.json(updateNote);
  } else {
    res.status(404).json({ msg: "Note not found" });
  }
};

const deleteCars = async (req, res) => {
  const note = await Car.findById(req.params.id);
  // if(note.user.toString()!==req.user._id.toString()){
  //     return res.status(401).json({msg:'Not Authorized'});
  // }
  if (note) {
    await note.remove();
    res.json({ msg: "Note deleted" });
  } else {
    res.status(404).json({ msg: "Note not found" });
  }
};

module.exports = {
  getCars,
  createCars,
  getCarsById,
  updateCars,
  deleteCars,
};
