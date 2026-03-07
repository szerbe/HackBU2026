import { useState } from "react";
import SearchBar from "../components/Searchbar";


const Home = () => {

  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  }

  return (
    <div className="bg-(--primary-color) flex min-h-screen">
      <div
        className={`flex-1 transition-all duration-300 ease-in-out rounded-sm-r`}
      >
        <div className="p-8">
          <header className="bg-(--primary-color-dark) p-4 rounded-sm">
            <h1 className="text-3xl font-bold">
              <p className="text-center text-(--t-color)">Welcome to the Recipe Converter!</p>
              <SearchBar  
                Text="Put your URL here" 
                className="text-center bg-(--secondary-color) p-4 rounded-lg"
                onSearch={handleSearch}
              />
            </h1>
          </header>
          <main className="p-4">
            <p>Output recipe here</p>
            <p>{query}</p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;