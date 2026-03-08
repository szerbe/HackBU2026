import React, { useState, useEffect } from "react";
import SearchBar from "../components/Searchbar";
import CheckBox from "../components/Checkbox";
import cake from "./cake.svg";
//import recipe from "../svgs/recipe.svg";

const Home = () => {

  const [query, setQuery] = useState("");

  const [data, setdata] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    time: ""
  });

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);

    const formData = new FormData();
    formData.append('data', searchQuery);
  

    fetch("http://127.0.0.1:5000/data", {
          method: 'POST',
          body: formData 
    }).then(res => res.json())
  .then(recipeData => {
    setdata({
      name: recipeData.title,
      ingredients: recipeData.ingredients,
      instructions: recipeData.instructions,
      time: recipeData.total_time
    });
  })
  .catch(err => console.error("Error:", err));
  }

  const handleMetricConversion = () => {
    alert("Button was clicked!");
    // You can put any JavaScript code here
  };

  return (
    <div className="bg-(--primary-color) flex min-h-screen">
      <div
        className={`flex-1 transition-all duration-300 ease-in-out rounded-sm-r`}
      >
        <div className="p-8">
          <header className="bg-(--primary-color-accent-one) p-4 rounded-sm">
            <h1 className="text-3xl font-bold">
              <div className="flex justify-center items-center">
                <img src={cake} alt="Cake" className="w-9 h-10 display-flex"/>
                <p className="font-['Patrick_Hand'] text-center text-(--t-color)">Welcome to the Recipe Converter!</p>
              </div>
              <SearchBar  
                Text="Put your recipe link here!" 
                className="font-['Patrick_Hand'] center text-center inline-block bg-(--primary-color-accent-two) p-4 rounded-lg"
                onSearch={handleSearch}
              />
            </h1>
          </header>
          <main className="p-4">
            <div className="grid place-items-center font-['Patrick_Hand'] p-4">
              <div className="recipe-output">
                <h2>{data.name}</h2>
                <p>Prep + Cook Time: {data.time} minutes</p>
                <h3>Ingredients:</h3>
                <ul>
                  {data.ingredients?.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
                <h3>Instructions:</h3>
                <p>{data.instructions}</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;