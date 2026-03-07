import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
