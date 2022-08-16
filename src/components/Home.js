import { useState } from "react";
import UseFetch from "./customHooks/useFetch";
import List from "./List";
import Pagination from "./Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const { data, items, nextUrl, prevUrl, isLoading, error } = UseFetch(currentPage);

  console.log("data: ", data);
	const handleNext = () => {
		setCurrentPage(nextUrl)
	}

	const handlePrev = () => {
		setCurrentPage(prevUrl)
	}

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {items && (
        <>
          <List pokes={items}></List>
          <Pagination next={nextUrl ? handleNext:null} prev={prevUrl ? handlePrev:null}/>
        </>
      )}
    </div>
  );
};

export default Home;
