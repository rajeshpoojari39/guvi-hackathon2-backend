const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const theaterSchema = new Schema(
  {
    theaterName: {
      type: String,
      required: true,
    },
    films: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theater", theaterSchema);
