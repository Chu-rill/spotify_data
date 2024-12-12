const express = require("express");
const {
  getStats,
  getTopArtists,
  getTopSongs,
  getMonthlyStats,
} = require("../controllers/spotifyController");

const router = express.Router();

// Define API endpoints
router.get("/stats", getStats);
router.get("/top-artists", getTopArtists);
router.get("/top-songs", getTopSongs);
router.get("/monthly-stats/:month", getMonthlyStats);

module.exports = router;
