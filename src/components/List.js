import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

const List = ({ pokes }) => {
  return (
    <div className="poke-list">
      <h2>Pokemons</h2>
      {pokes.map((item) => (
        <div className="poke-preview" key={item.name}>
          <div>
            <Link to={`/pokemon/${item.name}`}><h2>{item.name}</h2></Link>
          </div>
          <button><IoIosHeart style = { {fill: 'red', fontSize: "2em" }} /></button>
        </div>
      ))}
    </div>
  );
};

export default List;
