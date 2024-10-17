import React from 'react';

const CharacterCard = ({ character }) => {
  const { name, status, species, image } = character;

  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Species:</strong> {species}</p>
    </div>
  );
};

export default CharacterCard;
