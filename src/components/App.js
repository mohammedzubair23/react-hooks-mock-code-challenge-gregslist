import React from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
  const [allListings, setAllListings] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const removeListing = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, { method: 'DELETE' }).then(() =>
      setAllListings((listings) => listings.filter((listing) => listing.id !== id))
    );
  };

  React.useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((response) => response.json())
      .then((listings) => setAllListings(listings));
  }, []);

  const getFilteredListings = () => {
    if (searchQuery === '') {
      return allListings;
    } else {
      return allListings.filter((listing) => listing.description.search(searchQuery) > -1);
    }
  };

  function searchListingByDescription(query) {
    setSearchQuery(query);
  }

  return (
    <div className="app">
      <Header searchListingByDescription={searchListingByDescription} />
      <ListingsContainer filteredListings={getFilteredListings()} removeListing={removeListing} />
    </div>
  );
}

export default App;