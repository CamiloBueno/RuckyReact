export const fetchCharacter = async (characterUrl) => {
  const response = await fetch(characterUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch character");
  }
  return response.json();
};
