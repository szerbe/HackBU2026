import React, { useState, useEffect } from "react";
import SearchBar from "../components/Searchbar";
import CheckBox from "../components/Checkbox";
import cake from "./cake.svg";
//import recipe from "../svgs/recipe.svg";

const Home = () => {

  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  }

  const handleMetricConversion = () => {
    alert("Button was clicked!");
    // You can put any JavaScript code here
  };

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
              <div className="text-left">
                <p>Output recipe here <button 
                  onClick={handleMetricConversion} 
                  class="sml-btn">Convert to metric!
                  </button>
                </p>
                    {/* Calling a data from setdata for showing */}
                    <p><CheckBox label={" " + data.name}/></p>
                    <p>{data.age}</p>
                    <p>{data.date}</p>
                    <p>{data.programming}</p>
                </div>
              </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;