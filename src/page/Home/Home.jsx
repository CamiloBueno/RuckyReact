import React, { useState } from 'react';
import EpisodeSearch from '../../component/EpisodeSearch';
import EpisodeCard from '../../component/EpisodeCard';
import Loader from '../../component/Loader';
import ErrorMessage from '../../component/ErrorMessage';
import useFetchEpisode from '../../hook/useFetchEpisode';

const Home = () => {
  const [episodeNumber, setEpisodeNumber] = useState(null);
  const { episode, characters, loading, error } = useFetchEpisode(episodeNumber);

  const handleSearch = (number) => {
    setEpisodeNumber(number);
  };

  return (
    <div className="home">
      <EpisodeSearch onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {episode && <EpisodeCard episode={episode} characters={characters} />}
    </div>
  );
};

export default Home;
