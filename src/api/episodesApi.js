// src/api/episodesApi.js
export const fetchEpisode = async (episodeNumber) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`);
  if (!response.ok) {
    throw new Error('Failed to fetch episode');
  }
  return response.json();
};
