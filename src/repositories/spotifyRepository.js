const Song = require("../models/song");

// Fetch all songs
async function getAllSongs() {
  return Song.find();
}

// Fetch songs filtered by date
async function getSongsByMonth(month) {
  return Song.find({ date: { $regex: month, $options: "i" } });
}

module.exports = {
  getAllSongs,
  getSongsByMonth,
};
