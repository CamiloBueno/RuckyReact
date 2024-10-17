import { useState, useEffect } from 'react';
import { fetchEpisode } from '../api/episodesApi';
import { fetchCharacter } from '../api/charactersApi';

const useFetchEpisode = (episodeNumber) => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const episodeData = await fetchEpisode(episodeNumber);
        setEpisode(episodeData);

        const characterData = await Promise.all(
          episodeData.characters.map((characterUrl) => fetchCharacter(characterUrl))
        );
        setCharacters(characterData);
      } catch (err) {
        setError('Failed to load episode or characters');
      } finally {
        setLoading(false);
      }
    };

    if (episodeNumber) {
      fetchData();
    }
  }, [episodeNumber]);

  return { episode, characters, loading, error };
};

export default useFetchEpisode;
