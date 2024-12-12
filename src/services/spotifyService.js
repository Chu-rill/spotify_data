const spotifyRepository = require("../repositories/spotifyRepository");
const { groupBy, countBy } = require("lodash");

async function calculateStats() {
  const songs = await spotifyRepository.getAllSongs();

  const totalSongs = songs.length;
  const totalArtists = new Set(songs.map((song) => song.artist)).size;
  const totalUniqueSongs = new Set(songs.map((song) => song.song)).size;

  return { totalSongs, totalArtists, totalUniqueSongs };
}

async function getMonthlyStats(month) {
  const songs = await spotifyRepository.getSongsByMonth(month);
  const songCount = songs.length;
  const artistCounts = countBy(songs, "artist");

  return { songCount, artistCounts };
}

async function getTopArtists(threshold = 10) {
  const songs = await spotifyRepository.getAllSongs();
  const artistCounts = countBy(songs, "artist");
  const topArtists = Object.entries(artistCounts)
    .filter(([, count]) => count >= threshold)
    .sort((a, b) => b[1] - a[1]);

  return topArtists;
}

async function getTopSongs(threshold = 15) {
  const songs = await spotifyRepository.getAllSongs();
  const songCounts = countBy(songs, "song");
  const topSongs = Object.entries(songCounts)
    .filter(([, count]) => count >= threshold)
    .sort((a, b) => b[1] - a[1]);

  return topSongs;
}

module.exports = {
  calculateStats,
  getMonthlyStats,
  getTopArtists,
  getTopSongs,
};
