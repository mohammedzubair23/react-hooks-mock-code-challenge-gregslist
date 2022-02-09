import React from "react";
import Search from "./Search";

function Header({ searchListingByDescription }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchListingByDescription={searchListingByDescription}/>
    </header>
  );
}

export default Header;
