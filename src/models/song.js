const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  artist: String,
  song: String,
  date: String,
});

module.exports = mongoose.model("Song", songSchema);
