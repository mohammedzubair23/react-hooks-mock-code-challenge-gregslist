import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer( {filteredListings, removeListing }) {

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((card) => (
          <ListingCard {...card} removeListing={removeListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
