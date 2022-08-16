import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHeartCirclePlus, faThumbsUp} from '@fortawesome/free-solid-svg-icons'

const List = ({ pokes }) => {
  return (
    <div className="poke-list">
      <h2>Pokemons</h2>
      {pokes.map((item) => (
        <div className="poke-preview" key={item.name}>
          <div>
            <Link to={`/pokemon/${item.name}`}><h2>{item.name}</h2></Link>
          </div>
          <button><FontAwesomeIcon icon={faHeartCirclePlus} size="2x"/></button>
        </div>
      ))}
    </div>
  );
};

export default List;
