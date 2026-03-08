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
    <div className="text-center">
      <form onSubmit={handleSubmit} className={className}>
        <input
          type="text"
          placeholder={Text}
          value={query}
          onChange={handleInputChange}
        />
        <button 
          type="submit" 
          class="btn">Search
        </button>
      </form>
    </div>
  );
}; 


export default SearchBar;
