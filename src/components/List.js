import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";

const heartStyles = { fill: "red", fontSize: "2em" };

const List = ({ pokes }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavsArray = JSON.parse(localStorage.getItem("favs"));

    if (getFavsArray && getFavsArray.length > 0) {
      setFavorites([...getFavsArray]);
    }
  }, []);

  const handleFav = (item) => {
    const newfavs = favorites;
    newfavs.push(item.name);
    setFavorites([...newfavs]);
    localStorage.setItem("favs", JSON.stringify(favorites));
  };

  const handleUnFav = (item) => {
    const newfavs = favorites.filter((fav) => fav !== item.name);
    setFavorites([...newfavs]);
    localStorage.setItem("favs", JSON.stringify(favorites));
  };

  return (
    <div className="poke-list">
      <h2>Pokemons</h2>
      {pokes.map((item) => (
        <div className="poke-preview" key={item.name}>
          <div>
            <Link to={`/pokemon/${item.name}`}>
              <h2>{item.name}</h2>
            </Link>
          </div>
          {favorites.includes(item.name) ? (
            <button onClick={() => handleUnFav(item)}>
              <IoIosHeart style={heartStyles} />
            </button>
          ) : (
            <button onClick={() => handleFav(item)}>
              <IoIosHeartEmpty style={heartStyles} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
