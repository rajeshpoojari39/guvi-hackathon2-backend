require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const theaterRoutes = require("./routes/theater");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Movie Booking Api");
});

//Theater Routes
app.use("/admin/theater", theaterRoutes);

//Connect to DB

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DATABASE");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
