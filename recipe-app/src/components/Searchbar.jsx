import React, { useState } from 'react';

const SearchBar = ({Text, onSearch, className }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        type="text"
        placeholder={Text}
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
      <p></p>
    </form>
  );
}; 


export default SearchBar;
