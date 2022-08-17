import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavsArray = JSON.parse(localStorage.getItem("favs"));

    if (getFavsArray && getFavsArray.length > 0) {
      setFavorites([...getFavsArray]);
    }
  }, []);

  return (
    <div className="poke-favorites">
      {favorites.length === 0 && <h2>No Favorite pokemons yet.</h2>}
      {favorites.map((fav) => (
        <div key={fav}>
          <h2>{fav}</h2>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
