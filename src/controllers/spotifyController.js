const spotifyService = require("../services/spotifyService");

async function getStats(req, res) {
  try {
    const stats = await spotifyService.calculateStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getTopArtists(req, res) {
  try {
    const topArtists = await spotifyService.getTopArtists();
    res.json(topArtists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getTopSongs(req, res) {
  try {
    const topSongs = await spotifyService.getTopSongs();
    res.json(topSongs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getMonthlyStats(req, res) {
  try {
    const { month } = req.params;
    const stats = await spotifyService.getMonthlyStats(month);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getStats,
  getTopArtists,
  getTopSongs,
  getMonthlyStats,
};
