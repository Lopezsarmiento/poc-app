const Search = ({ handleSearch }) => {
    return (
      <div className="poke-search">
        <input
          type="text"
          placeholder="Type a name..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    );
  };
  
  export default Search;