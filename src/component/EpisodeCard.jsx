import React from 'react';
import CharacterCard from './CharacterCard';

const EpisodeCard = ({ episode, characters }) => {
  const { name, air_date, episode: episodeCode } = episode;

  return (
    <div className="episode-card">
      <h2>{name}</h2>
      <p><strong>Air Date:</strong> {air_date}</p>
      <p><strong>Episode:</strong> {episodeCode}</p>
      
      <h3>Characters</h3>
      <div className="characters-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeCard;
