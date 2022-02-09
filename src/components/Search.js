import React from "react";

function Search({ searchListingByDescription }) {

const [searchValue, setSearchValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    searchListingByDescription(searchValue);
  }

const handleSearchInputChange = (e) => setSearchValue(e.target.value);


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleSearchInputChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
