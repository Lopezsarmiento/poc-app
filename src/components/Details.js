import { useParams } from "react-router-dom";
import UseFetch from "./customHooks/useFetch";

const url = "https://pokeapi.co/api/v2/pokemon/";

const Details = () => {
  const { name } = useParams();
  const { data, isLoading, error } = UseFetch(`${url}${name}`);

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <h2>Pokemon Details</h2>
          <div className="poke-details">
            <div>
              <h2>Name: {data.name}</h2>
            </div>
            <div>
              <h2>height: {data.height}</h2>
            </div>
            <div>
              <h2>Weight: {data.weight}</h2>
            </div>
            <div>
              <h2>Base Experience: {data.base_experience}</h2>
            </div>
            <div>
              <h2>Order: {data.order}</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
