import { useState } from "react";
import UseFetch from "./customHooks/useFetch";
import List from "./List";
import Pagination from "./Pagination";
import Search from "./Search"

const Home = () => {
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const { items, nextUrl, prevUrl, isLoading, error } = UseFetch(currentPage);
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
  };

  const search = (rows) => {
    // validate there is data and it has keys
    const columns = rows[0] && Object.keys(rows[0]);

    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

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
          <Search handleSearch={handleSearch}/>
          <List pokes={search(items)}></List>
          <Pagination next={nextUrl ? handleNext:null} prev={prevUrl ? handlePrev:null}/>
        </>
      )}
    </div>
  );
};

export default Home;
