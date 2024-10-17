import React, { useState } from "react";

const EpisodeSearch = ({ onSearch }) => {
  const [episodeNumber, setEpisodeNumber] = useState("");

  const handleSearch = () => {
    if (episodeNumber.trim()) {
      onSearch(episodeNumber);
    }
  };

  return (
    <div className="episode-search">
      <input
        type="number"
        placeholder="Enter episode number"
        value={episodeNumber}
        onChange={(e) => setEpisodeNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default EpisodeSearch;
