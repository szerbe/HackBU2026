import { useState } from "react";
import SearchBar from "../components/Searchbar";
import cake from "./cake.svg";
//import recipe from "../svgs/recipe.svg";

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
              <div className="flex text-center justify-content-center align-items-center gap-4">
                <img src={cake} alt="Cake" className="w-9 h-10 display-flex" />
                <p className="text-center text-(--t-color) display-flex">Welcome to the Recipe Converter!</p>
              </div>
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