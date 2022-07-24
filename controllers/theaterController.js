const mongoose = require("mongoose");
const Theater = require("../models/theaterModel");

// GET all theater
const getTheaters = async (req, res) => {
  try {
    const theater = await Theater.find({});
    res.status(200).json(theater);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET single theater
const getSingleheaters = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such theater" });
  }

  const theater = await Theater.find({ _id: id });
  if (!theater) {
    return res.status(400).json({ error: "No such theater" });
  }

  res.status(200).json(theater);
};

// POST -  Add new theater

const createTheater = async (req, res) => {
  const { theaterName } = req.body;
  try {
    const theater = await Theater.create({ theaterName });
    res.status(200).json(theater);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH - Modify theater
const updateTheater = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such theater" });
  }

  const theater = await Theater.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!theater) {
    return res.status(400).json({ error: "No such theater" });
  }

  res.status(200).json(theater);
};

//DELETE - Delete theater
const deleteTheater = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such theater" });
  }

  const theater = await Theater.findOneAndDelete({ _id: id });

  if (!theater) {
    return res.status(400).json({ error: "No such theater" });
  }

  res.status(200).json(theater);
};

module.exports = {
  getTheaters,
  createTheater,
  updateTheater,
  deleteTheater,
  getSingleheaters,
};
