import React, { useState, useEffect } from "react";
import SearchBar from "../components/Searchbar";
import cake from "./cake.svg";
//import recipe from "../svgs/recipe.svg";

const Home = () => {

  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  }
  const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
  });

    // Using useEffect for single rendering
    useEffect(() => {
        fetch("http://127.0.0.1:5000/data").then((res) =>
            res.json().then((data) => {
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
            .catch((err) => console.error("Error parsing JSON:", err))
        ).catch((err) => console.error("Fetch error:", err));;
    }, []);

  return (
    <div className="bg-(--primary-color) flex min-h-screen">
      <div
        className={`flex-1 transition-all duration-300 ease-in-out rounded-sm-r`}
      >
        <div className="p-8">
          <header className="bg-(--primary-color-accent-one) p-4 rounded-sm">
            <h1 className="text-3xl font-bold">
              <div className="flex text-center justify-content-center align-items-center gap-4">
                <img src={cake} alt="Cake" className="w-9 h-10 display-flex" />
                <p className="font-['Patrick_Hand'] text-center text-(--t-color)">Welcome to the Recipe Converter!</p>
              </div>
              <SearchBar  
                Text="Put your URL here" 
                className="font-['Patrick_Hand'] center text-center inline-block bg-(--primary-color-accent-two) p-4 rounded-lg"
                onSearch={handleSearch}
              />
            </h1>
          </header>
          <main className="p-4">
            <div className="inline-block center">
              <p>Output recipe here</p>
              <h1>React and flask</h1>
                  {/* Calling a data from setdata for showing */}
                  <p>{data.name}</p>
                  <p>{data.age}</p>
                  <p>{data.date}</p>
                  <p>{data.programming}</p>
              </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;