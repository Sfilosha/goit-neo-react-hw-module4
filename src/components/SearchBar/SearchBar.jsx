import React from "react";

function SearchBar({ onSubmit }) {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
