const express = require("express");
const {
  getTheaters,
  createTheater,
  updateTheater,
  deleteTheater,
  getSingleheaters,
} = require("../controllers/theaterController");

const router = express.Router();

// GET all theater
router.get("/", getTheaters);

// GET single theater
router.get("/:id", getSingleheaters);

// POST -  Add new theater
router.post("/", createTheater);

// PATCH - Modify theater

router.patch("/:id", updateTheater);

//DELETE - Delete theater

router.delete("/:id", deleteTheater);

module.exports = router;
